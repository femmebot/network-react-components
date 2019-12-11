"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatAsExpirationDate = exports.dateParseISO = exports.formatDate = exports.formatAsNumber = exports.formatAsDollarAmount = void 0;

var _dateFns = require("date-fns");

var formatAsDollarAmount = function formatAsDollarAmount(value) {
  return "$".concat(value.toFixed(2));
};

exports.formatAsDollarAmount = formatAsDollarAmount;

var formatAsNumber = function formatAsNumber(value) {
  return value.replace(/\D+/, '');
};

exports.formatAsNumber = formatAsNumber;
var formatDate = _dateFns.format;
exports.formatDate = formatDate;
var dateParseISO = _dateFns.parseISO;
exports.dateParseISO = dateParseISO;

var formatAsExpirationDate = function formatAsExpirationDate(value) {
  var sep = ' / ';
  var empty = '';

  var isValidMonth = function isValidMonth(month) {
    if (month.length === 1) {
      return !isNaN(Number(month)) && Number(month) >= 0 && Number(month) < 2;
    }

    if (month.length === 2) {
      return !isNaN(Number(month)) && Number(month) > 0 && Number(month) <= 12;
    }

    return false;
  };
  /* Month can start with 0, 1 */

  /* Month must be between 1 and 12 */


  if (isValidMonth(value.trim())) {
    return value.length === 1 ? value.trim() : value.trim() + sep;
  }
  /* Year must be valid */


  if (value.length > 5) {
    var parts = value.split(sep);
    var monthPart = parts[0];

    if (!isValidMonth(monthPart)) {
      var month = monthPart.substr(0, 2);

      if (isValidMonth(month)) {
        return month + sep;
      }

      month = monthPart.substr(0, 1);

      if (isValidMonth(month)) {
        return month;
      }

      return empty;
    }

    var yearPart = parts[1]; // Typing is stopped

    if (yearPart && yearPart.length > 2) {
      return value.substr(0, 7);
    }

    if (yearPart && !isNaN(Number(yearPart))) {
      return value;
    }
  }

  return empty;
};

exports.formatAsExpirationDate = formatAsExpirationDate;