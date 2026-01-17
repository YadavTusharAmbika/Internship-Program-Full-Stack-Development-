function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        alert("Please fill all fields");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
