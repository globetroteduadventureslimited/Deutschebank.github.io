const demoUsername = "Jacob_Joe";
const demoPassword = "Jacob7233";

function login() {

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (
    username === demoUsername &&
    password === demoPassword
  ) {

    document.getElementById("loginScreen").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");

  } else {

    alert("Demo login failed. Use demo_user / Demo1234!");

  }
}

function updateTransferForm() {

  const type = document.getElementById("transferType").value;

  document
    .getElementById("germanyFields")
    .classList.add("hidden");

  document
    .getElementById("usaFields")
    .classList.add("hidden");

  document
    .getElementById("internationalFields")
    .classList.add("hidden");

  if (type === "germany") {

    document
      .getElementById("germanyFields")
      .classList.remove("hidden");

  }

  if (type === "usa") {

    document
      .getElementById("usaFields")
      .classList.remove("hidden");

  }

  if (type === "international") {

    document
      .getElementById("internationalFields")
      .classList.remove("hidden");

  }
}

function attemptTransfer() {

  const amount =
    Number(document.getElementById("amount").value);

  const type =
    document.getElementById("transferType").value;

  if (!amount || amount <= 0) {

    alert("Enter a demonstration transfer amount.");
    return;

  }

  let fee;

  if (type === "international") {

    fee = amount * 0.025;

  } else {

    fee = amount * 0.1;

  }

  document.getElementById("feeAmount").textContent =
    "€" + fee.toFixed(2);

  document.getElementById("modal").classList.remove("hidden");
}

function simulatePayment() {

  alert(
    "SIMULATION COMPLETE\n\n" +
    "No money was transferred.\n" +
    "No Bitcoin transaction occurred.\n" +
    "No bank account was activated."
  );

  closeModal();
}

function closeModal() {

  document
    .getElementById("modal")
    .classList.add("hidden");

}
