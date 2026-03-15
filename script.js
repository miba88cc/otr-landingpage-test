function selectOffer(offerName) {
  const offerInput = document.getElementById("offer");
  const formSection = document.getElementById("anfrage");

  if (offerInput) {
    offerInput.value = offerName;
  }

  if (formSection) {
    formSection.scrollIntoView({ behavior: "smooth" });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const portfolioVideos = document.querySelectorAll(".portfolio-video");

  portfolioVideos.forEach((video) => {
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const tryPlay = () => {
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch(() => {});
      }
    };

    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);

    tryPlay();
  });
});