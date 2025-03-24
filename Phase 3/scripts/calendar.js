// Made calendar.js from this YouTube tutorial: https://www.youtube.com/watch?v=OcncrLyddAs

const monthYear = document.getElementById('monthYearC');
const dates = document.getElementById('datesC');
const leftArrow = document.getElementById('leftArrowC');
const rightArrow = document.getElementById('rightArrowC');

let currentDate = new Date();
let selectedDate = null;

const updateCalendar = () => {
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const firstDay = new Date(currentYear, currentMonth, 0);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const totalDays = lastDay.getDate();
    const firstDayIndex = firstDay.getDay();
    const lastDayIndex = lastDay.getDay();
    const monthYearString = currentDate.toLocaleDateString('default', { month: 'long', year: 'numeric' });
    monthYear.textContent = monthYearString;

    let datesHTML = '';

    for (let i = firstDayIndex; i > 0; i--) {
        const prevDate = new Date(currentYear, currentMonth, 0 - i + 1);
        datesHTML += `<div class="date inactive">${prevDate.getDate()}</div>`;
    }

    for (let i = 1; i <= totalDays; i++) {
        const date = new Date(currentYear, currentMonth, i);
        const activeClass = date.toDateString() === new Date().toDateString() ? 'active' : '';
        const selectedClass = selectedDate && selectedDate.toDateString() === date.toDateString() ? 'selected' : '';
        datesHTML += `<div class="date ${activeClass} ${selectedClass}" data-date="${date}">${i}</div>`;
    }

    const nextDays = (firstDayIndex + totalDays) % 7 === 0 ? 0 : 7 - (firstDayIndex + totalDays) % 7;
    for (let i = 1; i <= 7 - lastDayIndex; i++) {
        const nextDate = new Date(currentYear, currentMonth + 1, i);
        datesHTML += `<div class="date inactive">${nextDate.getDate()}</div>`;
    }

    dates.innerHTML = datesHTML;

    const dateElements = document.querySelectorAll('.date');
    dateElements.forEach((dateElement) => {
        dateElement.addEventListener('click', (e) => {
            const clickedDate = new Date(e.target.getAttribute('data-date'));

            selectedDate = clickedDate;
            updateCalendar();
        });
    });
}

leftArrow.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
});

rightArrow.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
});

window.addEventListener('wheel', (event) => {
    event.preventDefault();

    if (event.deltaY > 0) {
        currentDate.setMonth(currentDate.getMonth() + 1);
    } else {
        currentDate.setMonth(currentDate.getMonth() - 1);
    }

    updateCalendar();
});

updateCalendar();