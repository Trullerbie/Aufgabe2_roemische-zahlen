function convertToRoman(num) {
  var romanNum = {
    M:1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  var roman = "";

  //vergleicht, ob Eingabe >= 1 ist, anschließend ob die Eingabe einer Zahl aus romanNum entspricht. Durchrechnen der Zahl mit anschließender Ausgabe
  for (var key in romanNum) {
    if (num >= 1) {
      while (num >= romanNum[key]) {
        roman += key;
        num -= romanNum[key];
        return roman;
      }
    } else {
      return "ungültige Zahl";
    }
  }
}

module.exports = { convertToRoman };
