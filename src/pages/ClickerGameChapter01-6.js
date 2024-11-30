import React, { useState, useEffect } from 'react'; import { ReactTyped } from "react-typed";
import MouseTrail from "@scorder/react-mouse-trail";
import { ClickerGameBackground, ClickerGameMessage } from '../styles/ClickerGameMainStyles';
import Background from '../assets/images/ClickerGameImages/ClickerGameTutorialBGI5.png';
import Image1 from '../assets/images/ClickerGameImages/ClickerGameBreadWisdomOne.png';
import Image2 from '../assets/images/ClickerGameImages/ClickerGamePaper.png';

const ClickerGameChapter01_6 = ({ onNext }) => {

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
        <ClickerGameBackground bgImage={Background}>
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
                src={Image1}

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
                src={Image2}
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

export default ClickerGameChapter01_6;