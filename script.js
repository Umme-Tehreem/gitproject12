function validateForm() {
    let name = document.getElementById("name").value;
    let course = document.getElementById("course").value;

    if (name == "" || course == "") {
        alert("Please fill all fields");
        return false;
    }

    alert("Student Added Successfully!");
    return false;
}