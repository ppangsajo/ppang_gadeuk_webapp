import styled from 'styled-components';

export const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  background-color: white;
  padding: 10px 10px 5px 10px;
  width: 300px;
  height: 240px;
  margin: 35px;
`;

export const RecipeTitle = styled.div`
  text-align: center;
  font-size: 17px;
  height: 20px;
  margin-bottom: 5px;
  font-family: 'CookieRun-Bold';
`;

export const RecipeThumbNail = styled.img`
  margin-top: 15px;
  width: 230px;
  height: 160px;
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
