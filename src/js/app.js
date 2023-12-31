const socialsContainer = document.querySelector(".card__social");
const socialToggleButton = document.querySelector(".btn--socials");

socialToggleButton?.addEventListener("click", () => {
  socialsContainer?.classList.toggle("active");
});
