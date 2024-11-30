import React, { useState, useEffect } from 'react';
import { ReactTyped } from "react-typed";
import { ClickerGameBackground, ClickerGameMessage, NextButton } from '../styles/ClickerGameMainStyles';
import Background from '../assets/images/ClickerGameImages/ClickerGameTutorialBGI4.png';

const ClickerGameChapter01_1 = ({ onNext }) => {

    const [isCenteredTextVisible, setIsCenteredTextVisible] = useState(true);

    useEffect(() => {
        // 2.5초 후 텍스트 숨기기
        const timer = setTimeout(() => {
            setIsCenteredTextVisible(false);
        }, 2500);

        return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
    }, []);


    return (
        <ClickerGameBackground bgImage={Background}>
            {isCenteredTextVisible && (
                <div
                    style={{

                        position: "absolute",
                        width: "90%",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        marginBottom: "2%",
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        color: "white",
                        padding: "20px",
                        textAlign: "center",
                        fontFamily: "OurFont1",
                        fontSize: "min(4vw, 4vh)",
                        zIndex: 10,
                    }}
                >
                    <ReactTyped
                        strings={[
                            "Chapter 1<br />고대 이집트의 피라미드 내부",
                        ]}
                        typeSpeed={40}
                        loop={false}
                    />
                </div>
            )}
            <ClickerGameMessage>
                <ReactTyped
                    strings={[
                        "당신은 이제 고대 이집트의 피라미드 내부에 도착하였습니다.",
                        "어두운 통로를 따라 한참을 헤매던 중, 빛 한줄기를 따라가다 신비로운 오븐을 발견합니다."
                    ]}
                    typeSpeed={40}
                    loop={false}
                />
            </ClickerGameMessage>
            <NextButton onClick={onNext}>다음으로</NextButton >
        </ClickerGameBackground>
    );

}

export default ClickerGameChapter01_1;