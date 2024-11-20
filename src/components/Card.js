import {
  CardStyle,
  RecipeTitle,
  RecipeThumbNail,
  CardBottom,
  Difficulty,
  CookingTime,
} from '../styles/CardStyle.js';

function Card() {
  return (
    <>
      <CardStyle>
        <RecipeTitle>우유 식빵 만들기</RecipeTitle>
        <RecipeThumbNail src={require('../images/white-bread.jpg')} />
        <CardBottom>
          <Difficulty>난이도: 초급</Difficulty>
          <CookingTime>조리시간: 30분</CookingTime>
        </CardBottom>
      </CardStyle>
    </>
  );
}

export default Card;
