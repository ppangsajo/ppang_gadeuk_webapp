import styled from 'styled-components';

export const Wrap = styled.div`
  position: absolute;
  left: 0;
  bottom: 40px;
  width: 288px;
  height: 132px;
  margin-left: -144px;
  text-align: left;
  overflow: hidden;
  font-size: 12px;
  font-family: 'Malgun Gothic', dotum, '돋움', sans-serif;
  line-height: 1.5;
`;

export const Info = styled.div`
  width: 286px;
  height: 120px;
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
  padding: 5px 0 0 10px;
  height: 30px;
  background: #eee;
  border-bottom: 1px solid #ddd;
  font-size: 18px;
  font-weight: bold;
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

export const Desc = styled.div`
  position: relative;
  margin: 13px 0 0 90px;
  height: 75px;
`;

export const Ellipsis = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Jibun = styled.div`
  font-size: 11px;
  color: #888;
  margin-top: -2px;
`;

export const Img = styled.div`
  position: absolute;
  top: 6px;
  left: 5px;
  width: 73px;
  height: 71px;
  border: 1px solid #ddd;
  color: #888;
  overflow: hidden;
`;

export const Link = styled.a`
  color: #5085BB;
`;

export const InfoAfter = styled.div`
  content: '';
  position: absolute;
  margin-left: -12px;
  left: 50%;
  bottom: 0;
  width: 22px;
  height: 12px;
  background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png');
`;