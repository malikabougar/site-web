function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    if (!email || !password) {
        alert("Both email and password are required.");
        return false;
    }


    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    return true;
}
