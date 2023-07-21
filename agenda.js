document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const contactTable = document
    .getElementById("contactTable")
    .getElementsByTagName("tbody")[0];

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();

    if (name === "" || phone === "") {
      alert("Please enter both name and phone number.");
      return;
    }

    addContactToTable(name, phone);

    nameInput.value = "";
    phoneInput.value = "";
  });

  function addContactToTable(name, phone) {
    const newRow = contactTable.insertRow();
    const nameCell = newRow.insertCell(0);
    const phoneCell = newRow.insertCell(1);

    nameCell.textContent = name;
    phoneCell.textContent = phone;
  }
});
