import React, { useState, useRef, useEffect } from 'react';
import Modal from 'react-modal';
import { BakingClassContainer, StyledTable, TopToolBar, RecordingContainer, StartButton, Button, SearchInput, DifficultyButton } from './styles/BakingRecipe/BakingClassStyle.js';
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
  const [difficulty, setDifficulty] = useState('전체');
  const [isRecording, setIsRecording] = useState(false);
  const recognitionRef = useRef(null);
  const inputRef = useRef(null); // 검색 입력창 참조

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


  // 음성인식 초기화
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("현재 브라우저는 음성 인식을 지원하지 않습니다.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "ko-KR"; // 한국어로 설정
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      console.log("Recognized text:", transcript);
      setSearchTerm((prevTerm) => prevTerm + transcript); // 상태 업데이트
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      alert("음성 인식 중 오류가 발생했습니다.");
    };

    recognition.onend = () => {
      console.log("Speech recognition ended.");
      setIsRecording(false); // 녹음 상태 종료
    };

    recognitionRef.current = recognition;
  }, []);

  // 녹음 시작
  const startRecording = () => {
    if (!inputRef.current) {
      alert("검색창을 선택한 후 녹음을 시작해주세요.");
      return;
    }

    if (recognitionRef.current) {
      setIsRecording(true);
      recognitionRef.current.start();
    } else {
      alert("음성 인식을 초기화하지 못했습니다.");
    }
  };

  // 녹음 중지
  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
    }
  };

  // 녹음 취소
  const cancelRecording = () => {
    stopRecording();
    setSearchTerm(''); // 검색어 초기화
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
        <TopToolBar>
          {/* 음성 검색 버튼 */}
          {!isRecording ? (
            <StartButton onClick={startRecording} backgroundColor="#ff6f61" color="#fff">
              음성 검색
            </StartButton>
          ) : (
            <RecordingContainer>
              <Button onClick={cancelRecording} backgroundColor="#ffd3b6">
                취소
              </Button>
              <Button onClick={stopRecording} backgroundColor="#a8e6cf">
                중지
              </Button>
            </RecordingContainer>
          )}

          {/* 검색 필드 */}
          <SearchInput
            type="text"
            placeholder="레시피 제목을 검색하세요"
            ref={inputRef}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* 난이도 버튼 */}
          {['전체', '초급', '중급', '고급'].map((level) => (
            <DifficultyButton
              key={level}
              onClick={() => setDifficulty(level)}
              isSelected={level === difficulty} // 현재 선택된 버튼인지 확인
            >
              {level}
            </DifficultyButton>
          ))}
        </TopToolBar>

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