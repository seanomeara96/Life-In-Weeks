console.clear();

/* to work out...
  how many weeks youve been alive
  90 years = 4692.86 // 4693
*/


let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
class Calc {
  constructor() {
    this.container = document.querySelector("#container")
    this.birthYear = 1996;
    this.birthMonth = 6; // 7th base 0
    this.birthDay = 13;
    this.ageInYears = new Date().getFullYear() - this.birthYear;
    let totalDays = this.sumOfDays(this.calcDaysBetween(), this.calcDaysToEOY(), this.calcDaysFromBOY())
    this.fillBlocks(this.daysToWeeks(totalDays))
  }
  
  calcDaysBetween() {
    let dur = 2019 - 1996;
    console.log(dur);
    let daysBetween = 0;
    let count = 0;
    for (var x = 1997; x <= 2019; x++) {
      daysBetween += monthDays.reduce((a, b) => a + b);
      if (x % 4 == 0) {
        daysBetween += 1;
      }
    }
    console.log(daysBetween)
    return daysBetween;
  }
  calcDaysToEOY() {
    let toEnd = monthDays[6] - this.birthDay;
    for (var x = this.birthMonth + 1; x < monthDays.length; x++) {
      toEnd += monthDays[x];
    }
    return toEnd;
  }
  calcDaysFromBOY() {
    let fromBegin = 0;
    let currentMonth = new Date().getMonth();
    let currentDate = new Date().getDate();
    let currentYear = new Date().getFullYear();
    for (var x = 0; x < currentMonth; x++) {
      fromBegin += monthDays[x];
    }
    fromBegin += currentDate;
    if (currentYear % 4 == 0) {
      fromBegin += 1;
    }
    return fromBegin;
  }
  sumOfDays(a, b, c) {
    var result =  a + b + c
    console.log(result)
    return result
  }
  daysToWeeks(days) {
    let weeks = Math.floor(days / 7)
    console.log("weeks", weeks)
    return weeks
  }
  fillBlocks(weeks) {
    for(var x = 0; x<weeks; x++) {
      this
        .container
        .insertAdjacentHTML(
        "beforeend",
        `<div 
          style="background-color:red; 
          border:.3px solid #fff;"></div>`
         )
    }
    for(var y = weeks; y < 4680; y++) {
      this
      .container
      .insertAdjacentHTML(
      "beforeend",
        `<div
          style="background-color:lightblue;
          border:.3px solid #fff;
          "
          ></div>`
      )
    }
  }
}
new Calc();
/*
  +1997-2019 //full years 365*22 + leap years
  then count years between current year *365
  add necessary amount of leap days
  then count the number of days until new Date()
  now you have total no. of days
  divide by 7 and math.floor() to round down the weeks
*/
