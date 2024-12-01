import React, { useState, useEffect, useContext } from 'react';
import { ReactTyped } from "react-typed";
import { ClickerGameBackground, ClickerGameMessage, NextButton } from '../../styles/ClickerGameMainStyles';
import { ChapterManageContext } from '../../pages/ClickerGameMain';
import Ch01Background from '../../assets/images/ClickerGameImages/ClickerGameTutorialBGI5.png';
import Ch02Background from '../../assets/images/ClickerGameImages/ClickerGameCh02BGI2.png'
import Ch03Background from '../../assets/images/ClickerGameImages/ClickerGameCh03BGI2.png'
import Ch04Background from '../../assets/images/ClickerGameImages/ClickerGameCh04BGI2.png'
import Ch05Background from '../../assets/images/ClickerGameImages/ClickerGameCh05BGI2.png'
import Paper from '../../assets/images/ClickerGameImages/ClickerGamePaper.png';
import Ch01PaperWithHint from '../../assets/images/ClickerGameImages/ClickerGamePaperCh01.png';
import Ch02PaperWithHint from '../../assets/images/ClickerGameImages/ClickerGamePaperCh02.png';
import Ch03PaperWithHint from '../../assets/images/ClickerGameImages/ClickerGamePaperCh03.png';
import Ch04PaperWithHint from '../../assets/images/ClickerGameImages/ClickerGamePaperCh04.png';
import Ch05PaperWithHint from '../../assets/images/ClickerGameImages/ClickerGamePaperCh05.png';


const ClickerGameChapterContent7 = ({ index, story, onNext }) => {

    const { setImages } = useContext(ChapterManageContext); // Context 가져오기

    const [isIndicateTextVisible, setIsIndicateTextVisible] = useState(false);
    const [currentImage, setCurrentImage] = useState(Paper);
    const [imageSize, setImageSize] = useState("20%"); // 초기 크기 설정
    const [transitionEnabled, setTransitionEnabled] = useState(true); // 애니메이션 활성화 상태

    let BackgroundImage;
    let PaperWithHint;

    switch (index) {
        case 1:
            BackgroundImage = Ch01Background;
            PaperWithHint = Ch01PaperWithHint;
            break;
        case 2:
            BackgroundImage = Ch02Background;
            PaperWithHint = Ch02PaperWithHint

            break;
        case 3:
            BackgroundImage = Ch03Background;
            PaperWithHint = Ch03PaperWithHint

            break;
        case 4:
            BackgroundImage = Ch04Background;
            PaperWithHint = Ch04PaperWithHint

            break;
        case 5:
            BackgroundImage = Ch05Background;
            PaperWithHint = Ch05PaperWithHint

            break;

        default:
    }

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
            setCurrentImage(PaperWithHint);

        }, 3000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);

    const handleNext = () => {

        if (index < 5) {

            setImages((prevImages) => {


                const updatedImages = [...prevImages];
                for (let i = 0; i <= index; i++) {
                    updatedImages[i] = true;
                }
                sessionStorage.setItem('images', JSON.stringify(updatedImages));
                return updatedImages;

            });

        }
        else if (index == 5) {

            sessionStorage.setItem('allChapterCleared', 'true'); // 세션 스토리지에 저장
        }
        onNext();
    };

    return (
        <ClickerGameBackground bgImage={BackgroundImage}>
            {isIndicateTextVisible && (
                <ClickerGameMessage>
                    <ReactTyped
                        strings={story}
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

export default ClickerGameChapterContent7;