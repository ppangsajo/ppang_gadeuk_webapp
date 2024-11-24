import {
  CardStyle,
  RecipeTitle,
  RecipeThumbNail,
  CardBottom,
  Difficulty,
  CookingTime,
} from '../styles/BakingRecipe/CardStyle.js';

function Card({ props }) {
  const { Title, Ingredients, Instructions, Image_Name } = props;
  const imgPath = require(`../assets/images/BakingRecipeImages/${Image_Name}`);

  return (
    <>
      <CardStyle>
        <RecipeTitle>{Title}</RecipeTitle>
        <RecipeThumbNail src={imgPath} />
        <CardBottom>
          <Difficulty>난이도: 초급</Difficulty>
          <CookingTime>조리시간: 30분</CookingTime>
        </CardBottom>
      </CardStyle>
    </>
  );
}

export default Card;
