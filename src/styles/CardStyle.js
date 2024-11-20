import styled from 'styled-components';

export const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 15px;
  background-color: white;
  padding: 10px;
  width: 300px;
  height: 240px;
`;

export const RecipeTitle = styled.div`
  font-size: 30px;
  text-align: center;
  font-family: 'CookieRun-Bold';
`;

export const RecipeThumbNail = styled.img`
  margin-top: 10px;
  width: 210px;
  height: 150px;
`;

export const CardBottom = styled.div`
  width: 95%;
  margin-top: 8px;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Difficulty = styled.span`
  font-size: 16px;
  font-family: 'CookieRun-Regular';
`;

export const CookingTime = styled.span`
  font-size: 16px;
  font-family: 'CookieRun-Regular';
`;
