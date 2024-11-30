import React from 'react';
import { ReactTyped } from "react-typed";
import { ClickerGameBackground, ClickerGameMessage, NextButton } from '../styles/ClickerGameMainStyles';
import Background from '../assets/images/ClickerGameImages/ClickerGameTutorialBGI1.png';

const TutorialStep1 = ({ onNext }) => {

    return (
        <ClickerGameBackground bgImage={Background}>

            <ClickerGameMessage>
                <ReactTyped
                    strings={[
                        "당신은 세계적인 제빵 대회에서 우승한 유망한 제빵사입니다.",
                        "어느날, 당신은 증조할아버지가 남긴 오래된 제빵 노트를 발견합니다."
                    ]}
                    typeSpeed={40}
                    loop={false}
                />
            </ClickerGameMessage>
            <NextButton onClick={onNext}>다음으로</NextButton >
        </ClickerGameBackground>
    );

}

export default TutorialStep1;