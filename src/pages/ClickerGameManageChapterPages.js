import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PageHeader1 from '../components/PageHeader1';
import { Main } from '../styles/ClickerGameMainStyles';
import ClickerGameChapterContent1 from '../components/ClickerGame/ClickerGameChapterContent1';
import ClickerGameChapterContent2 from '../components/ClickerGame/ClickerGameChapterContent2';
import ClickerGameChapterContent3 from '../components/ClickerGame/ClickerGameChapterContent3';
import ClickerGameChapterContent4 from '../components/ClickerGame/ClickerGameChapterContent4';
import ClickerGameChapterContent5 from '../components/ClickerGame/ClickerGameChapterContent5';
import ClickerGameChapterContent6 from '../components/ClickerGame/ClickerGameChapterContent6';
import ClickerGameChapterContent7 from '../components/ClickerGame/ClickerGameChapterContent7';

import useBgm from '../hooks/useBgm';
import bgm1 from '../assets/bgms/Chapter1_egypt.mp3';
import bgm2 from '../assets/bgms/Chapter2_greece.mp3';
import bgm3 from '../assets/bgms/Chapter3_italia.mp3';
import bgm4 from '../assets/bgms/Chapter4_france.mp3';
import bgm5 from '../assets/bgms/Chapter5_japan.mp3';

