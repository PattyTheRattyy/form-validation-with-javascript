console.log("heyo");

const form = document.querySelector("#form");

const email = document.querySelector("#email");
const country = document.querySelector("#country");
const postal = document.querySelector("#postal");
const password = document.querySelector("#password");
const confirmPWD = document.querySelector("#confirmPWD");

email.addEventListener("input", (e) => {
  checkEmail();
});

function checkEmail() {
  if (email.checkValidity()) {
    email.setCustomValidity("");
  } else if (email.validity.typeMismatch) {
    email.setCustomValidity("This is not an email. (example@domain.com)");
  } else {
    email.setCustomValidity("");
  }
  email.reportValidity();
}

country.addEventListener("input", (e) => {
  checkCountry();
});

function checkCountry() {
  if (country.checkValidity()) {
    country.setCustomValidity("");
  } else if (country.validity.typeMismatch) {
    country.setCustomValidity("This is not an country.");
  } else {
    country.setCustomValidity("");
  }
  country.reportValidity();
}

postal.addEventListener("input", (e) => {
  checkPostal();
});

function checkPostal() {
  if (country.value == "USA") {
    console.log("USA!!");
    postal.type = "number";
    console.log(postal.value.length);
    if (postal.value.length != 5) {
      console.log("wrong length!");
      postal.setCustomValidity(
        "postal codes in the US should have a length of 5"
      );
      postal.reportValidity();
    } else if (postal.validity.typeMismatch) {
      postal.setCustomValidity("Numbers only.");
      postal.reportValidity();
    } else {
      postal.setCustomValidity("");
    }
  } else if (country.value == "CAN") {
    postal.type = "text";
    console.log("CANADA!!");
    if (postal.value.length != 6) {
      postal.setCustomValidity(
        "postal codes in Canada should have a length of 6"
      );
      postal.reportValidity();
    } else {
      postal.setCustomValidity("");
      postal.reportValidity();
    }
  }
}

password.addEventListener("input", (e) => {
  checkPassword();
});

function checkPassword() {
  if (password.checkValidity()) {
    password.setCustomValidity("");
  } else if (password.validity.typeMismatch) {
    password.setCustomValidity("This is not a password.");
  } else {
    password.setCustomValidity("");
  }
  password.reportValidity();
}

confirmPWD.addEventListener("input", (e) => {
  confirmPassword();
});

function confirmPassword() {
  if (confirmPWD.value != password.value) {
    confirmPWD.setCustomValidity("Passwords do not match!");
  } else if (confirmPWD.checkValidity()) {
    confirmPWD.setCustomValidity("");
  } else if (confirmPWD.validity.typeMismatch) {
    confirmPWD.setCustomValidity("This is not a password.");
  } else {
    confirmPWD.setCustomValidity("");
  }
  confirmPWD.reportValidity();
}
