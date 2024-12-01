import React, { useState, useEffect } from 'react';
import { ReactTyped } from "react-typed";
import MouseTrail from "@scorder/react-mouse-trail";
import { ClickerGameBackground, ClickerGameMessage } from '../../styles/ClickerGameMainStyles';
import Ch01Background from '../../assets/images/ClickerGameImages/ClickerGameTutorialBGI5.png';
import Ch01Bread from '../../assets/images/ClickerGameImages/ClickerGameCh01Bread.png';
import Ch02Background from '../../assets/images/ClickerGameImages/ClickerGameCh02BGI2.png'
import Ch02Bread from '../../assets/images/ClickerGameImages/ClickerGameCh02Bread.png';
import Ch03Background from '../../assets/images/ClickerGameImages/ClickerGameCh03BGI2.png'
import Ch03Bread from '../../assets/images/ClickerGameImages/ClickerGameCh03Bread.png';
import Ch04Background from '../../assets/images/ClickerGameImages/ClickerGameCh04BGI2.png'
import Ch04Bread from '../../assets/images/ClickerGameImages/ClickerGameCh04Bread.png';
import Ch05Background from '../../assets/images/ClickerGameImages/ClickerGameCh05BGI2.png'
import Ch05Bread from '../../assets/images/ClickerGameImages/ClickerGameCh05Bread.png';

const ClickerGameChapterContent3 = ({ index, story, onNext }) => {

    const [isIndicateTextVisible, setIsIndicateTextVisible] = useState(true);
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

    let BackgroundImage;
    let Image;

    switch (index) {
        case 1:
            BackgroundImage = Ch01Background;
            Image = Ch01Bread;
            break;

        case 2:
            BackgroundImage = Ch02Background;
            Image = Ch02Bread;
            break;

        case 3:
            BackgroundImage = Ch03Background;
            Image = Ch03Bread;
            break;

        case 4:
            BackgroundImage = Ch04Background;
            Image = Ch04Bread;
            break;

        case 5:
            BackgroundImage = Ch05Background;
            Image = Ch05Bread;
            break;
    }


    useEffect(() => {

        // 5초 후 텍스트 숨기기
        const timer1 = setTimeout(() => {
            setIsIndicateTextVisible(false);
        }, 5000);

        // 3초 후 MouseTrail 활성화
        const timer2 = setTimeout(() => {
            setShowTrail(true);
        }, 3000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    const handleImageClick = () => {
        if (clickCount < 3) {
            setClickCount((prev) => prev + 1);
        }

        // 3번 클릭 이후 MouseTrail 비활성화 및 다음 페이지로 이동
        if (clickCount + 1 === 3) {
            setShowTrail(false);
            onNext();
        }
    };

    return (
        <ClickerGameBackground bgImage={BackgroundImage}>


            {showTrail && (
                <MouseTrail
                    {...config}
                />
            )}
            {isIndicateTextVisible && <ClickerGameMessage>
                <ReactTyped
                    strings={story}
                    typeSpeed={40}
                    loop={false}
                />
            </ClickerGameMessage>}


            <img
                src={Image}
                onClick={handleImageClick}
                alt="Bread"
                style={{
                    position: "absolute",
                    top: "50%", // 화면 중앙
                    left: "50%",
                    transform: "translate(-50%, -50%)", // 요소 중심점 이동
                    width: "50%", // 이미지 크기 조정
                    height: "auto", // 비율 유지
                    zIndex: 10,
                }}
            />

        </ClickerGameBackground>
    );

}

export default ClickerGameChapterContent3;