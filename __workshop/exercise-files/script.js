//This renders the results from the form to the document results.html
// const resultsList = document.getElementById("results");

// new URLSearchParams(window.location.search).forEach((value, name) => {
//   resultsList.append(`${name}: ${value}`);
//   resultsList.append(document.createElement("br"));
// });
//I don't fully understand new URLSeachParams but I'm sure we'll see it later.
//I know that for every inputs sumbitted, it will render each result in the results.html
//by rendering the name and the value of each input, then create a break so that the next
//element will start below it.

//Validation
const form = document.getElementsByClassName("form")[0];
const passInput = document.getElementById("password");
const confirmPassInput = document.getElementById("confirm-password");
const submit = document.getElementsByClassName("submit-btn")[0];
const errorText = document.getElementsByClassName("error-text")[0];
const errorDiv = document.getElementsByClassName("error-message")[0];

const passList = [
  "Q5H1vz6vwaWQwLKY9R5yRuzBr",
  "ftsDjyczJvD7PrYuflIoQb9yw",
  "kmlOFCTxckcR8izSaw57lRScU",
  "q9F99uQN0xYHt4PNSHtAZuVsa",
  "zhSBRBqI9AYRpw4ZAsk99NVyA",
];

const passwordGenerator = passList[Math.floor(Math.random() * 6)];
console.log(passwordGenerator);

//get input elements
const nameInput = document.getElementById("full-name");
const addressInput = document.getElementById("street-address");
const emailInput = document.getElementById("email-address");
const telInput = document.getElementById("phone-number");
const passwordInput = document.getElementById("password");
const cpassInput = document.getElementById("confirm-password");
const termsInput = document.getElementById("terms-of-service");

//clear button with javascript
const resetBtn = document.getElementsByClassName("clear-btn")[0];
resetBtn.addEventListener("click", () => {
  event.preventDefault();
  nameInput.value = "";
  addressInput.value = "";
  emailInput.value = "";
  telInput.value = "";
  passwordInput.value = "";
  cpassInput.value = "";
  termsInput.checked = false;
});

form.addEventListener("submit", (event) => {
  let messages = [];
  if (passInput.value !== confirmPassInput.value) {
    messages.push('The "password" and the "confirm password" do not match');
    confirmPassInput.classList.add("needs-correction");
  } else {
    confirmPassInput.classList.remove("needs-correction");
  }

  if (passInput.value.length < 10) {
    messages.push(
      `Your password is too short! how about "${passwordGenerator}"?`
    );
    passInput.classList.add("needs-correction");
  } else {
    passInput.classList.remove("needs-correction");
  }

  if (messages.length > 1) {
    errorDiv.classList.add("show");
    event.preventDefault();
    errorText.innerHTML = messages.join(", ");
  }
  if (messages.length > 0) {
    errorDiv.classList.add("show");
    event.preventDefault();
    errorText.innerHTML = messages.toString();
  }
  if (
    passInput.value === confirmPassInput.value &&
    passInput.value.length >= 10
  ) {
    errorDiv.classList.remove("show");
    event.preventDefault();
    alert("Success!");
  }
});
