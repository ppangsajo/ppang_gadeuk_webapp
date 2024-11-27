import React, { useState, useEffect } from 'react';
import { ReactTyped } from "react-typed";
import { TutorialBackground, TutorialMessage, NextButton } from '../styles/ClickerGameMainStyles';
import Background from '../assets/images/ClickerGameTutorialBGI6.png';
import Image1 from '../assets/images/ClickerGameChapterIconColor.png';
import Image2 from '../assets/images/ClickerGameChapterIconBlack.png';

const TutorialStep4 = ({ onNext }) => {
    const [imagesToShow, setImagesToShow] = useState([]); // 화면에 표시할 이미지 배열

    useEffect(() => {

        // 2.5초 후 첫 번째 이미지 추가
        const timer1 = setTimeout(() => {
            setImagesToShow((prev) => [...prev, Image1]); // 기존 배열에 Image1 추가
        }, 2500);

        // 3.5초 후 두 번째 이미지 추가
        const timer2 = setTimeout(() => {
            setImagesToShow((prev) => [...prev, Image2]); // 기존 배열에 Image2 추가
        }, 3500);

        // 컴포넌트 언마운트 시 타이머 클리어
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    return (
        <TutorialBackground bgImage={Background}>
            <div
                style={{
                    position: "absolute",
                    top: "40%", // 부모 요소 기준으로 세로 중앙
                    left: "50%", // 부모 요소 기준으로 가로 중앙
                    transform: "translate(-50%, -50%)", // 요소 중심점 이동
                    display: "flex", // 가로로 나열
                    gap: "20px", // 이미지 간 간격
                    zIndex: 10,
                }}
            >
                {imagesToShow.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Tutorial ${index + 1}`}
                        style={{
                            width: "180px", // 이미지 크기
                            height: "auto", // 비율 유지
                        }}
                    />
                ))}
            </div>

            <TutorialMessage>
                <ReactTyped
                    strings={[
                        "각 빵에는 그 지역의 역사와 문화가 깃들어 있으며,",
                        "'빵의 지혜' 하나와 다음 '빵의 지혜'를 찾을 수 있는 힌트를 제공합니다."
                    ]}
                    typeSpeed={40}
                    loop={false}
                />
            </TutorialMessage>
            <NextButton onClick={onNext}>다음으로</NextButton>
        </TutorialBackground>
    );
};

export default TutorialStep4;