import React, { useState, useEffect, createContext, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader1 from '../components/PageHeader1';
import { Main, Center, TutorialButton, UltimateBread, ResetButton } from '../styles/ClickerGameMainStyles';
import Chapters from './ClickerGameManageChapter';
import UltimateBreadPaperBag from '../assets/images/ClickerGameImages/ClickerGameUltimatePaperBagBlack.png';
import UltimateBreadShow from '../assets/images/ClickerGameImages/ClickerGameUltimateBread.png';

import useBgm from '../hooks/useBgm';

import mainBGM from '../assets/bgms/ClickerGameMainBgm.mp3'; // bgm 경로

export const ChapterManageContext = createContext({
    images: [],
    setImages: () => { },
    allChapterCleared: false,
    isAllChapterCleared: () => { }


});

export const ChapterManageProvider = ({ children }) => {
    const [images, setImages] = useState(Array(5).fill(false)); // 상태 관리
    const [allChapterCleared, isAllChapterCleared] = useState(false);

    return (
        <ChapterManageContext.Provider value={{ images, setImages, allChapterCleared, isAllChapterCleared }}>
            {children}
        </ChapterManageContext.Provider>
    );
};

const ClickerGame = () => {

    const navigate = useNavigate();
    const [isTutorialClicked, setIsTutorialClicked] = useState(false);
    const { images, setImages, allChapterCleared, isAllChapterCleared } = useContext(ChapterManageContext); // Context 가져오기

    useBgm(mainBGM, 1, 2000); /// 배경음악 재생시점!! 수정해주세요

    // 세션 스토리지에서 데이터 로드
    useEffect(() => {

        const storedTutorialState = sessionStorage.getItem('isTutorialClicked');
        setIsTutorialClicked(storedTutorialState === 'true');

        const storedImagesState = sessionStorage.getItem('images');
        if (storedImagesState) {
            setImages(JSON.parse(storedImagesState));
        }

        const storedAllClearState = sessionStorage.getItem('allChapterCleared');
        isAllChapterCleared(storedAllClearState === 'true')


    }, []);

    useEffect(() => {
        sessionStorage.setItem('images', JSON.stringify(images));
    }, [images]);

    useEffect(() => {
        sessionStorage.setItem('allChapterCleared', (allChapterCleared));
    }, [allChapterCleared]);


    const handleTutorialClick = () => {
        setIsTutorialClicked(true);
        sessionStorage.setItem('isTutorialClicked', 'true'); // 상태 저장
        navigate('/ClickerGameTutorial/1'); // 게임 튜토리얼 페이지로 이동
    };

    const CheckCompleteChapters = () => {

        if (allChapterCleared) {

            alert("궁극의 빵을 완성하였습니다!\n초기화 버튼을 눌러 처음부터 다시 진행할 수 있습니다!");
        }
        else {

            alert("모든 챕터를 완료하면, 궁극의 빵을 완성할 수 있습니다!");
        }
    }

    const handleReset = () => {
        // 세션 스토리지 초기화
        sessionStorage.clear();
        setImages(Array(5).fill(false)); // 이미지 상태 초기화
        isAllChapterCleared(false)  // 마지막 챕터 완료 여부 초기화
        setIsTutorialClicked(false) // 튜토리얼 완료 여부 초기화
        alert('게임이 초기화되었습니다.');
    };

    return (
        <Main>
            <PageHeader1 initialVisibility={false} />
            <Center>
                <TutorialButton onClick={handleTutorialClick} />

                <Chapters isTutorialClicked={isTutorialClicked} />

            </Center>

            <UltimateBread
                src={allChapterCleared ? UltimateBreadShow : UltimateBreadPaperBag}
                alt={`궁극의 빵`}
                onClick={() => CheckCompleteChapters()} // 클릭 이벤트 추가
            />
            <ResetButton onClick={handleReset}>초기화</ResetButton>

        </Main>
    );
};

export default ClickerGame;