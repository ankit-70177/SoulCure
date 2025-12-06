function Enquiry() {
    let name = document.getElementById("fullname").value;
    let email = document.getElementById("eml").value;
    let message = document.getElementById("msg").value;

    if (name === "") {
        alert("Please enter your name");
        return false;
    }

    if (email === "") {
        alert("Please enter your email");
        return false;
    }

    if (message === "") {
        alert("Please write your message");
        return false;
    }

    alert("Your details has been submitted! We will contact you soon.");
    return true;
}
