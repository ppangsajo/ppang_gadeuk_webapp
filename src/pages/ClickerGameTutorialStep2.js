import React, { useState, useEffect } from 'react';
import { ReactTyped } from "react-typed";
import { ClickerGameBackground, ClickerGameMessage, NextButton } from '../styles/ClickerGameMainStyles';
import Background1 from '../assets/images/ClickerGameImages/ClickerGameTutorialBGI2.png';
import Background2 from '../assets/images/ClickerGameImages/ClickerGameTutorialBGI3.png';
import Image1 from '../assets/images/ClickerGameImages/ClickerGameBreadWisdomOne.png';
import Image2 from '../assets/images/ClickerGameImages/ClickerGameBreadWisdomAll.png';


const TutorialStep2 = ({ onNext }) => {

    const [currentImage, setCurrentImage] = useState(null); // 처음엔 이미지가 없음
    const [isImageVisible, setIsImageVisible] = useState(false); // 이미지는 기본적으로 숨김 상태
    const [backgroundImage, setBackgroundImage] = useState(Background1); // 초기 배경 이미지 설정

    useEffect(() => {
        // 2초 후 Image1 표시
        const timer1 = setTimeout(() => {
            setCurrentImage(Image1);
            setIsImageVisible(true);
        }, 2000);

        // 4초 후 Image2로 변경
        const timer2 = setTimeout(() => {
            setCurrentImage(Image2);
        }, 4000);

        // 6초 후 이미지 숨기기 및 배경 변경
        const timer3 = setTimeout(() => {
            setIsImageVisible(false);
            setBackgroundImage(Background2); // 배경 이미지 변경
        }, 6000);

        // 컴포넌트 언마운트 시 타이머 클리어
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);

    return (
        <ClickerGameBackground bgImage={backgroundImage}>

            {isImageVisible && (
                <img
                    src={currentImage}
                    alt="Tutorial"
                    style={{
                        position: "absolute",
                        top: "40%", // 부모 요소 기준으로 세로 중앙
                        left: "50%", // 부모 요소 기준으로 가로 중앙
                        transform: "translate(-50%, -50%)", // 요소 중심점 이동
                        zIndex: 10, // 제일 위에 나타나도록 설정
                    }}
                />
            )}

            <ClickerGameMessage>
                <ReactTyped
                    strings={[
                        "노트에는 세계 곳곳에 신비의 오븐들이 숨겨져 있으며, 각각의 오븐을 통해 '빵의 지혜'를 얻을 수 있고",
                        "모든 '빵의 지혜'를 모을 때, 전설 속 궁극의 빵을 완성할 수 있다고 적혀있었습니다."
                    ]}
                    typeSpeed={40}
                    loop={false}
                />
            </ClickerGameMessage>
            <NextButton onClick={onNext}>다음으로</NextButton >
        </ClickerGameBackground>
    );

}

export default TutorialStep2;