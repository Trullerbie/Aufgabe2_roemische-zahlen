const { convertToRoman } = require("./roman-numbers");
describe("roman_numbers", () => {
  // Aufgabe a
  it("should work", () => {
    console.log("Hallo Ansbach");
  });

  // Aufgabe b
  it("should return I", () => {
    console.log(convertToRoman(1));
  });

  //Aufgabe c
  it("should return II for 2", () => {
    console.log(convertToRoman(2));
  });

  it("should return III for 3", () => {
    console.log(convertToRoman(3));
  });

  //Aufgabe d
  it("should return V for 5", () => {
    console.log(convertToRoman(5));
  });

  it("should return X for 10", () => {
    console.log(convertToRoman(10));
  });
});
