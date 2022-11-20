'use strict';

// let time = document.getElementById('time').textContent;
// console.log(time);

// const timeUpdate = function () {
//   const updateSec = function () {

//   setTimeout(updateSec, 1000);
// };

// timeUpdate();
// document.getElementById('time').textContent = `00:00:${sec + i}`;
function timeDisplay() {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let realTime = new Date();
  let [day, month, year, hour, mins, secs] = [
    realTime.getDate(),
    monthNames[realTime.getMonth()],
    realTime.getFullYear(),
    realTime.getHours(),
    realTime.getMinutes(),
    realTime.getSeconds(),
  ];
  //   let day = realTime.getDate();
  //   let month = monthNames[realTime.getMonth()];
  //   let year = realTime.getFullYear();
  //   let hour = realTime.getHours();
  //   let mins = realTime.getMinutes();
  //   let secs = realTime.getSeconds();

  //   console.log(typeof secs);
  document.getElementById('time').innerHTML = `${hour}:${String(mins).padStart(
    2,
    '0'
  )}:<span>${String(secs).padStart(2, '0')}</span>`;
  document.getElementById('date').innerHTML = `${day} ${month} ${year}`;
}
setInterval(timeDisplay, 1000);
