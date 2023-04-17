import React from "react";
import coverallImage from "./coverall.jpg"; 

const Coverall = () => {
  return (
    <div>
      <h2
        style={{
          color: "#FF0000",
          fontFamily: "Helvetica",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        JWAN Coverall Size Guide
      </h2>
      <table
        style={{
          backgroundColor: "#F0F0F0",
          border: "1px solid #CCCCCC",
          borderRadius: "4px",
          padding: "16px",
        }}
      >
        <thead>
          <tr>
            <th>Size</th>
            <th>Chest (in)</th>
            <th>Waist (in)</th>
            <th>Hips (in)</th>
            <th>Height (ft)</th>
            <th>Weight (lbs)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>XS</td>
            <td>34-36</td>
            <td>26-28</td>
            <td>34-36</td>
            <td>5'3" - 5'6"</td>
            <td>110-130</td>
          </tr>
          {/* Add more rows for other sizes */}
        </tbody>
      </table>
      <img
        src={coverallImage}
        alt="JWAN Coverall"
        style={{ maxWidth: "100%", marginTop: "16px" }}
      />{" "}
      {/* Render the image */}
      <p
        style={{ color: "#777777", fontFamily: "Helvetica", fontSize: "14px" }}
      >
        Please note that these measurements are approximate and may vary
        slightly. It is recommended to refer to the size chart provided by the
        manufacturer for the most accurate and up-to-date sizing information.
      </p>
    </div>
  );
};

export default Coverall;
