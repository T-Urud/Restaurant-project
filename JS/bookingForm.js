const today = new Date().toISOString().split("T")[0];
booking_date.value = today;
booking_date.min = today;
const hour = new Date().toISOString();

const form = document.querySelector("form");

function validPhone(phone) {
  let regex = new RegExp("[0-9-+]");
  if (!regex.test(phone)) {
    throw new Error("le téléphone n'est pas valide");
  }
}

const emailChecker = (value) => {
  if (!value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i)) {
    errorDisplay("email", "le mail n'est pas valide");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
