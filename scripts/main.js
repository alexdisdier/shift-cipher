"use strict";

/* main.js */

/* ROT13 cipher */
function rot13(str) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  var rot13 = '';
  var count = 0;

  for (var i = 0; i < str.length; i++) {
    if (alphabet.includes(str[i])) {
      count = alphabet.indexOf(str[i]) + 13;

      if (count >= 26) {
        count = count - 26;
        rot13 += alphabet[count];
      } else {
        rot13 += alphabet[count];
      }
    } else {
      rot13 += str[i];
    }
  }

  return document.getElementById("result").innerHTML = rot13;
}

;
