import React, { useState, useEffect } from 'react';
import { ReactTyped } from "react-typed";
import MouseTrail from "@scorder/react-mouse-trail";
import { ClickerGameBackground, ClickerGameMessage } from '../../styles/ClickerGameMainStyles';
import Ch01Background1 from '../../assets/images/ClickerGameImages/ClickerGameTutorialBGI4.png';
import Ch01Background2 from '../../assets/images/ClickerGameImages/ClickerGameTutorialBGI5.png';
import Ch01Oven from '../../assets/images/ClickerGameImages/ClickerGameCh01Oven.png';
import Ch02Background1 from '../../assets/images/ClickerGameImages/ClickerGameCh02BGI1.png';
import Ch02Background2 from '../../assets/images/ClickerGameImages/ClickerGameCh02BGI2.png';
import Ch02Oven from '../../assets/images/ClickerGameImages/ClickerGameCh02Oven.png';
import Ch03Background1 from '../../assets/images/ClickerGameImages/ClickerGameCh03BGI1.png';
import Ch03Background2 from '../../assets/images/ClickerGameImages/ClickerGameCh03BGI2.png';
import Ch03Oven from '../../assets/images/ClickerGameImages/ClickerGameCh03Oven.png';
import Ch04Background1 from '../../assets/images/ClickerGameImages/ClickerGameCh04BGI1.png';
import Ch04Background2 from '../../assets/images/ClickerGameImages/ClickerGameCh04BGI2.png';
import Ch04Oven from '../../assets/images/ClickerGameImages/ClickerGameCh04Oven.png';
import Ch05Background1 from '../../assets/images/ClickerGameImages/ClickerGameCh05BGI1.png';
import Ch05Background2 from '../../assets/images/ClickerGameImages/ClickerGameCh05BGI2.png';
import Ch05Oven from '../../assets/images/ClickerGameImages/ClickerGameCh05Oven.png';


const ClickerGameChapterContent2 = ({ index, onNext }) => {

    let BackgroundImage1;
    let BackgroundImage2;
    let Image;

    switch (index) {
        case 1:
            BackgroundImage1 = Ch01Background1;
            BackgroundImage2 = Ch01Background2;
            Image = Ch01Oven;
            break;

        case 2: BackgroundImage1 = Ch02Background1;
            BackgroundImage2 = Ch02Background2;
            Image = Ch02Oven;
            break;

        case 3: BackgroundImage1 = Ch03Background1;
            BackgroundImage2 = Ch03Background2;
            Image = Ch03Oven;
            break;

        case 4: BackgroundImage1 = Ch04Background1;
            BackgroundImage2 = Ch04Background2;
            Image = Ch04Oven;
            break;

        case 5: BackgroundImage1 = Ch05Background1;
            BackgroundImage2 = Ch05Background2;
            Image = Ch05Oven;
            break;

    }


    const [isIndicateTextVisible, setIsIndicateTextVisible] = useState(true);
    const [backgroundImage, setBackgroundImage] = useState(BackgroundImage1); // 초기 배경 이미지 설정
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
            setBackgroundImage(BackgroundImage2); // 배경 이미지 변경
        }, 2000);

        // 2.5초 후 오븐 이미지 보이기
        const timer3 = setTimeout(() => {
            setImagesToShow(Image);
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
                        width: "auto",
                        height: "85vh",
                        zIndex: 10,
                    }}
                />
            )}

        </ClickerGameBackground>
    );

}

export default ClickerGameChapterContent2;