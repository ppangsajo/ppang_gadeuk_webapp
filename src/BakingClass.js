import React from 'react';
import './styles/BakingClass.css';
import Card from './components/Card.js';

function BakingClass() {
  return (
    <div className="div-BakingClass">
      <div className="table-container">
        <table>
          <tr>
            <td>
              <Card />
            </td>
            <td>
              <Card />
            </td>
            <td>
              <Card />
            </td>
          </tr>
          <tr>
            <td>
              <Card />
            </td>
            <td>
              <Card />
            </td>
            <td>
              <Card />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default BakingClass;
