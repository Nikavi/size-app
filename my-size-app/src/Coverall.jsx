import React from "react";
import coverallImage from "./images/coverall.jpeg"; // Update the file path to your actual image location

const Coverall = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ flex: "1", marginRight: "16px" }}>
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
        <p
          style={{
            color: "#777777",
            fontFamily: "Helvetica",
            fontSize: "14px",
          }}
        >
          JWAN is XXX cm/X'X'' and wears a size XX
        </p>
        <h3
          style={{
            color: "#FF0000",
            fontFamily: "Helvetica",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          SIZE CONVERSION:
        </h3>
        <table
          style={{
            backgroundColor: "#F0F0F0",
            border: "1px solid #CCCCCC",
            borderRadius: "4px",
            padding: "16px",
            marginTop: "16px",
          }}
        >
          <thead>
            <tr>
              <th>SIZE</th>
              <th>XS</th>
              <th>S</th>
              <th>M</th>
              <th>L</th>
              <th>XL</th>
              <th>XXL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>EU</td>
              <td></td>
              <td>44-46</td>
              <td>48-50</td>
              <td>52-54</td>
              <td>56-58</td>
              <td></td>
            </tr>
            <tr>
              <td>UK/US</td>
              <td></td>
              <td>34-36</td>
              <td>38-40</td>
              <td>42-44</td>
              <td>46-48</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <h3
          style={{
            color: "#FF0000",
            fontFamily: "Helvetica",
            fontSize: "18px",
            fontWeight: "bold",
            marginTop: "16px",
          }}
        >
          HOW TO MEASURE BODY:
        </h3>
        <p
          style={{
            color: "#777777",
            fontFamily: "Helvetica",
            fontSize: "14px",
          }}
        >
          Measure around the fullest part of your chest
          <br />
          Measure around your hip bone
          <br />
          Measure around your seat
        </p>
        <h3
          style={{
            color: "#FF0000",
            fontFamily: "Helvetica",
            fontSize: "18px",
            fontWeight: "bold",
            marginTop: "16px",
          }}
        >
          BODY MEASUREMENTS (in cm and inches):
        </h3>
        <table
          style={{
            backgroundColor: "#F0F0F0",
            border: "1px solid #CCCCCC",
            borderRadius: "4px",
            padding: "16px",
            marginTop: "16px",
          }}
        >
          <thead>
            <tr>
              <th>Measurement</th>
              <th>Value (cm)</th>
              <th>Value (inches)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Height</td>
              <td>
                <input
                  type="number"
                  name="heightCm"
                  id="heightCm"
                  placeholder="cm"
                />
              </td>
              <td>
                <input
                  type="number"
                  name="heightInches"
                  id="heightInches"
                  placeholder="inches"
                />
              </td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>
                <input
                  type="number"
                  name="weightCm"
                  id="weightCm"
                  placeholder="kg"
                />
              </td>
              <td>
                <input
                  type="number"
                  name="weightPounds"
                  id="weightPounds"
                  placeholder="pounds"
                />
              </td>
            </tr>
            <tr>
              <td>Bust</td>
              <td>
                <input
                  type="number"
                  name="bustCm"
                  id="bustCm"
                  placeholder="cm"
                />
              </td>
              <td>
                <input
                  type="number"
                  name="bustInches"
                  id="bustInches"
                  placeholder="inches"
                />
              </td>
            </tr>
            <tr>
              <td>Waist</td>
              <td>
                <input
                  type="number"
                  name="waistCm"
                  id="waistCm"
                  placeholder="cm"
                />
              </td>
              <td>
                <input
                  type="number"
                  name="waistInches"
                  id="waistInches"
                  placeholder="inches"
                />
              </td>
            </tr>
            <tr>
              <td>Hip</td>
              <td>
                <input type="number" name="hipCm" id="hipCm" placeholder="cm" />
              </td>
              <td>
                <input
                  type="number"
                  name="hipInches"
                  id="hipInches"
                  placeholder="inches"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <img
          src={coverallImage}
          alt="JWAN Coverall"
          style={{ maxWidth: "100%", marginTop: "16px" }}
        />{" "}
      </div>
    </div>
  );
};
    
 

export default Coverall;
