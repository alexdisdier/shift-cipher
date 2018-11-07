# Synopsis

This is a simple Shift Cipher rot13 web application that encodes or decodes a string as input and returns a coded or decoded string.

Learn about [ROT13 cipher](https://en.wikipedia.org/wiki/ROT13)

## Code Explanation
I created a function named rot13 that takes one argument str.
```javascript
function rot13(str){}
```
Within that function, I created an array using *String.prototype.split()* and *String.prototype.toUpperCase()* which includes all the characters of the alphabet.
```javascript
var alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
```
I initialized an empty string variable "rot13", and a count variable .
```javascript
var rot13 = '';
var count = 0;
```
I then run a for loop to check if the str characters are included within the alphabet array using *Array.prototype.includes()*.
If it exists, I store the indexOf of that character from the alphabet array and I add 13 using *Array.prototype.indexOf()*.
I check if the count is superior to 26.
```javascript
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
```
Finally we return the result to the web app
```javascript
return document.getElementById("result").innerHTML = rot13;
```

**Relevant Links**
1. [String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
2. [String.prototype.toUpperCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
3. [Array.prototype.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
4. [Array.prototype.indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

## Usage example

See a live version - https://alexdisdier.github.io/shift-Cipher/

## Directory Structure

```bash

├── build
│   ├── images
│   ├── scripts
│   │   ├── main.js
│   │   ├── main.min.js
│   ├── styles
│   │   ├── bootstrap.css
│   │   ├── bootstrap.min.css
│   │   ├── grid.css
│   │   ├── grid.min.css
│   │   ├── main.css
│   │   ├── main.min.css
│   │   ├── normalize.css
│   │   ├── normalize.min.css
│   ├── .gitattributes   ##Forces the web app language to js
└── ├── index.html
    └──  README.md
```

## Built With

* html
* css
* JavaScript

## Authors

**Alex Disdier** - *Initial work* - [alexdisdier](https://github.com/alexdisdier)

## Acknowledgments

This is part of **JavaScript Algorithms and Data Structures Projects** in order to get the certification from [FreeCodeCamp](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher)
