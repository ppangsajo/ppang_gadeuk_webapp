import {
  CardStyle,
  RecipeTitle,
  RecipeThumbNail,
  CardBottom,
  Difficulty,
  CookingTime,
} from '../styles/BakingRecipe/CardStyle.js';
import '../static/bread_recipes.json';

function Card({ title, imgName }) {
  const context = require.context(
    '../assets/images/BakingRecipeImages',
    false,
    /\.(jpg)$/
  ); // require.context -> 디렉터리를 탐색, 가져올 파일의 경로를 배열로 반환
  const images = context.keys().reduce((acc, path) => {
    const key = path.replace('./', '').replace(/\.(jpg)$/, '');
    acc[key] = context(path);
    return acc;
  }, {}); // keys()로 접근하여 파일 경로를 획득, context(path)로 해당 파일을 로드

  const imgSrc = images[imgName];

  return (
    <>
      <CardStyle>
        <RecipeTitle>{title}</RecipeTitle>
        <RecipeThumbNail src={imgSrc} />
        <CardBottom>
          <Difficulty>난이도: 초급</Difficulty>
          <CookingTime>조리시간: 30분</CookingTime>
        </CardBottom>
      </CardStyle>
    </>
  );
}

export default Card;
