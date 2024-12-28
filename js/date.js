// Date

const dateDiv = document.getElementById('date');

const currentDate = new Date();

dateDiv.innerText = `${currentDate.toLocaleDateString()}`;
