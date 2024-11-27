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
  RecipeImage,
  RecipeSubTitle,
  RecipeTitle,
  CloseButton,
  RecipeLine,
  ModalSubContent,
} from './styles/BakingRecipe/ModalStyle.js';

Modal.setAppElement('#root');

function BakingClass() {
  const [isOpen, setModalOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const closeModal = () => {
    setModalOpen(false);
    enableScroll(); // 스크롤 활성화
  };

  const disableScroll = () => {
    document.body.style.overflow = 'hidden'; // 스크롤 비활성화
  };

  const enableScroll = () => {
    document.body.style.overflow = 'unset'; // 스크롤 복원
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
              disableScroll();
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
            {selectedRecipe && (
              <div>
                <RecipeTitle>{selectedRecipe.Title}</RecipeTitle>
                <RecipeImage
                  src={require(`./assets/images/BakingRecipeImages/${selectedRecipe.Image_Name}`)}
                  alt={selectedRecipe.Title}
                />
                <ModalSubContent>
                  <RecipeSubTitle>재료</RecipeSubTitle>
                  <ol>
                    {selectedRecipe.Ingredients.map((ingredient, index) => (
                      <RecipeLine key={index}>
                        {index + 1}. {ingredient}
                      </RecipeLine> // 각 재료를 리스트 항목으로 출력
                    ))}
                  </ol>

                  <RecipeSubTitle>조리법</RecipeSubTitle>
                  <ol>
                    {selectedRecipe.Instructions.split('\n').map(
                      (instruction, index) => (
                        <RecipeLine key={index}>{instruction}</RecipeLine> // 각 조리법을 리스트 항목으로 출력
                      )
                    )}
                  </ol>
                </ModalSubContent>
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
