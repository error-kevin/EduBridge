import React from 'react';

const Quiz = () => {
  return (
    <div className="market-container">
      <h2>Market Prices</h2>
      <p>Get the latest crop prices and market trends.</p>
      {/* Sample data */}
      <table>
        <thead>
          <tr>
            <th>Crop</th>
            <th>Current Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Wheat</td>
            <td>$250/ton</td>
          </tr>
          <tr>
            <td>Rice</td>
            <td>$300/ton</td>
          </tr>
          {/* Add more crops as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default Quiz;
