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
  RecipeSubTitle,
  RecipeTitle,
  CloseButton,
  HorizontalLine,
} from './styles/BakingRecipe/ModalStyle.js';

Modal.setAppElement('#root');

function BakingClass() {
  const [isOpen, setModalOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden'; // 모달 열릴 때 스크롤 비활성화
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'unset'; // 모달 닫힐 때 스크롤 활성화
  };

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
        onRequestClose={closeModal}
        overlayClassName="ReactModal__Overlay"
        className="ReactModal__Content"
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
                <HorizontalLine />
                <RecipeSubTitle>재료</RecipeSubTitle>
                <ol>
                  {selectedRecipe.Ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li> // 각 재료를 리스트 항목으로 출력
                  ))}
                </ol>
                <RecipeSubTitle>조리법</RecipeSubTitle>
                <ol>
                  {selectedRecipe.Instructions.split('\n').map(
                    (instruction, index) => (
                      <li key={index}>{instruction}</li> // 각 조리법을 리스트 항목으로 출력
                    )
                  )}
                </ol>
              </div>
            )}
            <CloseButton onClick={closeModal}>X</CloseButton>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </div>
  );
}

export default BakingClass;
