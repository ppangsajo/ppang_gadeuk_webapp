import React, { useState, useEffect } from 'react';
import { ReactTyped } from "react-typed";
import { ClickerGameBackground, ClickerGameMessage, NextButton } from '../../styles/ClickerGameMainStyles';
import Ch01Background from '../../assets/images/ClickerGameImages/ClickerGameTutorialBGI4.png';
import Ch02Background from '../../assets/images/ClickerGameImages/ClickerGameCh02BGI1.png';
import Ch03Background from '../../assets/images/ClickerGameImages/ClickerGameCh03BGI1.png';
import Ch04Background from '../../assets/images/ClickerGameImages/ClickerGameCh04BGI1.png';
import Ch05Background from '../../assets/images/ClickerGameImages/ClickerGameCh05BGI1.png';


const ClickerGameChapterContent1 = ({ index, title, story, onNext }) => {

    const [isCenteredTextVisible, setIsCenteredTextVisible] = useState(true);

    let BackgroundImage;

    switch (index) {
        case 1: BackgroundImage = Ch01Background;
            break;
        case 2: BackgroundImage = Ch02Background;
            break;
        case 3: BackgroundImage = Ch03Background;
            break;
        case 4: BackgroundImage = Ch04Background;
            break;
        case 5: BackgroundImage = Ch05Background;
            break;

    }

    useEffect(() => {
        // 2.5초 후 텍스트 숨기기
        const timer = setTimeout(() => {
            setIsCenteredTextVisible(false);
        }, 2500);

        return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
    }, []);


    return (
        <ClickerGameBackground bgImage={BackgroundImage}>
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
                        strings={title}
                        typeSpeed={40}
                        loop={false}
                    />
                </div>
            )}
            <ClickerGameMessage>
                <ReactTyped
                    strings={story}
                    typeSpeed={40}
                    loop={false}
                />
            </ClickerGameMessage>
            <NextButton onClick={onNext}>다음으로</NextButton >
        </ClickerGameBackground>
    );

}

export default ClickerGameChapterContent1;