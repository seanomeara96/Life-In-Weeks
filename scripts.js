/*
  how many weeks youve been alive
  90 years = 4692.86 // 4693
*/
console.clear();
class Calc {
  constructor(day = 13, month = 7, year = 1996) {
    this.monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //
    this.container = document.querySelector("#container");
    this.form = document.querySelector(".form");
    this.formInput = document.querySelector(".prompt__input");
    this.currentYear = new Date().getFullYear();
    this.currentMonth = new Date().getMonth();
    this.currentDate = new Date().getDate();

    this.promptUser();
    this.events();
  }
  events() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log(this.formInput.value);
      let [year, month, day] = this.formInput.value.split("-").map((x) => {
        return parseInt(x);
      });
      this.birthYear = year;
      this.birthMonth = month - 1;
      this.birthDay = day;
      this.ageInYears = this.currentYear - this.birthYear;
      let totalDays = this.sumOfDays(
        this.calcDaysBetween(),
        this.calcDaysToEOY(),
        this.calcDaysFromBOY()
      );
      this.promptUser();
      this.fillBlocks(this.daysToWeeks(totalDays));
    });
  }
  promptUser() {
    this.form.classList.toggle("form--is-visible");
  }

  calcDaysBetween() {
    let daysBetween = 0;
    for (var x = this.birthYear + 1; x <= this.currentYear - 1; x++) {
      daysBetween += this.monthDays.reduce((a, b) => a + b);
      if (x % 4 == 0) {
        daysBetween += 1;
      }
    }
    return daysBetween;
  }
  calcDaysToEOY() {
    let toEnd = this.monthDays[6] - this.birthDay;
    for (var x = this.birthMonth + 1; x < this.monthDays.length; x++) {
      toEnd += this.monthDays[x];
    }
    return toEnd;
  }
  calcDaysFromBOY() {
    let fromBegin = 0;
    for (var x = 0; x < this.currentMonth; x++) {
      fromBegin += this.monthDays[x];
    }
    fromBegin += this.currentDate;
    if (this.currentYear % 4 == 0) {
      fromBegin += 1;
    }
    return fromBegin;
  }
  sumOfDays(a, b, c) {
    var result = a + b + c;
    return result;
  }
  daysToWeeks(days) {
    let weeks = Math.floor(days / 7);
    return weeks;
  }
  fillBlocks(weeks) {
    for (var x = 0; x < 4680; x++) {
      if (x < weeks) {
        this.container.insertAdjacentHTML(
          "beforeend",
          `<div 
          style="background-color:red; 
          border:.3px solid #fff;"></div>`
        );
      } else {
        this.container.insertAdjacentHTML(
          "beforeend",
          `<div
          style="background-color:lightblue;
          border:.3px solid #fff;
          "
          ></div>`
        );
      }
    }
  }
}

window.addEventListener("load", () => {
  return new Calc();
});
