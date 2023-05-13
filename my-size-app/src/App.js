import React, { useState } from "react";
import GreetingMessage from "./GreetingMessage";
import MeasurementInputs from "./MeasurementInputs";
import DressLength from "./DressLength";
import Coverall from "./Coverall";
// import "./App.css"; // Import the custom CSS file for CDLP's branding

const App = () => {
  // State to hold measurements, dress length, and sleeve length
  const [measurements, setMeasurements] = useState({
    bust: "",
    waist: "",
    hip: "",
  });
  const [dressLength, setDressLength] = useState("");

  // Handle change event for measurement inputs
  const handleMeasurementChange = (e) => {
    const { name, value } = e.target;
    setMeasurements((prevMeasurements) => ({
      ...prevMeasurements,
      [name]: value,
    }));
  };

  // Handle change event for dress length
  const handleDressLengthChange = (e) => {
    setDressLength(e.target.value);
  };

  return (
    <div className="container">
      {" "}
      {/* Apply container class for center alignment */}
      <GreetingMessage />
      <MeasurementInputs
        measurements={measurements}
        onChange={handleMeasurementChange}
      />
      <DressLength
        dressLength={dressLength}
        onChange={handleDressLengthChange}
      />
      <Coverall /> {/* Render the Coverall component */}
    </div>
  );
};

export default App;
