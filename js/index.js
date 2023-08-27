const celciusEl = document.getElementById("Celcius");
const fahrenheitEl = document.getElementById("Fahrenheit");
const kelvinEl = document.getElementById("Kelvin");

function handleValue(event) {
    const currentValue = event.target.value;
    if(event.target.name == "Celcius")
    {
        fahrenheitEl.value = (currentValue * 9 / 5) + 32;
        kelvinEl.value = parseFloat(currentValue) + 273.15;
    }
    else if (event.target.name == "Fahrenheit")
    {
        celciusEl.value = (currentValue - 32) * 5 / 9;
        kelvinEl.value = (currentValue - 32) * 5 / 9 + 273.15;
    }
    else if(event.target.name == "Kelvin")
    {
        celciusEl.value = currentValue - 273.15;
        fahrenheitEl.value = (currentValue - 273.15) * 9 / 5 + 32;
    }
}