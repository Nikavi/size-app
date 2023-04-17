import React from 'react';

const DressLength = ({ dressLength, onChange }) => {
  return (
    <div>
      <h2>Choose Dress Length</h2>
      <label htmlFor="short">Short:</label>
      <input
        type="radio"
        id="short"
        name="dressLength"
        value="short"
        checked={dressLength === "short"}
        onChange={onChange}
      />
      <label htmlFor="kneeLength">Knee-length:</label>
      <input
        type="radio"
        id="kneeLength"
        name="dressLength"
        value="kneeLength"
        checked={dressLength === "kneeLength"}
        onChange={onChange}
      />
      <label htmlFor="long">Long:</label>
      <input
        type="radio"
        id="long"
        name="dressLength"
        value="long"
        checked={dressLength === "long"}
        onChange={onChange}
      />
    </div>
  );
};

export default DressLength;