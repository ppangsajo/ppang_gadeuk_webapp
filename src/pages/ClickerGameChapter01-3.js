import React, { useState, useEffect } from 'react';
import { ReactTyped } from "react-typed";
import MouseTrail from "@scorder/react-mouse-trail";
import { ClickerGameBackground, ClickerGameMessage } from '../styles/ClickerGameMainStyles';
import Background from '../assets/images/ClickerGameImages/ClickerGameTutorialBGI5.png';
import Image1 from '../assets/images/ClickerGameImages/ClickerGameCh01Bread.png';

const ClickerGameChapter01_3 = ({ onNext }) => {

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
        <ClickerGameBackground bgImage={Background}>


            {showTrail && (
                <MouseTrail
                    {...config}
                />
            )}
            {isIndicateTextVisible && <ClickerGameMessage>
                <ReactTyped
                    strings={[
                        "오븐이 작동하여 고대 이집트의 플랫브레드를 구워내었습니다.",
                        "빵을 세번 클릭하여 반으로 쪼개세요.",

                    ]}
                    typeSpeed={40}
                    loop={false}
                />
            </ClickerGameMessage>}


            <img
                src={Image1}
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

export default ClickerGameChapter01_3;