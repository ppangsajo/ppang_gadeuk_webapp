import React from 'react';
import './styles/BakingRecipe/BakingClass.css';
import Card from './components/Card.js';
import PageHeader from './components/PageHeader';
import dataSet from './static/translated_recipe.json';

function BakingClass() {
  const renderTableContent = () => {
    const rows = [];
    let currentRow = []; // 현재 행의 내용을 담는 배열

    dataSet.forEach((item, index) => {
      currentRow.push(
        <td key={`cell-${index}`}>
          <Card props={item} />
        </td>
      );

      if ((index + 1) % 3 === 0 || index === dataSet.length - 1) {
        // 3개마다 새로운 행 추가 또는 마지막 아이템 처리
        rows.push(<tr key={`row-${rows.length}`}>{currentRow}</tr>);
        currentRow = []; // 새로운 행을 위해 초기화
      }
    });

    return rows;
  };

  return (
    <>
      <PageHeader />
      <div className="div-BakingClass">
        <div className="table-container">
          <table>
            <tbody>{renderTableContent()}</tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default BakingClass;
