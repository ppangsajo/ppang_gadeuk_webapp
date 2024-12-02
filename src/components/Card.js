import {
  CardStyle,
  RecipeTitle,
  RecipeThumbNail,
  CardBottom,
  Level,
  CookingTime,
} from '../styles/BakingRecipe/CardStyle.js';

function Card({ props, onClick }) {
  const { Title, Difficulty, Baking_Time, Image_Name } = props;
  const imgPath = require(`../assets/images/BakingRecipeImages/${Image_Name}`);

  return (
    <>
      <CardStyle onClick={onClick}>
        <RecipeTitle>{Title}</RecipeTitle>
        <RecipeThumbNail src={imgPath} />
        <CardBottom>
          <Level>난이도: {Difficulty}</Level>
          <CookingTime>
            조리시간: {Baking_Time}
          </CookingTime>
        </CardBottom>
      </CardStyle>
    </>
  );
}

export default Card;
