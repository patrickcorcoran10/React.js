import React from "react";
// Create a new component named "Math"
// Render one Math component in the place of each "?" mark
// Math should accept 3 props
// num1, operator, and num2
// Math should return a span tag displaying the result e.g.  19 + 341 = 360
const Calculator = (num1, operator, num2) => (
  <div>
    <p>
      19 + 341 = <math num1={19} opersator="+" num2={341}></math>
    </p>
    <p>
      <math>42 - 17 = ?</math>
    </p>
    <p>
      <math>100 * 3 = ?</math>
    </p>
    <p>
      96 / 4 = ?
    </p>
  </div>
);

export default Calculator;
