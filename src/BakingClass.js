import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import {
  BakingClassContainer,
  StyledTable,
} from './styles/BakingRecipe/BakingClassStyle.js';
import Card from './components/Card.js';
import PageHeader1 from './components/PageHeader1';
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
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDataSet, setFilteredDataSet] = useState(dataSet);
  const [difficulty, setDifficulty] = useState('전체'); // 난이도 상태 추가

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

  // useEffect로 상태 변화 감지 및 필터링 처리
  useEffect(() => {
    let filtered = dataSet;

    // 검색어 필터링
    if (searchTerm.trim() !== '') {
      filtered = filtered.filter((item) =>
        item.Title.includes(searchTerm.trim())
      );
    }

    // 난이도 필터링
    if (difficulty !== '전체') {
      filtered = filtered.filter((item) => item.Difficulty === difficulty);
    }

    setFilteredDataSet(filtered);
  }, [searchTerm, difficulty]); // searchTerm과 difficulty가 변경될 때마다 실행

  const renderTableContent = () => {
    if (filteredDataSet.length === 0) {
      return (
        <tr>
          <td
            colSpan={3}
            style={{
              textAlign: 'center',
              padding: '20px',
              color: 'white',
              fontSize: '16px',
              fontFamily: 'ourFont2',
            }}
          >
            검색 결과가 없습니다
          </td>
        </tr>
      );
    }

    const rows = [];
    let currentRow = [];

    filteredDataSet.forEach((item, index) => {
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

      if ((index + 1) % 3 === 0 || index === filteredDataSet.length - 1) {
        rows.push(<tr key={`row-${rows.length}`}>{currentRow}</tr>);
        currentRow = [];
      }
    });

    return rows;
  };

  return (
    <div>
      <PageHeader1 />
      <BakingClassContainer>
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 2,
            display: 'flex',
            gap: '10px',
          }}
        >
          {/* 검색 필드 */}
          <input
            type="text"
            placeholder="레시피 제목을 검색하세요"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              marginTop: '20px',
              padding: '10px',
              width: '20vw',
              fontSize: '16px',
              fontFamily: 'ourFont2',
              borderRadius: '5px',
              border: '1px solid #ccc',
              background: 'rgba(255, 255, 255, 0.8)',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          />

          {/* 난이도 버튼 */}
          {['전체', '초급', '중급', '고급'].map((level) => (
            <button
              key={level}
              onClick={() => setDifficulty(level)}
              style={{
                marginTop: '20px',
                width: '7vw',
                padding: '10px 15px',
                fontSize: '16px',
                fontFamily: 'ourFont2',
                borderRadius: '5px',
                border: 'none',
                backgroundColor:
                  level === difficulty ? '#ff6f61' : '#ccc', // 선택된 버튼 강조
                color: '#333',
                cursor: 'pointer',
              }}
            >
              {level}
            </button>
          ))}
        </div>

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
                      </RecipeLine>
                    ))}
                  </ol>

                  <RecipeSubTitle>조리법</RecipeSubTitle>
                  <ol>
                    {selectedRecipe.Instructions.split('\n').map(
                      (instruction, index) => (
                        <RecipeLine key={index}>{instruction}</RecipeLine>
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