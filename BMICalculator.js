import React, { useState } from "react";
import "./BMICalculator.css"; // Your custom styles if needed

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiMessage, setBmiMessage] = useState("");

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);

      if (bmiValue < 18.5) {
        setBmiMessage("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        setBmiMessage("Normal weight");
      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        setBmiMessage("Overweight");
      } else {
        setBmiMessage("Obesity");
      }
    } else {
      setBmiMessage("Please enter both weight and height");
    }
  };

  return (
    <div className="bmi-calculator-container">
      <h2 className="text-center font-semibold text-2xl">BMI Calculator</h2>
      <div className="bmi-calculator-form">
        <input
          type="number"
          placeholder="Enter weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="bmi-input"
        />
        <input
          type="number"
          placeholder="Enter height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="bmi-input"
        />
        <button onClick={calculateBMI} className="bmi-button">
          Calculate BMI
        </button>
        {bmi && (
          <div className="bmi-result text-center">
            <p>Your BMI: {bmi}</p>
            <p>{bmiMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;
