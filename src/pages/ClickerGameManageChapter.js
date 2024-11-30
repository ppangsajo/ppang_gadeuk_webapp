import React, { useContext } from 'react';
import { ChapterManageContext } from './ClickerGameMain'
import { useNavigate } from 'react-router-dom';
import { ChapterContainer, ChapterItem } from '../styles/ClickerGameMainStyles';
import cardBlack from "../assets/images/ClickerGameImages/ClickerGameChapterIconBlack.png";
import cardColor from "../assets/images/ClickerGameImages/ClickerGameChapterIconColor.png";

const Chapters = ({ isTutorialClicked }) => {

    // const images = imagesRef.current.map((isUnlocked) => (isUnlocked ? cardColor : cardBlack));
    const navigate = useNavigate();
    const { images, setImages } = useContext(ChapterManageContext);

    const handleChapterClick = (index) => {
        if (isTutorialClicked) {
            if (!images[index]) {
                alert('이전 챕터를 먼저 완료해주세요!');
            } else {
                navigate(`/ClickerGameChapter/${index + 1}/1`);
            }
        } else {
            alert('튜토리얼 완료 후 차례대로 챕터를 진행해주세요!');
        }
    };

    // 튜토리얼 클릭 시 첫 번째 이미지를 활성화
    if (isTutorialClicked && !images[0]) {
        setImages((prevImages) => {
            const updatedImages = [...prevImages];
            updatedImages[0] = true;
            return updatedImages;
        });
    }
    const imagesSrc = images.map((isUnlocked) => (isUnlocked ? cardColor : cardBlack));

    return (
        <ChapterContainer>
            {imagesSrc.map((src, index) => (
                <ChapterItem
                    key={index}
                    src={src}
                    alt={`Image ${index + 1}`}
                    onClick={() => handleChapterClick(index)} // 클릭 이벤트 추가
                />
            ))}
        </ChapterContainer>
    );
};

export default Chapters;