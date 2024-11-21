import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const PulseButton = styled.button`
  background-color: #2196F3; // 깔끔한 파란색 배경
  color: #fff; // 버튼 텍스트 색상 -> 흰색
  border: none;
  padding: 12px 14px; 
  cursor: pointer;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); // 그림자 (좀 더 깊게)
  transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease; /* transform 추가 */

  &:hover {
    background-color: #ffdddd; // 버튼 배경 색상 -> 연한 빨간색 배경
    color: #000; // 버튼 텍스트 색상 -> 검정색
    border: 2px solid #007bff; // 버튼 테두리 색상 -> 밝은 파란색 테두리
    transform: translateY(-1px) scale(1.05) rotate(5deg); // 확대 및 회전 효과
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5); // 그림자 강화
    background-image: linear-gradient(to right, #ffdddd, #ffeedd); // 그라디언트 효과
    animation: ${pulse} 0.8s infinite; // 맥박 애니메이션 효과(맥박 속도 조정)
  }

  //버튼 클릭시 이벤트
  &:active {
    transform: translateY(1px); /* 눌렀을 때 살짝 아래로 이동 */
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); /* 그림자 감소 */
  }
`;

export default PulseButton;