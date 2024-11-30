import React, { useState, useEffect } from 'react';
import { ReactTyped } from "react-typed";
import MouseTrail from "@scorder/react-mouse-trail";
import { ClickerGameBackground, ClickerGameMessage } from '../styles/ClickerGameMainStyles';
import Background1 from '../assets/images/ClickerGameImages/ClickerGameTutorialBGI4.png';
import Background2 from '../assets/images/ClickerGameImages/ClickerGameTutorialBGI5.png';
import Image1 from '../assets/images/ClickerGameImages/ClickerGameCh01Oven.png';

const ClickerGameChapter01_2 = ({ onNext }) => {

    const [isIndicateTextVisible, setIsIndicateTextVisible] = useState(true);
    const [backgroundImage, setBackgroundImage] = useState(Background1); // 초기 배경 이미지 설정
    const [imagesToShow, setImagesToShow] = useState(null); // 표시할 이미지를 관리
    const [showTrail, setShowTrail] = useState(false); // MouseTrail 활성화 여부
    const [clickCount, setClickCount] = useState(0); // 클릭 횟수

    const config = {
        color: "#0000000",
        idleAnimation: true,
        idleAnimationCount: 10,
        inverted: true,
        size: 50,
        trailCount: 20,
    };

    useEffect(() => {

        // 3초 후 텍스트 숨기기
        const timer1 = setTimeout(() => {
            setIsIndicateTextVisible(false);
        }, 3000);

        // 2초 후 배경 이미지 변경
        const timer2 = setTimeout(() => {
            setBackgroundImage(Background2); // 배경 이미지 변경
        }, 2000);

        // 2.5초 후 오븐 이미지 보이기
        const timer3 = setTimeout(() => {
            setImagesToShow(Image1);
        }, 2500);

        // 3초 후 MouseTrail 활성화
        const timer4 = setTimeout(() => {
            setShowTrail(true);
        }, 3000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
        };
    }, []);

    const handleImageClick = () => {
        if (clickCount < 10) {
            setClickCount((prev) => prev + 1);
        }

        // 10번 클릭 이후 MouseTrail 비활성화 및 다음 페이지로 이동
        if (clickCount + 1 === 10) {
            setShowTrail(false);
            onNext();
        }
    };

    return (
        <ClickerGameBackground bgImage={backgroundImage}>

            {showTrail && (
                <MouseTrail
                    {...config}
                />
            )}
            {isIndicateTextVisible && <ClickerGameMessage>
                <ReactTyped
                    strings={[
                        "오븐을 10번 클릭하여 빵을 구워내세요.",
                    ]}
                    typeSpeed={40}
                    loop={false}
                />
            </ClickerGameMessage>}

            {imagesToShow && (
                <img
                    src={imagesToShow}
                    onClick={handleImageClick}
                    alt="Oven"
                    style={{
                        position: "absolute",
                        top: "50%", // 화면 중앙
                        left: "50%",
                        transform: "translate(-50%, -50%)", // 요소 중심점 이동
                        width: "70%", // 이미지 크기 조정
                        height: "auto", // 비율 유지
                        zIndex: 10,
                    }}
                />
            )}

        </ClickerGameBackground>
    );

}

export default ClickerGameChapter01_2;