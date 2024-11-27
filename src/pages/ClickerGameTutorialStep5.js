import React, { useState, useEffect } from 'react';
import { ReactTyped } from "react-typed";
import { TutorialBackground, TutorialMessage, NextButton } from '../styles/ClickerGameMainStyles';
import Background1 from '../assets/images/ClickerGameTutorialBGI7.png';
import Background2 from '../assets/images/ClickerGameTutorialBGI8.png';
import Image1 from '../assets/images/ClickerGameBreadWisdomAll.png';
import Image2 from '../assets/images/ClickerGameUltimateBread.png';

const TutorialStep4 = ({ onNext }) => {
    const [backgroundImage, setBackgroundImage] = useState(Background1); // 초기 배경 이미지 설정
    const [imagesToShow, setImagesToShow] = useState([]); // 표시할 이미지를 관리

    useEffect(() => {
        // 1초 후 배경 변경
        const timer1 = setTimeout(() => {
            setBackgroundImage(Background2);
        }, 1000);

        // 1.5초 후 첫 번째 이미지 추가
        const timer2 = setTimeout(() => {
            setImagesToShow((prev) => [...prev, Image1]);
        }, 1500);

        // 4초 후 두 번째 이미지 추가
        const timer3 = setTimeout(() => {
            setImagesToShow((prev) => [...prev, Image2]);
        }, 4000);

        // 컴포넌트 언마운트 시 타이머 클리어
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);
    return (
        <TutorialBackground bgImage={backgroundImage}>
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 10, // 이미지 컨테이너가 다른 요소 위에 위치
                }}
            >
                {imagesToShow.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Image ${index + 1}`}
                        style={{
                            position: "absolute", // 이미지를 겹치게 설정
                            top: "0", // 부모 컨테이너 기준으로 위치
                            left: "0",
                            transform: "translate(-50%, -50%)", // 부모의 중심으로 이동
                            width: "500px", // 이미지 크기 조정
                            height: "auto", // 비율 유지
                        }}
                    />
                ))}
            </div>
            <TutorialMessage>
                <ReactTyped
                    strings={[
                        "당신은 세계 각국을 여행하며 '빵의 지혜' 5개를 모으기 시작합니다.",
                        "모든 '빵의 지혜'를 모으고 '궁극의 빵'을 만들어주세요!"
                    ]}
                    typeSpeed={40}
                    loop={false}
                />
            </TutorialMessage>
            <NextButton onClick={onNext}>메인으로</NextButton>
        </TutorialBackground>
    );
};

export default TutorialStep4;