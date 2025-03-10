let serialNumber = 1; // Initialize serial number counter

document.getElementById("saveBtn").addEventListener("click", function (event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const course = document.getElementById("course").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const email = document.getElementById("email").value.trim();

    // Validate form inputs
    if (!name || !age || !course || !gender || !email) {
        alert("Please fill out all fields!");
        return;
    }

    // Create a new table row
    const table = document.getElementById("studentData");
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${serialNumber++}</td> <!-- Serial number column -->
        <td>${name}</td>
        <td>${age}</td>
        <td>${course}</td>
        <td>${gender}</td>
        <td>${email}</td>
    `;

    // Append the row to the table
    table.appendChild(newRow);

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";
    document.querySelectorAll('input[name="gender"]').forEach(radio => radio.checked = false);
    document.getElementById("email").value = "";

    // Ensure the table is visible
    document.querySelector(".cont1").style.display = "table";
});
