const monthEl = document.getElementById("month-name");
const dayEl = document.getElementById("day-name");
const dateEl = document.getElementById("date");
const yearEl = document.getElementById("year");

const date = new Date();

const month = date.getMonth();
console.log(date.getDate());
monthEl.innerText = date.toLocaleString("en", {
    month: "long"
});

dayEl.innerText = date.toLocaleString("en", {
    weekday: "long"
});

dateEl.innerText = date.getDate();

yearEl.innerText = date.getFullYear();
console.log(date.getFullYear());
