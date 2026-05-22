"use client";

import React, { useMemo, useRef, useLayoutEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, wrapEffect } from "@react-three/postprocessing";
import { Effect } from "postprocessing";
import * as THREE from "three";

// Shader code for dithering
const ditherFragmentShader = `
uniform float colorNum;
uniform float pixelSize;
uniform vec2 resolution;

const float bayerMatrix8x8[64] = float[64](
  0.0/64.0, 48.0/64.0, 12.0/64.0, 60.0/64.0,  3.0/64.0, 51.0/64.0, 15.0/64.0, 63.0/64.0,
  32.0/64.0,16.0/64.0, 44.0/64.0, 28.0/64.0, 35.0/64.0,19.0/64.0, 47.0/64.0, 31.0/64.0,
  8.0/64.0, 56.0/64.0,  4.0/64.0, 52.0/64.0, 11.0/64.0,59.0/64.0,  7.0/64.0, 55.0/64.0,
  40.0/64.0,24.0/64.0, 36.0/64.0, 20.0/64.0, 43.0/64.0,27.0/64.0, 39.0/64.0, 23.0/64.0,
  2.0/64.0, 50.0/64.0, 14.0/64.0, 62.0/64.0,  1.0/64.0,49.0/64.0, 13.0/64.0, 61.0/64.0,
  34.0/64.0,18.0/64.0, 46.0/64.0, 30.0/64.0, 33.0/64.0,17.0/64.0, 45.0/64.0, 29.0/64.0,
  10.0/64.0,58.0/64.0,  6.0/64.0, 54.0/64.0,  9.0/64.0,57.0/64.0,  5.0/64.0, 53.0/64.0,
  42.0/64.0,26.0/64.0, 38.0/64.0, 22.0/64.0, 41.0/64.0,25.0/64.0, 37.0/64.0, 21.0/64.0
);

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    vec2 scaledCoord = floor(uv * resolution / pixelSize);
    int x = int(mod(scaledCoord.x, 8.0));
    int y = int(mod(scaledCoord.y, 8.0));
    
    // Map standard UV to pixel coords for matrix lookup
    float threshold = bayerMatrix8x8[y * 8 + x] - 0.5;
    
    vec3 col = inputColor.rgb;
    
    // Apply dither
    float step = 1.0 / (colorNum - 1.0);
    col = col + threshold * step;
    
    // Quantize
    col = floor(col * (colorNum - 1.0) + 0.5) / (colorNum - 1.0);
    
    outputColor = vec4(col, inputColor.a);
}
`;

class DitherEffectImpl extends Effect {
  constructor({ colorNum = 10, pixelSize = 10 } = {}) {
    const uniforms = new Map<string, THREE.Uniform>([
      ["colorNum", new THREE.Uniform(colorNum)],
      ["pixelSize", new THREE.Uniform(pixelSize)],
      ["resolution", new THREE.Uniform(new THREE.Vector2(1, 1))],
    ]);
    super("DitherEffect", ditherFragmentShader, { uniforms });
  }

  update(
    renderer: THREE.WebGLRenderer,
    inputBuffer: THREE.WebGLRenderTarget,
    deltaTime: number,
  ) {
    const resolution = this.uniforms.get("resolution");
    if (resolution) {
      resolution.value.set(inputBuffer.width, inputBuffer.height);
    }
  }
}

const DitherEffect = wrapEffect(DitherEffectImpl);

// Logo Geometry Helper
const CX = 75.5;
const CY = 84.4;

const transformPoint = (p: number[]) => {
  // Center and invert Y (SVG y-down vs 3D y-up)
  return [p[0] - CX, -(p[1] - CY), 0] as [number, number, number];
};

const Beam = ({
  start,
  end,
  color,
  thickness = 8,
}: {
  start: number[];
  end: number[];
  color: string;
  thickness?: number;
}) => {
  const mesh = useRef<THREE.Mesh>(null);
  const length = useMemo(
    () => new THREE.Vector3(...start).distanceTo(new THREE.Vector3(...end)),
    [start, end],
  );

  const { position, rotation } = useMemo(() => {
    const s = new THREE.Vector3(...start);
    const e = new THREE.Vector3(...end);
    const pos = s.clone().add(e).multiplyScalar(0.5);

    const direction = e.clone().sub(s).normalize();
    const quaternion = new THREE.Quaternion();
    quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), direction);
    const rot = new THREE.Euler().setFromQuaternion(quaternion);

    return { position: pos, rotation: rot };
  }, [start, end]);

  return (
    <mesh ref={mesh} position={position} rotation={rotation}>
      <boxGeometry args={[thickness, thickness, length]} />
      <meshStandardMaterial
        color={color}
        roughness={0.2}
        metalness={0.5}
        transparent
        opacity={0.5}
      />
    </mesh>
  );
};

const Logo = ({ color, ...props }: any) => {
  // Transformed points for the logo parts
  // Tri 1: M8 109.908L98 57.9482V161.868L8 109.908Z
  const t1 = useMemo(
    () => [
      transformPoint([8, 109.908]),
      transformPoint([98, 57.9482]),
      transformPoint([98, 161.868]),
    ],
    [],
  );

  // Line: M52.54 136.298L96.64 59.9082
  const l1 = useMemo(
    () => [transformPoint([52.54, 136.298]), transformPoint([96.64, 59.9082])],
    [],
  );

  // Tri 2: M143 32.9082L98 58.8882V6.92822L143 32.9082Z
  const t2 = useMemo(
    () => [
      transformPoint([143, 32.9082]),
      transformPoint([98, 58.8882]),
      transformPoint([98, 6.92822]),
    ],
    [],
  );

  return (
    <group {...props}>
      {/* Triangle 1 */}
      <Beam start={t1[0]} end={t1[1]} color={color} />
      <Beam start={t1[1]} end={t1[2]} color={color} />
      <Beam start={t1[2]} end={t1[0]} color={color} />

      {/* Line */}
      <Beam start={l1[0]} end={l1[1]} color={color} />

      {/* Triangle 2 */}
      <Beam start={t2[0]} end={t2[1]} color={color} />
      <Beam start={t2[1]} end={t2[2]} color={color} />
      <Beam start={t2[2]} end={t2[0]} color={color} />
    </group>
  );
};

function Scene() {
  const group = useRef<THREE.Group>(null);

  const logos = useMemo(() => {
    // Reduced count from 30 to 15 to avoid clutter with complex shapes
    return Array.from({ length: 15 }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 10,
      ] as [number, number, number],
      // Scale down significanty as SVG coords are ~150 units
      // We want approx size 2-3 units. 150 * 0.02 = 3.
      scale: [
        0.015 + Math.random() * 0.015,
        0.015 + Math.random() * 0.015,
        0.015 + Math.random() * 0.015,
      ] as [number, number, number],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      ] as [number, number, number],
    }));
  }, []);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.001;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={group}>
      {/* Strong directional light for contrast */}
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <directionalLight position={[-10, -5, -5]} intensity={1} />
      <ambientLight intensity={1} />

      {logos.map((item, i) => (
        <Logo
          key={i}
          position={item.position}
          rotation={item.rotation}
          scale={item.scale}
          color={i % 2 === 0 ? "#B1FFA5" : "#56FF3C"}
        />
      ))}
    </group>
  );
}

export default function GeometricDither() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
        <Scene />
        <EffectComposer>
          <DitherEffect colorNum={5} pixelSize={2} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
