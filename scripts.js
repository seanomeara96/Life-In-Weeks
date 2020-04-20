"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
  how many weeks youve been alive
  90 years = 4692.86 // 4693
*/
var Calc = /*#__PURE__*/function () {
  function Calc() {
    _classCallCheck(this, Calc);

    this.monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    this.container = document.querySelector("#container");
    this.currentYear = new Date().getFullYear();
    this.currentMonth = new Date().getMonth();
    this.currentDate = new Date().getDate();
    this.birthYear = 1996;
    this.birthMonth = 6; // 7th base 0

    this.birthDay = 13;
    this.ageInYears = this.currentYear - this.birthYear;
    var totalDays = this.sumOfDays(this.calcDaysBetween(), this.calcDaysToEOY(), this.calcDaysFromBOY());
    this.fillBlocks(this.daysToWeeks(totalDays));
  }

  _createClass(Calc, [{
    key: "calcDaysBetween",
    value: function calcDaysBetween() {
      var daysBetween = 0;

      for (var x = this.birthYear + 1; x <= this.currentYear - 1; x++) {
        daysBetween += this.monthDays.reduce(function (a, b) {
          return a + b;
        });

        if (x % 4 == 0) {
          daysBetween += 1;
        }
      }

      return daysBetween;
    }
  }, {
    key: "calcDaysToEOY",
    value: function calcDaysToEOY() {
      var toEnd = this.monthDays[6] - this.birthDay;

      for (var x = this.birthMonth + 1; x < this.monthDays.length; x++) {
        toEnd += this.monthDays[x];
      }

      return toEnd;
    }
  }, {
    key: "calcDaysFromBOY",
    value: function calcDaysFromBOY() {
      var fromBegin = 0;

      for (var x = 0; x < this.currentMonth; x++) {
        fromBegin += this.monthDays[x];
      }

      fromBegin += this.currentDate;

      if (this.currentYear % 4 == 0) {
        fromBegin += 1;
      }

      return fromBegin;
    }
  }, {
    key: "sumOfDays",
    value: function sumOfDays(a, b, c) {
      var result = a + b + c;
      return result;
    }
  }, {
    key: "daysToWeeks",
    value: function daysToWeeks(days) {
      var weeks = Math.floor(days / 7);
      return weeks;
    }
  }, {
    key: "fillBlocks",
    value: function fillBlocks(weeks) {
      for (var x = 0; x < 4680; x++) {
        if (x < weeks) {
          this.container.insertAdjacentHTML("beforeend", "<div \n          style=\"background-color:red; \n          border:.3px solid #fff;\"></div>");
        } else {
          this.container.insertAdjacentHTML("beforeend", "<div\n          style=\"background-color:lightblue;\n          border:.3px solid #fff;\n          \"\n          ></div>");
        }
      }
    }
  }]);

  return Calc;
}();

new Calc();
