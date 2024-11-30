import React, { useState, useEffect, useContext } from 'react';
import { ReactTyped } from "react-typed";
import { ClickerGameBackground, ClickerGameMessage, NextButton } from '../styles/ClickerGameMainStyles';
import { ChapterManageContext } from './ClickerGameMain';
import Background from '../assets/images/ClickerGameImages/ClickerGameTutorialBGI5.png';
import Image1 from '../assets/images/ClickerGameImages/ClickerGamePaper.png';
import Image2 from '../assets/images/ClickerGameImages/ClickerGamePaperCh01.png';


const ClickerGameChapter01_7 = ({ onNext }) => {

    const { setImages } = useContext(ChapterManageContext); // Context 가져오기

    const [isIndicateTextVisible, setIsIndicateTextVisible] = useState(false);
    const [currentImage, setCurrentImage] = useState(Image1); // 초기 이미지는 Image1
    const [imageSize, setImageSize] = useState("20%"); // 초기 크기 설정
    const [transitionEnabled, setTransitionEnabled] = useState(true); // 애니메이션 활성화 상태

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setIsIndicateTextVisible(true);
        }, 3500);

        // 3초 동안 이미지 크기를 점진적으로 증가
        const timer2 = setTimeout(() => {
            setImageSize("60%");
        }, 0);

        const timer3 = setTimeout(() => {
            setTransitionEnabled(false);
            setCurrentImage(Image2);

        }, 3000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);

    const handleNext = () => {

        // Context 상태 업데이트
        setImages((prevImages) => {
            const updatedImages = [...prevImages];
            updatedImages[1] = true; // 다음 챕터 이미지와 기능을 활성화
            sessionStorage.setItem('images', JSON.stringify(updatedImages));
            return updatedImages;
        });


        onNext();
    };



    return (
        <ClickerGameBackground bgImage={Background}>
            {isIndicateTextVisible && (
                <ClickerGameMessage>
                    <ReactTyped
                        strings={[
                            "종이쪽지에 '그리스의 Clean Monday' 라는 문구가 보입니다.",
                            "다음 지혜의 조각을 찾기 위해 그리스로 이동하세요!",
                        ]}
                        typeSpeed={40}
                        loop={false}
                    />
                </ClickerGameMessage>
            )}

            {isIndicateTextVisible && (<NextButton onClick={handleNext}>메인으로</NextButton >)}

            <img
                src={currentImage}
                alt="Bread"
                style={{
                    position: "absolute",
                    top: "50%", // 화면 세로 중앙
                    left: "50%", // 화면 가로 중앙
                    transform: "translate(-50%, -50%)", // 중심점 기준으로 이동
                    width: imageSize, // 상태에 따라 크기 변경
                    height: "auto",
                    zIndex: 3,
                    transition: transitionEnabled ? "width 3s ease-in-out" : "none", // 애니메이션 제어
                }}
            />
        </ClickerGameBackground>
    );
};

export default ClickerGameChapter01_7;