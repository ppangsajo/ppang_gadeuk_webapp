import React from 'react';
import { ImageContainer, ImageItem } from '../styles/MainScreenStyles';
import img1 from "../assets/images/MainScreenImages/mainScreenCard1.png";
import img2 from "../assets/images/MainScreenImages/mainScreenCard2.png";
import img3 from "../assets/images/MainScreenImages/mainScreenCard3.png";
import img4 from "../assets/images/MainScreenImages/mainScreenCard4.png";
import img5 from "../assets/images/MainScreenImages/mainScreenCard5.png";

const MainScreenCard = () => {
  const images = [img1, img2, img3, img4, img5];
  return (
    <ImageContainer>
      {images.map((src, index) => (
        <ImageItem key={index} src={src} alt={`Image ${index + 1}`} />
      ))}
    </ImageContainer>
  );
}

export default MainScreenCard;