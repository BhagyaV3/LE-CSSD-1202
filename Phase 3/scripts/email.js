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

    console.log(info)

    emailjs
        .send("service_oevleia", "template_40x41qh", info)
        .then(
            function () {
                location.reload();
                alert("Email Sent!!!");
            },
            function (error) {
                console.error("Error details:", error);
                alert("Failed to send email. See console for details.");
            }
        );
}