import React, { useState, useEffect } from 'react';
import { ReactTyped } from "react-typed";
import { ClickerGameBackground, ClickerGameMessage } from '../../styles/ClickerGameMainStyles';
import Ch01Background from '../../assets/images/ClickerGameImages/ClickerGameTutorialBGI5.png';
import Ch02Background from '../../assets/images/ClickerGameImages/ClickerGameCh02BGI2.png'
import Ch03Background from '../../assets/images/ClickerGameImages/ClickerGameCh03BGI2.png'
import Ch04Background from '../../assets/images/ClickerGameImages/ClickerGameCh04BGI2.png'
import Ch05Background from '../../assets/images/ClickerGameImages/ClickerGameCh05BGI2.png'
import BreadWisdom from '../../assets/images/ClickerGameImages/ClickerGameBreadWisdomOne.png';
import Ch01StoryBread from '../../assets/images/ClickerGameImages/ClickerGameStoryBread1.png';
import Ch02StoryBread from '../../assets/images/ClickerGameImages/ClickerGameStoryBread2.png';
import Ch03StoryBread from '../../assets/images/ClickerGameImages/ClickerGameStoryBread3.png';
import Ch04StoryBread from '../../assets/images/ClickerGameImages/ClickerGameStoryBread4.png';
import Ch05StoryBread from '../../assets/images/ClickerGameImages/ClickerGameStoryBread5.png';

const ClickerGameChapterContent5 = ({ index, story, onNext }) => {

    const [isIndicateTextVisible, setIsIndicateTextVisible] = useState(false);
    const [currentImage, setCurrentImage] = useState(BreadWisdom);
    const [imageSize, setImageSize] = useState("40vh"); // 초기 크기 설정
    const [transitionEnabled, setTransitionEnabled] = useState(true); // 애니메이션 활성화 상태

    let BackgroundImage;
    let Image;

    switch (index) {
        case 1:
            BackgroundImage = Ch01Background;
            Image = Ch01StoryBread;
            break;
        case 2:
            BackgroundImage = Ch02Background;
            Image = Ch02StoryBread;

            break;
        case 3:
            BackgroundImage = Ch03Background;
            Image = Ch03StoryBread;

            break;
        case 4:
            BackgroundImage = Ch04Background;
            Image = Ch04StoryBread;

            break;
        case 5:
            BackgroundImage = Ch05Background;
            Image = Ch05StoryBread;

            break;
    }

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setIsIndicateTextVisible(true);
        }, 3500);

        const timer2 = setTimeout(() => {
            setIsIndicateTextVisible(false);
        }, 17500);

        // 3초 동안 이미지 크기를 점진적으로 증가
        const timer3 = setTimeout(() => {
            setImageSize("85vh"); // 32%로 확대
        }, 0);

        // 3초 후 이미지를 Image2로 변경
        const timer4 = setTimeout(() => {
            setTransitionEnabled(false); // 애니메이션 비활성화
            setCurrentImage(Image); // Image2로 변경
            setImageSize("85vh"); // 36% 크기로 설정
        }, 3000);

        // 18초 후 이미지를 Image1로 변경
        const timer5 = setTimeout(() => {
            setCurrentImage(BreadWisdom); // Image1로 다시 변경
            setTransitionEnabled(true); // 애니메이션 활성화
        }, 18000);

        // 18.5초 이후 이미지를 다시 20% 크기로 축소
        const timer6 = setTimeout(() => {
            setImageSize("40vh"); // 초기 크기로 축소
        }, 18500);

        const timer7 = setTimeout(() => {
            onNext();
        }, 21500)

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
            clearTimeout(timer5);
            clearTimeout(timer6);
            clearTimeout(timer7);
        };
    }, []);


    return (
        <ClickerGameBackground bgImage={BackgroundImage}>
            {isIndicateTextVisible && (
                <ClickerGameMessage bgColor="rgba(0, 255, 0, 0.5)">
                    <ReactTyped
                        strings={story}
                        typeSpeed={40}
                        loop={false}
                    />
                </ClickerGameMessage>
            )}

            <img
                src={currentImage}
                alt="Bread"
                style={{
                    position: "absolute",
                    top: "50%", // 화면 세로 중앙
                    left: "50%", // 화면 가로 중앙
                    transform: "translate(-50%, -50%)", // 중심점 기준으로 이동
                    width: "auto",
                    height: imageSize,
                    zIndex: 3,
                    transition: transitionEnabled ? "height 3s ease-in-out" : "none", // 애니메이션 제어
                }}
            />
        </ClickerGameBackground>
    );
};

export default ClickerGameChapterContent5;