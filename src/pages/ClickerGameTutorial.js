import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PageHeader1 from '../components/PageHeader1';
import { Main } from '../styles/ClickerGameMainStyles';
import TutorialStep1 from './ClickerGameTutorialStep1';
import TutorialStep2 from './ClickerGameTutorialStep2';
import TutorialStep3 from './ClickerGameTutorialStep3';
import TutorialStep4 from './ClickerGameTutorialStep4';
import TutorialStep5 from './ClickerGameTutorialStep5';


const ClickerGameTutorial = () => {
    const { id } = useParams(); // URL의 id 파라미터 가져오기
    const navigate = useNavigate();

    const handleNextClick = () => {
        const nextId = parseInt(id, 10) + 1;

        if (nextId <= 5) {
            navigate(`/ClickerGameTutorial/${nextId}`); // 다음 페이지로 이동
        } else {
            navigate('/ClickerGameMain'); // 튜토리얼 종료 후 메인 페이지로 이동
        }
    };

    const renderContent = () => {
        if (id === '1') return <TutorialStep1 onNext={handleNextClick} />;
        if (id === '2') return <TutorialStep2 onNext={handleNextClick} />;
        if (id === '3') return <TutorialStep3 onNext={handleNextClick} />;
        if (id === '4') return <TutorialStep4 onNext={handleNextClick} />;
        if (id === '5') return <TutorialStep5 onNext={handleNextClick} />;

    };

    return (

        <Main>
            <PageHeader1 initialVisibility={false} />
            {renderContent()}
        </Main>
    );
};


export default ClickerGameTutorial;