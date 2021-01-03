'use strict';
window.addEventListener('DOMContentLoaded', () => {
    const date = new Date();
    date.setDate(1); // first day of current month

    const months = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
    ];
    const monthsRod = [
        'Января',
        'Февраля',
        'Марта',
        'Апреля',
        'Мая',
        'Июня',
        'Июля',
        'Августа',
        'Сентября',
        'Октября',
        'Ноября',
        'Декабря'
    ];

    const daysOfWeek = [
        'Воскресение',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ];

    function render(date) {
        const lastDayCurrentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); //last day of the current month
        const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate(); //last day of the prev month
        const firstDayIndex = date.getDay(); //index of day of the week
        document.querySelector('.date h1').textContent = months[date.getMonth()];
        document.querySelector('.date p').textContent = daysOfWeek[new Date().getDay()] + ', ' + new Date().getDate() + ' ' + monthsRod[new Date().getMonth()] + ' ' + new Date().getFullYear();
        let days = document.querySelector('.days');
        days.innerHTML = ``;
        const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
        for (let i = firstDayIndex - 1; i >= 0; i--) {
            days.innerHTML += `<div class="prev-date">${prevLastDay-i}</div>`;
        }
        for (let i = 1; i <= lastDayCurrentMonth; i++) {
            if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
                days.innerHTML += `<div class="today">${i}</div>`;
            } else {
                days.innerHTML += `<div>${i}</div>`;
            }
        }
        let c = 0;
        for (let i = lastDayIndex; i < 6; i++) {
            days.innerHTML += `<div class="next-date">${++c}</div>`;
        }
    }

    render(date);



    document.querySelector(".prev").addEventListener('click', () => {
        date.setMonth(date.getMonth() - 1);
        render(date);
    });
    document.querySelector(".next").addEventListener('click', () => {
        date.setMonth(date.getMonth() + 1);
        render(date);
    });
});