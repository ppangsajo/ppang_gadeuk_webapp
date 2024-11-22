import styled from 'styled-components';

//내 주변 빵집 찾기 
export const H1 = styled.h1`
  color: black;
  text-align: center;
  margin-top: 25px;
  margin-bottom: 25px;
  font-family: 'OurFont2', sans-serif; /* 원하는 폰트 */
  font-size: 25px;
`;

//서울특별시 성북구 ~~주변 빵집 목록
export const H2 = styled.h1`
  color: black;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 10px;
`;

// 주변빵집 보기, 거리순으로 보기 버튼 스타일
export const Button = styled.button`
  margin: 5px 0; /* Spacing between buttons */
  padding: 10px; /* Padding for buttons */
  cursor: pointer; /* Change cursor on hover */
  background-color: #fff; /* Button background */
  border: none; /* No border */
  border-radius: 5px; /* Rounded corners */
`;

// 사이드바 스타일
export const Sidebar = styled.div`
  width: 250px; /* 사이드바 너비 */
  background-color: sandybrown; /* 사이드바 배경 색 */
  padding: 20px;
  display: flex;
  flex-direction: column; /* Stack sections vertically */
`;


// 베이커리 리스트 스타일
export const BakeryList = styled.ul`
  list-style-type: none; /* Remove bullet points */
  padding: 0; /* Remove default padding */
`;

// 개별 베이커리 항목 스타일
export const BakeryItem = styled.li`
  display: flex; /* Use flexbox for layout */
  align-items: center; /* Center items vertically */
  margin-bottom: 15px; /* Space between items */
`;

// 베이커리 아이템 이미지 스타일
export const BakeryImage = styled.img`
  width: 50px; /* Image size */
  height: 50px; /* Image size */
  border-radius: 5px; /* Rounded image */
  margin-right: 10px; /* Spacing between image and text */
`;

// 베이커리 상세 내용 스타일
export const BakeryDetails = styled.div`
  flex-grow: 1; /* Take up remaining space */
`;


