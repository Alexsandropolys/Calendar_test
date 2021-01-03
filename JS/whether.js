'use strict';
window.addEventListener('DOMContentLoaded',()=>{
    const inputCity = document.querySelector(".city"),
        inputResp = document.querySelector(".resp"),
        button = document.querySelector('.forecast__button'),
        key = '8448b4a4821d11f7a767e629f9bb7fb6',
        city = 'London',
        api = `api.openweathermap.org/data/2.5/weather?q=${city},uk&APPID=${key}`;

    button.addEventListener('click', (e)=>{
        e.preventDefault();
        fetch(api).then(response =>{
            let data = response.json();
            console.log(data);
            return data;
        });
        
    });
});