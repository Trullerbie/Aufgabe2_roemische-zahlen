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

  //Aufgabe e
  it("should return IV for 4", () => {
    console.log(convertToRoman(4));
  });

  it("should return IX for 9", () => {
    console.log(convertToRoman(9));
  });

  //Aufgabe f
  it("should return L for 50", () => {
    console.log(convertToRoman(50));
  });

  it("should return XL for 40", () => {
    console.log(convertToRoman(40));
  });

  it("should return C for 100", () => {
    console.log(convertToRoman(100));
  });

  it("should return D for 500", () => {
    console.log(convertToRoman(500));
  });

  it("should return M for 1000", () => {
    console.log(convertToRoman(1000));
  });
});
