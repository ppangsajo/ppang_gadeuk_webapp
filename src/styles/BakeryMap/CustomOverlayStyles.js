import styled from 'styled-components';

export const Wrap = styled.div`
  position: absolute;
  left: 0;
  bottom: 80px; // 마커와 CustomOverlay간의 간격
  width: 338px;
  height: 132px;
  margin-left: -169px; //InfoAfter 위치
  text-align: left;
  //overflow: visible;
  font-size: 14px;
  font-family: 'Malgun Gothic', dotum, '돋움', sans-serif;
  line-height: 1.5;
`;

export const Info = styled.div`
  width: 336px;
  height: 160px; // 콘텐트 높이
  border-radius: 5px;
  border-bottom: 2px solid #ccc;
  border-right: 1px solid #ccc;
  overflow: hidden;
  background: #fff;

  &:nth-child(1) {
    border: 0;
    box-shadow: 0px 1px 2px #888;
  }
`;

export const Title = styled.div`
  position: relative;
  padding: 5px 30px 0 10px; /* 오른쪽 패딩 추가 */
  height: 30px;
  background: #eee;
  border-bottom: 1px solid #ddd;
  font-size: 19px;
  font-weight: bold;
    white-space: nowrap; /* 텍스트 줄바꿈 방지 */
  overflow: hidden; /* 넘치는 텍스트 숨김 */
  text-overflow: ellipsis; /* 넘치는 텍스트 ...로 말줄임 */
`;

export const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #888;
  width: 17px;
  height: 17px;
  background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png');
  cursor: pointer;

`;

export const Body = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Img = styled.div`
  position: absolute;
  top: 6px;
  left: 10px;
  width: 73px;
  height: 71px;
  border: 1px solid #ddd;
  color: #888;
  overflow: hidden;
`;

export const Desc = styled.div`
  position: relative;
  margin: 8px 0 0 100px;
  height: auto; /* height를 auto로 변경하여 내용에 맞게 조정되도록 함 */
`;

export const Address = styled.div`
font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Tel = styled.div`
  font-size: 14px;
  color: #888;
  margin-top: -2px;
`;

export const Distance = styled.div`
  font-size: 14px;
  color: #888;
  margin-top: -2px;
`;

export const ButtonWrapper = styled.div`
  position: relative;
  margin-top: 20px; 
  display: flex;
  gap: 25px; /* 버튼 사이의 간격 조정 */
  justify-content: center; /* 버튼들 가운데 정렬 */
`;

export const Button = styled.a`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 3px;
  background: #f9f9f9;
  border: 1px solid #ddd;
  font-size: 12px;
  font-weight: bold;
  color: #888;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    background: #e9e9e9;
  }
`;

export const InfoAfter = styled.div`
  content: '';
  position: absolute;
  margin-left: -10px;
  left: 50%;
  //bottom: 20px;
  width: 22px;
  height: 12px;
  background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png');
`;