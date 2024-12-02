import styled from 'styled-components';

export const BakingClassContainer = styled.div`
  width: 100%;
  padding: 170px 30px;
  background-image: url('/baking-class-background.png');
  background-attachment: fixed;

  background-size: cover; /* 이미지를 화면에 맞게 확대 */
  background-position: center; /* 중앙 정렬 */
  min-height: 100vh; /* 최소 높이를 화면 높이로 설정 */

  display: flex;
  justify-content: center;
  box-sizing: border-box;
  z-index: 0;
`;

export const StyledTable = styled.table`
  border-collapse: separate;
  /* border-spacing: 10px; */
`;

export const TopToolBar = styled.div`

  position: absolute;
  top: 90px;
  left: 50%;
  transform: translateX(-50%);
  zIndex: 2;
  display: flex;
  gap: 10px;
  margin : 20, 20, 20, 20;
`;

export const RecordingContainer = styled.div`
  width: 10vw;
  text-align: center;
  display: flex;
  gap: 10px;
  justify-content: center;

`;

export const Button = styled.button`
  font-size: 16px;
  cursor: pointer;
  font-family: 'ourFont2';
  border-radius: 5px;
  border: none;
  background-color: ${(props) => props.backgroundColor || '#ccc'};
  color: ${(props) => props.color || '#000'};
  padding: ${(props) => props.padding || '10px'};
`;

export const StartButton = styled(Button)`
  width: 10vw;
`;

export const SearchInput = styled.input`

  padding: 10px;
  width: 20vw;
  font-size: 16px;
  font-family: 'ourFont2';
  border-radius: 5px;
  border: 1px solid #ccc;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const DifficultyButton = styled.button`

  width: 7vw;
  padding: 10px 15px;
  font-size: 16px;
  font-family: 'ourFont2';
  border-radius: 5px;
  border: none;
  background-color: ${(props) => (props.isSelected ? '#ff6f61' : '#ccc')}; /* 선택된 버튼 강조 */
  color: #333;
  cursor: pointer;

  &:hover {
    opacity: 0.9; /* 호버 시 약간 어두워짐 */
  }
`;