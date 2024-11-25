import React, { useState } from 'react';
import Modal from 'react-modal';
import {
  BakingClassContainer,
  StyledTable,
} from './styles/BakingRecipe/BakingClassStyle.js';
import Card from './components/Card.js';
import PageHeader from './components/PageHeader';
import dataSet from './static/translated_recipe.json';
import {
  ModalContent,
  ModalOverlay,
  ModalTitle,
  RecipeImage,
  RecipeTitle,
} from './styles/BakingRecipe/ModalStyle.js';

Modal.setAppElement('#root');

function BakingClass() {
  const [isOpen, setModalOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const renderTableContent = () => {
    const rows = [];
    let currentRow = [];

    dataSet.forEach((item, index) => {
      currentRow.push(
        <td key={`cell-${index}`}>
          <Card
            props={item}
            onClick={() => {
              setSelectedRecipe(item);
              setModalOpen(true);
            }}
          />
        </td>
      );

      if ((index + 1) % 3 === 0 || index === dataSet.length - 1) {
        rows.push(<tr key={`row-${rows.length}`}>{currentRow}</tr>);
        currentRow = [];
      }
    });
    return rows;
  };

  return (
    <div>
      <PageHeader />
      <BakingClassContainer>
        <StyledTable>
          <tbody>{renderTableContent()}</tbody>
        </StyledTable>
      </BakingClassContainer>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Recipe Modal"
      >
        <ModalOverlay>
          <ModalContent>
            <ModalTitle>레시피 상세</ModalTitle>
            {selectedRecipe && (
              <div>
                <RecipeImage
                  src={require(`./assets/images/BakingRecipeImages/${selectedRecipe.Image_Name}`)}
                  alt={selectedRecipe.Title}
                />

                <RecipeTitle>{selectedRecipe.Title}</RecipeTitle>
                <p>재료: {selectedRecipe.Ingredients}</p>
                <p>조리법: {selectedRecipe.Instructions}</p>
              </div>
            )}
            <button onClick={() => setModalOpen(false)}>닫기</button>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </div>
  );
}

export default BakingClass;
