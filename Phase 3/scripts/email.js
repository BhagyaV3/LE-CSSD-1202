document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('form').addEventListener('submit', sendEmail);
});

function sendEmail(event) {
    event.preventDefault();

    let info = {
        first_name: document.getElementById('fName').value,
        last_name: document.getElementById('lName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };
    fNameRegEx = /[A-Z][a-z]+/;
    lNameRegEx = /[A-Z][a-z]+/;
    emailRegEx = /[a-z]+\.?\@[a-z]+\.[a-z]+/;
    phoneRegEx = /[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9]/

    if (!(fNameRegEx.test(info[first_name]))) {
        alert("Invalid first name format.");
        return;
    }

    if (!(emailRegEx.test(info[email]))) {
        alert("Invalid email format. Please type your email like this: username@domain.tld");
        return;
    }
    else if (!(phoneRegEx.test(info[phone]))) {
        alert("Invalid phone number format. Please type your phone number, following the NANP format, like this: NPA-NXX-XXX");
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