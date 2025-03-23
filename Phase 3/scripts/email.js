document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('form').addEventListener('submit', sendEmail);
});

function sendEmail(event) {
    event.preventDefault();

    let info = {
        from_name: document.getElementById('fName').value + " " + document.getElementById('lName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };
    nameRegEx = /[A-Z][a-z]+\s?[A-Z][a-z]+/;
    emailRegEx = /[a-z]+\@[a-z]+\.[a-z]+/;

    if (!(nameRegEx.test(info[from_name]))) {
        alert("Invalid name format. Please type your name like this: First Last");
        return;
    }

    if (!(emailRegEx.test(info[email]))) {
        alert("Invalid email format. Please type your email like this: username@domain.tld");
        return;
    }

    console.log(info)

    emailjs
        .send("service_oevleia", "template_40x41qh", info)
        .then(
            function () {
                location.reload();
                alert("Email Sent!");
            },
            function (error) {
                console.error("Error details:", error);
                alert("Failed to send email. See console for details.");
            }
        );
}