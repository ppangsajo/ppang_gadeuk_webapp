import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader1 from '../components/PageHeader1';
import { Main, Center, TutorialButton } from '../styles/ClickerGameMainStyles';
import Chapters from '../components/clickerGame/ClickerGameChapter';

const ClickerGame = () => {
    const navigate = useNavigate();
    const [isTutorialClicked, setIsTutorialClicked] = useState(false);

    useEffect(() => {
        const storedState = sessionStorage.getItem('isTutorialClicked');
        setIsTutorialClicked(storedState === 'true'); // 세션 스토리지에서 상태 가져오기
    }, []);

    const handleTutorialClick = () => {
        setIsTutorialClicked(true);
        sessionStorage.setItem('isTutorialClicked', 'true'); // 상태 저장
        navigate('/ClickerGameTutorial/1'); // 게임 튜토리얼 페이지로 이동
    };

    return (
        <Main>
            <PageHeader1 initialVisibility={false} />
            <Center>
                <TutorialButton onClick={handleTutorialClick} />
                <Chapters isTutorialClicked={isTutorialClicked} />
            </Center>
        </Main>
    );
};

export default ClickerGame;