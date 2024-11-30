import React, { useState, useEffect } from 'react';
import { ReactTyped } from "react-typed";
import { ClickerGameBackground, ClickerGameMessage, NextButton } from '../styles/ClickerGameMainStyles';
import Background1 from '../assets/images/ClickerGameImages/ClickerGameTutorialBGI4.png';
import Background2 from '../assets/images/ClickerGameImages/ClickerGameTutorialBGI5.png';
import Image1 from '../assets/images/ClickerGameImages/ClickerGameBreadItem1.png';
import Image2 from '../assets/images/ClickerGameImages/ClickerGameBreadItem2.png';
import Image3 from '../assets/images/ClickerGameImages/ClickerGameBreadItem3.png';
import Image4 from '../assets/images/ClickerGameImages/ClickerGameBreadItem4.png';
const TutorialStep3 = ({ onNext }) => {

    const [backgroundImage, setBackgroundImage] = useState(Background1); // 초기 배경 이미지 설정
    const [imagesToShow, setImagesToShow] = useState([]); // 중앙에 표시할 이미지를 관리

    useEffect(() => {
        // 3초 후 배경 변경
        const timer1 = setTimeout(() => {
            setBackgroundImage(Background2); // 배경 이미지 변경
        }, 3000);

        // 5초부터 0.5초 간격으로 이미지 4개 중앙에 가로로 나열
        const images = [Image1, Image2, Image3, Image4];

        const timer2 = setTimeout(() => {
            let index = 0; // index를 setInterval 내부에서만 관리
            const interval = setInterval(() => {
                setImagesToShow((prevImages) => {
                    if (index < images.length) {
                        return [...prevImages, images[index++]];
                    } else {
                        clearInterval(interval); // 모든 이미지를 추가한 후 정지
                        return prevImages; // 더 이상 업데이트하지 않음
                    }
                });
            }, 500);
        }, 5000);

        // 컴포넌트 언마운트 시 타이머 클리어
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    return (
        <ClickerGameBackground bgImage={backgroundImage}>

            <div
                style={{
                    position: "absolute",
                    top: "40%", // 세로 위치 중앙
                    left: "50%", // 가로 위치 중앙
                    transform: "translate(-50%, -50%)", // 요소 중심점 이동
                    display: "flex", // 가로로 나열
                    gap: "30px", // 이미지 간격
                    zIndex: 10,
                }}
            >
                {imagesToShow.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Bread ${index + 1}`}
                        style={{
                            width: "150px", // 이미지 크기 조정
                            height: "auto", // 비율 유지
                        }}
                    />
                ))}
            </div>

            <ClickerGameMessage>
                <ReactTyped
                    strings={[
                        "첫번째 신비의 오븐은 고대 이집트의 피라미드 내부에 위치해 있다는 사실도 적혀있었습니다.",
                        "이 신비의 오븐은 당신이 만지면 빵을 구워냅니다."
                    ]}
                    typeSpeed={40}
                    loop={false}
                />
            </ClickerGameMessage>
            <NextButton onClick={onNext}>다음으로</NextButton >
        </ClickerGameBackground>
    );

}

export default TutorialStep3;