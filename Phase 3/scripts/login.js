let loginInfo = JSON.parse(sessionStorage.getItem('loginInfo')) || [
    {
        name: "shlok",
        email: "shlok@gmail.com",
        password: "shlok123"
    },
    {
        name: "bhagya vintanagay",
        email: "bhagyaisGoober@gmail.com",
        password: "bhag111??" 
    }
];

let otp = null
let nameJ = "hi"
let email = "hi"
let password = "hi"
let loginedIn = JSON.parse(sessionStorage.getItem('loginInfo')) || 0

function makeOTP() {
    nameJ = document.getElementById('nameInput').value;
    email = document.getElementById('emailInput').value;
    password = document.getElementById('passwordInput').value;
    nameRegEx = /[A-Z][a-z]+\s?[A-Z][a-z]+/;
    emailRegEx = /[a-z]+\.?\@[a-z]+\.[a-z]+/;
    paswordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).*$/;

    if (!(nameRegEx.test(nameJ))) {
        alert("Invalid name format. Please type your name like this: First Last");
        return;
    } else if (!(emailRegEx.test(email))) {
        alert("Invalid email format. Please type your email like this: username@domain.tld");
        return;
    } else if (!(paswordRegEx.test(password) || password.length >= 8)) {
        alert("Invalid password format. Your password should consist of at least 1 uppercase character, 1 lowercase character, 1 number and 1 special character (minimum 8 characters in total).");
        return;
    }

    for (let user of loginInfo) {
        if (user.email === email) {
            alert("This email is already registered.");
            return;
        }
    }

    otp = Math.floor(100000 + Math.random() * 900000);

    emailjs.send("service_oevleia", "template_4q41tfk", {
        to_name: nameJ,
        to_email: email,
        otp_code: otp
    }, "u-aeJLaI13e6aMy66")
    .then((response) => {
        alert("An OTP has been sent to your email.");
    })
    .catch((error) => {
        console.error("Error sending email", error);
        alert("Failed to send OTP. Please try again.");
    });

    sessionStorage.setItem('loginInfo', JSON.stringify(loginInfo));

    document.getElementById("pJ").style.visibility = "hidden";
    document.getElementById("nJ").style.visibility = "hidden";
    document.getElementById("showJ").style.visibility = "hidden";
    document.getElementById("emailImgJ").style.visibility = "hidden";
    document.getElementById("signupJ").style.height = "35vh";
    document.getElementById("emailInput").placeholder = "Enter Your OTP Code From Email";
    document.getElementById("emailInput").style.position = "relative";
    document.getElementById("emailInput").style.top = "-5vh";
    document.getElementById("emailInput").value = "";
    document.getElementById("submitJ").innerText = "Verify";
    document.getElementById("submitJ").style.position = "relative";
    document.getElementById("submitJ").style.top = "-21vh";
    document.getElementById("loginJ").style.top = "-23vh";
    document.getElementById("submitJ").onclick = addInfo;
}


function addInfo() {
    let userOtp = document.getElementById("emailInput").value;

    if (otp == userOtp) {
        loginInfo.push({nameJ, email, password});
        loginInfo.forEach((user, index) => {console.log(`User ${index + 1}:`, user);});
        sessionStorage.setItem('loginInfo', JSON.stringify(loginInfo));
        location.replace("./login.html");
        alert("Sign up successful.");
        return;
    } else if (otp != userOtp) {
        alert("OTP dose not match what was sent.");
        return;
    }

    alert("Input box is empty.");
}

function getInfo() {
    let email = document.getElementById('emailInput').value;
    let password = document.getElementById('passwordInput').value;

    loginInfo = JSON.parse(sessionStorage.getItem('loginInfo')) || [];

    for (let login of loginInfo) {
        if (email == login.email && password == login.password) {
            document.getElementById("navLogJ").style.visibility = "hidden";
            sessionStorage.setItem("navLogJVisibility", "hidden");
            loginedIn = 1;
            sessionStorage.setItem('loginedIn', JSON.stringify(loginedIn));
            location.replace("./tracker.html");
            document.getElementById("")
            alert("Login successful.");
            return;
        }
    }
    alert("Incorrect email or password! Please try again.");
}

function lockCheck(event) {
    if (loginedIn == 0) {
        event.preventDefault();
        alert("You must login before using the Foottracker.");
    } else {
        return;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const savedVisibility = sessionStorage.getItem("navLogJVisibility");
    if (savedVisibility) {
      document.getElementById("navLogJ").style.visibility = savedVisibility;
    }
  });

document.addEventListener('keydown', function(event) {
    const inputs = document.querySelectorAll('input');

    const currentIndex = Array.from(inputs).indexOf(document.activeElement);

    if (currentIndex === -1) return;

    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        if (currentIndex < inputs.length - 1) {
            inputs[currentIndex + 1].focus();
        }
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        if (currentIndex > 0) {
            inputs[currentIndex - 1].focus();
        }
    }
});