const ClickerGameChapter = () => {
    const { chapter, id } = useParams();
    const navigate = useNavigate();

    const ch01Title = ["Chapter 1<br />고대 이집트의 피라미드 내부"];

    const ch01Story1 = [
        "당신은 이제 고대 이집트의 피라미드 내부에 도착하였습니다.",
        "어두운 통로를 따라 한참을 헤매던 중, 빛 한줄기를 따라가다 신비로운 오븐을 발견합니다."
    ];
    const ch01Story2 = [
        "오븐이 작동하여 고대 이집트의 플랫브레드를 구워내었습니다.",
        "플랫브레드를 세번 클릭하여 반으로 쪼개세요.",

    ];
    const ch01Story3 = [

        "고대 이집트에서 최초로 발효빵이 만들어졌으며 이는 오늘날 빵의 시초로 여겨집니다.",
        "이집트인들은 우연히 발효된 밀가루 반죽이 더 부드럽고 풍미가 좋다는 것을 발견하게 되었고,",
        "이후 빵은 이집트인의 중요한 주식이 되었습니다.",
        "이 빵은 종종 파라오에게 바치는 공물로 사용되며, 이집트 문화에서 생명과 풍요의 상징으로 여겨졌습니다."
    ];

    const ch01Story4 = [
        "종이쪽지에 '그리스의 Clean Monday' 라는 문구가 보입니다.",
        "다음 지혜의 조각을 찾기 위해 그리스로 이동하세요!"
    ];

    const ch02Title = ["Chapter 2<br />그리스의 청명한 하늘 아래"];

    const ch02Story1 = [
        "그리스의 청명한 하늘 아래 Clean Monday가 찾아왔습니다.",
        "신성한 날, 특별한 빵을 구우며 평온함과 맑은 공기가 스며듭니다."
    ];
    const ch02Story2 = [

        "오븐이 작동하여 그리스의 라가나가 완성되었습니다.",
        "라가나를 세번 클릭하여 반으로 쪼개세요."

    ];
    const ch02Story3 = [

        "라가나는 Clean Monday에 먹는 빵으로, 그리스의 오래된 전통을 지니고 있습니다.",
        "Clean Monday는 그리스 정교회의 절기로,",
        "이 날에는 육식을 피하고 간단한 빵과 채소를 먹으며 순결함과 신성한 정화를 기념합니다.",
        "라가나는 고대 그리스 문화와 종교적 신앙의 일부로 자리 잡고 있습니다."
    ];

    const ch02Story4 = [
        "종이쪽지에 ‘이탈리아’ 라는 문구가 보입니다.",
        "다음 지혜의 조각을 찾기 위해 이탈리아로 이동하세요!"
    ];

    const ch03Title = ["Chapter 3<br />이탈리아의 올리브나무 숲 근처"];

    const ch03Story1 = [
        "이탈리아의 올리브나무 숲 근처에 있는 전통 오븐을 발견했습니다.",
        "오래된 돌과 올리브 향이 어우러져 고요한 분위기를 자아냅니다."
    ];
    const ch03Story2 = [

        "오븐이 작동하여 이탈리아의 포카치아가 완성되었습니다.",
        "포카치아를 세번 클릭하여 반으로 쪼개세요."

    ];
    const ch03Story3 = [

        "포카치아는 로마 제국 시절에 시작된 빵으로, 간단한 밀가루 반죽과 올리브유, 소금으로 구워냅니다. ",
        "이 빵은 이탈리아 가정마다 독특한 맛과 재료를 추가해 개성을 표현하는 음식으로 발전했습니다.",
        "이탈리아에서는 가족과 함께 포카치아를 나누며 환대와 사랑을 나누는 전통이 이어집니다."
    ];

    const ch03Story4 = [
        "종이쪽지에 ‘프랑스’ 라는 문구가 보입니다.",
        "다음 지혜의 조각을 찾기 위해 프랑스로 이동하세요!"
    ];

    const ch04Title = ["Chapter 4<br />프랑스의 베이커리 폐공장"];

    const ch04Story1 = [
        "프랑스에 도착해 거리를 걸어다니던 당신은 빛이 뿜어져 나오는 베이커리 폐공장을 발견합니다",
        "그 폐공장에서 당신은 신비의 오븐을 발견합니다."
    ];
    const ch04Story2 = [

        "오븐이 작동하여 프랑스의 바게트가 완성되었습니다.",
        "바게트를 세번 클릭하여 반으로 쪼개세요."

    ];
    const ch04Story3 = [

        "프랑스에서 바게트는 매일 아침 구입하는 필수 빵으로 사랑받고 있습니다.",
        "나폴레옹 시대에는 병사들이 바게트를 휴대하기 쉽게 길고 얇게 만들었다는 이야기가 전해집니다.",
        "바게트는 프랑스의 자부심을 상징하는 빵으로, 프랑스 문화에서 빼놓을 수 없는 존재입니다."
    ];

    const ch04Story4 = [
        "종이쪽지에 ‘일본’ 라는 문구가 보입니다.",
        "마지막 지혜의 조각을 찾기 위해 일본으로 이동하세요!"
    ];

    const ch05Title = ["Chapter 5<br />일본의 비밀스러운 찻집"];

    const ch05Story1 = [
        "일본의 비밀스러운 찻집 안쪽, 대나무 숲을 배경으로 한 전통 오븐이 고요하게 기다리고 있습니다.",
        "오븐에는 오래된 비밀을 간직한 듯한 느낌이 스며있습니다."
    ];
    const ch05Story2 = [

        "오븐이 작동하여 일본의 앙팡이 완성되었습니다.",
        "앙팡을 세번 클릭하여 반으로 쪼개세요."

    ];
    const ch05Story3 = [

        "앙팡은 메이지 시대에 서양의 빵 문화가 전해지며 일본에서 만들어진 서양식 빵입니다.",
        "일본인들은 서양의 빵을 자국의 식문화에 맞게 재해석하여 팥소를 넣은 앙팡을 만들었습니다.",
        "이 빵은 서양과 일본의 조화를 상징하며, 일본의 독특한 음식 문화로 자리 잡았습니다."
    ];

    const ch05Story4 = [
        "종이쪽지에 시작의 장소로 돌아가라는 말이 적혀있습니다.",
        "처음으로 이동하세요!"
    ];

    let bgmPath;

    switch (chapter) { // chapter에 따라 bgm경로 변경하여 챕터마다 브금 다르게 설정
        case '1':
            bgmPath = bgm1;
            break;
        case '2':
            bgmPath = bgm2;
            break;
        case '3':
            bgmPath = bgm3;
            break;
        case '4':
            bgmPath = bgm4;
            break;
        case '5':
            bgmPath = bgm5;
            break;
        default:
            bgmPath = bgm1; 
            break;
    }

    useBgm(bgmPath, 1, 2000);

    const handleNextClick = () => {
        const nextId = parseInt(id, 10) + 1;

        if (nextId <= 7) {
            navigate(`/ClickerGameChapter/${chapter}/${nextId}`);
        } else {
            navigate('/ClickerGameMain');
        }
    };

    useBgm(bgm1, 1, 2000);
    const renderContent = () => {
        switch (chapter) {
            case '1':
                if (id === '1') return <ClickerGameChapterContent1 index={1} title={ch01Title} story={ch01Story1} onNext={handleNextClick} />;
                if (id === '2') return <ClickerGameChapterContent2 index={1} onNext={handleNextClick} />;
                if (id === '3') return <ClickerGameChapterContent3 index={1} story={ch01Story2} onNext={handleNextClick} />;
                if (id === '4') return <ClickerGameChapterContent4 index={1} onNext={handleNextClick} />;
                if (id === '5') return <ClickerGameChapterContent5 index={1} story={ch01Story3} onNext={handleNextClick} />;
                if (id === '6') return <ClickerGameChapterContent6 index={1} onNext={handleNextClick} />;
                if (id === '7') return <ClickerGameChapterContent7 index={1} story={ch01Story4} onNext={handleNextClick} />;
                break;
            case '2':
                if (id === '1') return <ClickerGameChapterContent1 index={2} title={ch02Title} story={ch02Story1} onNext={handleNextClick} />;
                if (id === '2') return <ClickerGameChapterContent2 index={2} onNext={handleNextClick} />;
                if (id === '3') return <ClickerGameChapterContent3 index={2} story={ch02Story2} onNext={handleNextClick} />;
                if (id === '4') return <ClickerGameChapterContent4 index={2} onNext={handleNextClick} />;
                if (id === '5') return <ClickerGameChapterContent5 index={2} story={ch02Story3} onNext={handleNextClick} />;
                if (id === '6') return <ClickerGameChapterContent6 index={2} onNext={handleNextClick} />;
                if (id === '7') return <ClickerGameChapterContent7 index={2} story={ch02Story4} onNext={handleNextClick} />;
                break;

            case '3':
                if (id === '1') return <ClickerGameChapterContent1 index={3} title={ch03Title} story={ch03Story1} onNext={handleNextClick} />;
                if (id === '2') return <ClickerGameChapterContent2 index={3} onNext={handleNextClick} />;
                if (id === '3') return <ClickerGameChapterContent3 index={3} story={ch03Story2} onNext={handleNextClick} />;
                if (id === '4') return <ClickerGameChapterContent4 index={3} onNext={handleNextClick} />;
                if (id === '5') return <ClickerGameChapterContent5 index={3} story={ch03Story3} onNext={handleNextClick} />;
                if (id === '6') return <ClickerGameChapterContent6 index={3} onNext={handleNextClick} />;
                if (id === '7') return <ClickerGameChapterContent7 index={3} story={ch03Story4} onNext={handleNextClick} />;
                break;

            case '4':
                if (id === '1') return <ClickerGameChapterContent1 index={4} title={ch04Title} story={ch04Story1} onNext={handleNextClick} />;
                if (id === '2') return <ClickerGameChapterContent2 index={4} onNext={handleNextClick} />;
                if (id === '3') return <ClickerGameChapterContent3 index={4} story={ch04Story2} onNext={handleNextClick} />;
                if (id === '4') return <ClickerGameChapterContent4 index={4} onNext={handleNextClick} />;
                if (id === '5') return <ClickerGameChapterContent5 index={4} story={ch04Story3} onNext={handleNextClick} />;
                if (id === '6') return <ClickerGameChapterContent6 index={4} onNext={handleNextClick} />;
                if (id === '7') return <ClickerGameChapterContent7 index={4} story={ch04Story4} onNext={handleNextClick} />;
                break;

            case '5':
                if (id === '1') return <ClickerGameChapterContent1 index={5} title={ch05Title} story={ch05Story1} onNext={handleNextClick} />;
                if (id === '2') return <ClickerGameChapterContent2 index={5} onNext={handleNextClick} />;
                if (id === '3') return <ClickerGameChapterContent3 index={5} story={ch05Story2} onNext={handleNextClick} />;
                if (id === '4') return <ClickerGameChapterContent4 index={5} onNext={handleNextClick} />;
                if (id === '5') return <ClickerGameChapterContent5 index={5} story={ch05Story3} onNext={handleNextClick} />;
                if (id === '6') return <ClickerGameChapterContent6 index={5} onNext={handleNextClick} />;
                if (id === '7') return <ClickerGameChapterContent7 index={5} story={ch05Story4} onNext={handleNextClick} />;
                break;
        }
    };

    return (

        <Main>
            <PageHeader1 initialVisibility={false} />
            {renderContent()}
        </Main>
    );
};

export default ClickerGameChapter;