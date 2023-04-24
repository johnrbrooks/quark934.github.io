document.addEventListener('DOMContentLoaded', () => {
  const emailForm = document.querySelector("#emailForm");
  const inputResponses = document.querySelector("#inputResponses");

  emailForm.addEventListener("submit", showSubmission);

  function showSubmission(event) {
    event.preventDefault();
    inputResponses.innerHTML = "";
    let emailInput = document.querySelector("#email");
    let email = emailInput.value;
    let response = document.createElement("li");
    response.innerText = "Your email has been added to the mailing list!";
    inputResponses.appendChild(response);
    emailForm.reset();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector("#contactForm");
  const inputResponses = document.querySelector("#inputResponses");
  const body = document.querySelector("#contact-body");

  contactForm.addEventListener("submit", showSubmission);

  function showSubmission(event) {
    event.preventDefault();
    inputResponses.innerHTML = "";
    let response = document.createElement("li");
    response.innerText = "We hope you're ready for a fun night!";
    inputResponses.appendChild(response);
    contactForm.reset();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const menuElement = document.querySelector('.menu-item-list');
  const menuOpenButton = document.getElementById('menuTrigger');

  menuOpenButton.addEventListener('click', openMenu);

  function openMenu() {
    menuElement.classList.add("menu-open");
  }

  const closeMenuButton = document.querySelector('.close-menu-button');

  closeMenuButton.addEventListener('click', closeMenu);

  function closeMenu() {
    menuElement.classList.remove("menu-open");
  }
});
