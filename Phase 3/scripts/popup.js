let facts = [
    "In 2024, Earth experienced its hottest year on record, with global temperatures 1.62°C above pre-industrial levels, surpassing the critical 1.5°C warming threshold aimed for in the 2015 Paris Agreement.",
    "Sea levels have risen by nearly 10 centimeters in the last 25 years, with the global mean sea level increasing about 21–24 centimeters since 1880.",
    "Rainforests are being cut down at a rate of 100 acres per minute. If this trend continues, the world’s rainforests could be gone by 2100.",
    "Approximately 8 million tonnes of plastic are dumped into the ocean each year, equivalent to the weight of 632,411 London buses.",
    "Plastic bags and other plastic garbage thrown into the ocean kill as many as 1,000,000 sea creatures every year.",
    "Less than 1% of the Earth's water is drinkable and accessible, highlighting the importance of conserving freshwater resources.",
    "Every five seconds, the equivalent of one football pitch of soil is eroded. It takes 1,000 years to generate 3 centimeters of topsoil.",
    "Forests cover about 31% of the Earth's land area, playing a crucial role in carbon sequestration and biodiversity.",
    "Over a quarter of the world's known species are threatened with extinction, with global wild animal populations having decreased by 73% since 1970.",
    "The world's oceans absorb about 30% of carbon dioxide emissions, leading to increased ocean acidity, which affects marine life, particularly organisms like corals and shellfish. "
]

function showPopup() {
    popup = document.querySelector(".popupC");
    document.querySelectorAll(".popupC p")[1].textContent = facts[Math.floor(Math.random() * 10)];
    // timerId = setTimeout(displayOff, 180000);
    timerId = setTimeout(displayOff, 3000);
}

function displayOff() {
    popup.style.display = "none";
}

window.addEventListener("DOMContentLoaded", showPopup);