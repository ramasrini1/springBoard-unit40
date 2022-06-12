const addCommas = require("./addCommas");
const input = [1234, 1000000, 9876543210, 6, -10, -5678, 12345.678, -3141592.65];
const output = ["1,234", "1,000,000", "9,876,543,210", "6", "-10", "-5,678", "12,345.678", "-3,141,592.65"]

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
});

describe("#addCommas", () => {
  test("Check for array of inputs", () => {
    input.map((val, index) => {
      expect(addCommas(val)).toBe(output[index]);
      console.log(val);
    })
  });   
});
    

    

 