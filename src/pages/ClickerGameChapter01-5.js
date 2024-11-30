import React, { useState, useEffect } from 'react';
import { ReactTyped } from "react-typed";
import { ClickerGameBackground, ClickerGameMessage } from '../styles/ClickerGameMainStyles';
import Background from '../assets/images/ClickerGameImages/ClickerGameTutorialBGI5.png';
import Image1 from '../assets/images/ClickerGameImages/ClickerGameBreadWisdomOne.png';
import Image2 from '../assets/images/ClickerGameImages/ClickerGameStroryBread1.png';

const ClickerGameChapter01_5 = ({ onNext }) => {
    const [isIndicateTextVisible, setIsIndicateTextVisible] = useState(false);
    const [currentImage, setCurrentImage] = useState(Image1); // 초기 이미지는 Image1
    const [imageSize, setImageSize] = useState("20%"); // 초기 크기 설정
    const [transitionEnabled, setTransitionEnabled] = useState(true); // 애니메이션 활성화 상태

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setIsIndicateTextVisible(true);
        }, 3500);

        const timer2 = setTimeout(() => {
            setIsIndicateTextVisible(false);
        }, 17500);

        // 3초 동안 이미지 크기를 점진적으로 증가
        const timer3 = setTimeout(() => {
            setImageSize("32%"); // 32%로 확대
        }, 0);

        // 3초 후 이미지를 Image2로 변경
        const timer4 = setTimeout(() => {
            setTransitionEnabled(false); // 애니메이션 비활성화
            setCurrentImage(Image2); // Image2로 변경
            setImageSize("36%"); // 36% 크기로 설정
        }, 3000);

        // 18초 후 이미지를 Image1로 변경
        const timer5 = setTimeout(() => {
            setCurrentImage(Image1); // Image1로 다시 변경
            setTransitionEnabled(true); // 애니메이션 활성화
        }, 18000);

        // 18.5초 이후 이미지를 다시 20% 크기로 축소
        const timer6 = setTimeout(() => {
            setImageSize("20%"); // 초기 크기로 축소
        }, 18500);

        const timer7 = setTimeout(() => {
            onNext();
        }, 21500)

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
            clearTimeout(timer5);
            clearTimeout(timer6);
            clearTimeout(timer7);
        };
    }, []);


    return (
        <ClickerGameBackground bgImage={Background}>
            {isIndicateTextVisible && (
                <ClickerGameMessage bgColor="rgba(0, 255, 0, 0.5)">
                    <ReactTyped
                        strings={[
                            "고대 이집트에서 최초로 발효빵이 만들어졌으며 이는 오늘날 빵의 시초로 여겨집니다.",
                            "이집트인들은 우연히 발효된 밀가루 반죽이 더 부드럽고 풍미가 좋다는 것을 발견하게 되었고,",
                            "이후 빵은 이집트인의 중요한 주식이 되었습니다.",
                            "이 빵은 종종 파라오에게 바치는 공물로 사용되며, 이집트 문화에서 생명과 풍요의 상징으로 여겨졌습니다."
                        ]}
                        typeSpeed={40}
                        loop={false}
                    />
                </ClickerGameMessage>
            )}

            <img
                src={currentImage} // 현재 이미지 (Image1 또는 Image2)
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

export default ClickerGameChapter01_5;