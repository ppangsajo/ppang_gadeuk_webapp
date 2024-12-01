import {
  CardStyle,
  RecipeTitle,
  RecipeThumbNail,
  CardBottom,
  Difficulty,
  CookingTime,
} from '../styles/BakingRecipe/CardStyle.js';

function Card({ props, onClick }) {
  const { Title, Difficult, Baking_Time, Image_Name } = props;
  const imgPath = require(`../assets/images/BakingRecipeImages/${Image_Name}`);

  return (
    <>
      <CardStyle onClick={onClick}>
        <RecipeTitle>{Title}</RecipeTitle>
        <RecipeThumbNail src={imgPath} />
        <CardBottom>
          <Difficulty>난이도: {Difficult ? Difficult : '중급'}</Difficulty>
          <CookingTime>
            조리시간: {Baking_Time ? Baking_Time : '30분'}
          </CookingTime>
        </CardBottom>
      </CardStyle>
    </>
  );
}

export default Card;
