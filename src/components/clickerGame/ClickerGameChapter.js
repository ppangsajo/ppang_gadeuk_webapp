import React from 'react';
import { ChapterContainer, ChapterItem } from '../../styles/ClickerGameMainStyles';
import cardBlack from "../../assets/images/ClickerGameChapterIconBlack.png";
import cardColor from "../../assets/images/ClickerGameChapterIconColor.png";

const Chapters = ({ isTutorialClicked }) => {
    const handleChapterClick = (index) => {
        if (isTutorialClicked) {

        } else {
            alert('튜토리얼을 먼저 완료해주세요!');
        }
    };

    // 튜토리얼 버튼 클릭 여부에 따라 이미지를 설정
    const images = Array(5).fill(isTutorialClicked ? cardColor : cardBlack);

    return (
        <ChapterContainer>
            {images.map((src, index) => (
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