import { LandingAppPreview } from "./landing-app-preview";

export function LandingShowcase() {
  return (
    <div className="showcase">
      <div className="win">
        <div className="win-bar">
          <div className="tl">
            <i />
            <i />
            <i />
          </div>
          <span className="addr">app.ceptly.ai</span>
        </div>
        <LandingAppPreview />
      </div>
    </div>
  );
}
