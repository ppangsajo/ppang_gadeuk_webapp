import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PageHeader1 from '../components/PageHeader1';
import { Main } from '../styles/ClickerGameMainStyles';
import ClickerGameCh01_1 from './ClickerGameChapter01-1';
import ClickerGameCh01_2 from './ClickerGameChapter01-2';
import ClickerGameCh01_3 from './ClickerGameChapter01-3';
import ClickerGameCh01_4 from './ClickerGameChapter01-4';
import ClickerGameCh01_5 from './ClickerGameChapter01-5';
import ClickerGameCh01_6 from './ClickerGameChapter01-6';
import ClickerGameCh01_7 from './ClickerGameChapter01-7';

const ClickerGameChapter = () => {
    const { chapter, id } = useParams();
    const navigate = useNavigate();

    const handleNextClick = () => {
        const nextId = parseInt(id, 10) + 1;

        if (nextId <= 7) {
            navigate(`/ClickerGameChapter/${chapter}/${nextId}`);
        } else {
            navigate('/ClickerGameMain');
        }
    };

    const renderContent = () => {
        switch (chapter) {
            case '1':
                if (id === '1') return <ClickerGameCh01_1 onNext={handleNextClick} />;
                if (id === '2') return <ClickerGameCh01_2 onNext={handleNextClick} />;
                if (id === '3') return <ClickerGameCh01_3 onNext={handleNextClick} />;
                if (id === '4') return <ClickerGameCh01_4 onNext={handleNextClick} />;
                if (id === '5') return <ClickerGameCh01_5 onNext={handleNextClick} />;
                if (id === '6') return <ClickerGameCh01_6 onNext={handleNextClick} />;
                if (id === '7') return <ClickerGameCh01_7 onNext={handleNextClick} />;
                break;
            case '2':

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