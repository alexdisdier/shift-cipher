"use strict";
/* ROT13 cipher */

var isValid = function isValid(str) {
  return typeof str === 'string';
};

var charUpper = function charUpper(str) {
  var firstChar = 'A'.charCodeAt(); // 65 

  var lastChar = 'Z'.charCodeAt(); // 90

  var strTemp = str.charCodeAt();

  if (strTemp + 13 > lastChar) {
    return String.fromCharCode(firstChar + (strTemp + 12 - lastChar));
  }

  return String.fromCharCode(strTemp + 13);
};

var charLower = function charLower(str) {
  var firstChar = 'a'.charCodeAt(); // 97

  var lastChar = 'z'.charCodeAt(); // 122

  var strTemp = str.charCodeAt();

  if (strTemp + 13 > lastChar) {
    return String.fromCharCode(firstChar + (strTemp + 12 - lastChar));
  }

  return String.fromCharCode(strTemp + 13);
};

var rot13 = function rot13(str) {
  if (!isValid(str)) {
    return 'error';
  }

  var rot13 = '';

  for (var i = 0; i < str.length; i++) {
    var strTemp = str.charAt(i);

    if (strTemp === strTemp.toUpperCase() && strTemp.charCodeAt() <= 122 && strTemp.charCodeAt() >= 65) {
      rot13 += charUpper(strTemp);
    } else if (strTemp === strTemp.toLowerCase() && strTemp.charCodeAt() <= 122 && strTemp.charCodeAt() >= 65) {
      rot13 += charLower(strTemp);
    } else {
      rot13 += strTemp;
    }
  }

  return document.getElementById("result").innerHTML = rot13;
};