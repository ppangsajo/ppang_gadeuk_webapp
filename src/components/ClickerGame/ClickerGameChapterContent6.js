import React, { useState, useEffect } from 'react'; import { ReactTyped } from "react-typed";
import MouseTrail from "@scorder/react-mouse-trail";
import { ClickerGameBackground, ClickerGameMessage } from '../../styles/ClickerGameMainStyles';
import Ch01Background from '../../assets/images/ClickerGameImages/ClickerGameTutorialBGI5.png';
import Ch02Background from '../../assets/images/ClickerGameImages/ClickerGameCh02BGI2.png'
import Ch03Background from '../../assets/images/ClickerGameImages/ClickerGameCh03BGI2.png'
import Ch04Background from '../../assets/images/ClickerGameImages/ClickerGameCh04BGI2.png'
import Ch05Background from '../../assets/images/ClickerGameImages/ClickerGameCh05BGI2.png'
import BreadWisdom from '../../assets/images/ClickerGameImages/ClickerGameBreadWisdomOne.png';
import Paper from '../../assets/images/ClickerGameImages/ClickerGamePaper.png';

const ClickerGameChapterContent6 = ({ index, onNext }) => {

    const [isIndicateTextVisible, setIsIndicateTextVisible] = useState(true);
    const [showTrail, setShowTrail] = useState(false);
    const [clickCount, setClickCount] = useState(0);

    const config = {
        color: "#0000000",
        idleAnimation: true,
        idleAnimationCount: 10,
        inverted: true,
        size: 50,
        trailCount: 20,
    };

    let BackgroundImage;

    switch (index) {
        case 1:
            BackgroundImage = Ch01Background;
            break;
        case 2:
            BackgroundImage = Ch02Background;
            break;
        case 3:
            BackgroundImage = Ch03Background;
            break;
        case 4:
            BackgroundImage = Ch04Background;
            break;
        case 5:
            BackgroundImage = Ch05Background;
            break;
    }

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setIsIndicateTextVisible(false);
        }, 2500);

        const timer2 = setTimeout(() => {
            setShowTrail(true);
        }, 2500);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    const handleImageClick = () => {
        if (clickCount < 3) {
            setClickCount((prev) => prev + 1);
        }

        if (clickCount + 1 === 3) {
            setShowTrail(false);
            onNext();
        }
    };

    return (
        <ClickerGameBackground bgImage={BackgroundImage}>
            {showTrail && <MouseTrail {...config} />}
            {isIndicateTextVisible && (
                <ClickerGameMessage>
                    <ReactTyped
                        strings={[
                            "종이쪽지를 세번 클릭하여 힌트를 읽어보세요."
                        ]}
                        typeSpeed={40}
                        loop={false}
                    />
                </ClickerGameMessage>
            )}

            <img
                src={BreadWisdom}

                alt="Paper"
                style={{
                    position: "absolute",
                    top: "50%", // 화면 세로 중앙
                    left: "35%", // 화면 가로에서 왼쪽으로 배치
                    transform: "translate(-50%, -50%)", // 중심점 기준으로 이동
                    width: "20%",
                    height: "auto",
                    zIndex: 0,
                }}
            />

            <img
                src={Paper}
                onClick={handleImageClick}
                alt="Paper"
                style={{
                    position: "absolute",
                    top: "50%", // 화면 세로 중앙
                    left: "65%", // 화면 가로에서 오른쪽으로 배치
                    transform: "translate(-50%, -50%)", // 중심점 기준으로 이동
                    width: "20%",
                    height: "auto",
                    zIndex: 0,
                }}
            />
        </ClickerGameBackground>
    );
};

export default ClickerGameChapterContent6;