const form = document.querySelector("form");
const contactInfo = document.querySelectorAll(".contact-info");

document.querySelector(".volunteer").addEventListener("click", showForm);
document.querySelectorAll(".arrow").forEach((element) => {
  element.addEventListener("click", showContact);
});

function showForm() {
  form.classList.add("show");
}

function showContact(event) {
  const index = event.currentTarget.dataset.index;
  contactInfo[index].classList.toggle("contact-show");
}
