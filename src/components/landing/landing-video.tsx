export function LandingVideo() {
  return (
    <section className="video-section">
      <div className="reveal">
        <div className="video-frame">
          <video
            className="video-el"
            src="/ceptly-ad.mp4"
            autoPlay
            muted
            loop
            controls
            playsInline
            preload="metadata"
          />
        </div>
      </div>
    </section>
  );
}
