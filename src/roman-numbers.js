function convertToRoman(num) {
  var romanNum = {
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    III: 3,
    II: 2,
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
