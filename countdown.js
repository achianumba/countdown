'use strict';

class Countdown {
  constructor(el) {
    this.newYear = new Date(`Jan 1, ${new Date().getFullYear() + 1} 00:00:00`);
    el.textContent = this.newYear.getFullYear();
  }

count() {
    let curr = this.newYear.getTime() - Date.now();
    //Where d, h, m, and s are references to the corresponding html element ID's 
    let days = Math.floor(curr / 864e5);
    days < 10 ? days = "0" + days : null;
    d.textContent = days;

    let hours = Math.floor((curr % 864e5) / 36e5);
    hours < 10 ? hours = "0" + hours : null;
    h.textContent = hours;

    let mins = Math.floor((curr % 36e5) / 6e4);
    mins < 10 ? mins = "0" + mins: null;
    m.textContent = mins;

    let secs = Math.floor((curr % 6e4) / 1000);
    secs < 10 ? secs = "0" + secs : null;
    s.textContent = secs;
  }
}
//Timer
const countdown = new Countdown(year);

const timer = setInterval(() => {
  countdown.count();
});