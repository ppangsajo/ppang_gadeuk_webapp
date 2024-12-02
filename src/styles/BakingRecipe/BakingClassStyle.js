import styled from 'styled-components';

export const BakingClassContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 90px 30px;
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
