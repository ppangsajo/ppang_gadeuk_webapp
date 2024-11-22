import styled from 'styled-components';
import PulseButton from './buttonStyles';

export const RoadViewContainer = styled.div`
  position: relative;
  width: 100%;
  height: 450px;
  border-radius: 8px; /* 컨테이너에 둥근 모서리 추가 */
  overflow: hidden; /* 컨테이너 내부 요소가 밖으로 나가지 않도록 */
`;

// //styled(~): ~의 기본 스타일을 유지 + 필요한 추가 스타일 적용. styled-components를 이용한 재활용.
export const CloseButton = styled(PulseButton)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
`;