import React, { useState, useEffect, createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader1 from '../components/PageHeader1';
import { Main, Center, TutorialButton } from '../styles/ClickerGameMainStyles';
import Chapters from './ClickerGameManageChapter';

export const ChapterManageContext = createContext({
    images: [],
    setImages: () => { }
});

export const ChapterManageProvider = ({ children }) => {
    const [images, setImages] = useState(Array(5).fill(false)); // 상태 관리

    return (
        <ChapterManageContext.Provider value={{ images, setImages }}>
            {children}
        </ChapterManageContext.Provider>
    );
};


const ClickerGame = () => {
    const navigate = useNavigate();
    const [isTutorialClicked, setIsTutorialClicked] = useState(false);
    const { images, setImages } = useContext(ChapterManageContext); // Context 가져오기


    // 세션 스토리지에서 데이터 로드
    useEffect(() => {
        const storedTutorialState = sessionStorage.getItem('isTutorialClicked');
        setIsTutorialClicked(storedTutorialState === 'true');

        const storedImagesState = sessionStorage.getItem('images');
        if (storedImagesState) {
            setImages(JSON.parse(storedImagesState));
        }
    }, []);

    useEffect(() => {
        sessionStorage.setItem('images', JSON.stringify(images));
    }, [images]);

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