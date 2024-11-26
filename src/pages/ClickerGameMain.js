import React, { useState, useEffect } from 'react';
import PageHeader1 from '../components/PageHeader1';
import { Main, Center, TutorialButton } from '../styles/ClickerGameMainStyles';
import Chapters from '../components/clickerGame/ClickerGameChapter';

const ClickerGame = () => {
    const [isTutorialClicked, setIsTutorialClicked] = useState(false);

    useEffect(() => {
        const storedState = sessionStorage.getItem('isTutorialClicked');
        setIsTutorialClicked(storedState === 'true'); // 세션 스토리지에서 상태 가져오기
    }, []);

    const handleTutorialClick = () => {
        setIsTutorialClicked(true);
        sessionStorage.setItem('isTutorialClicked', 'true'); // 상태 저장
    };

    return (
        <Main>
            <PageHeader1 />
            <Center>
                <TutorialButton onClick={handleTutorialClick} />
                <Chapters isTutorialClicked={isTutorialClicked} />
            </Center>
        </Main>
    );
};

export default ClickerGame;