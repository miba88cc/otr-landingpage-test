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
