import React from "react";

const MeasurementInputs = ({ measurements, onChange }) => {
  return (
    <div>
      <h2>Enter Your Measurements</h2>
      <label htmlFor="bust">Bust:</label>
      <input
        type="number"
        id="bust"
        name="bust"
        value={measurements.bust}
        onChange={onChange}
      />
      <label htmlFor="waist">Waist:</label>
      <input
        type="number"
        id="waist"
        name="waist"
        value={measurements.waist}
        onChange={onChange}
      />
      <label htmlFor="hip">Hip:</label>
      <input
        type="number"
        id="hip"
        name="hip"
        value={measurements.hip}
        onChange={onChange}
      />
    </div>
  );
};

export default MeasurementInputs;
