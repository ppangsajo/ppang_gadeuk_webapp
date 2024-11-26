import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import MainScreen from '../pages/MainScreen';
import KakaoMap from '../pages/KakaoMap';
import BakingClass from '../pages/BakingClass';
import ClickerGame from '../pages/ClickerGameMain';
import NotFound from "../pages/NotFound";
import { GlobalStyle } from '../styles/GlobalStyle';

//React Router는 SPA(Single Page Application)의 화면 렌더링을 구현하는 데 도움을 주는 라이브러리. 
//즉, 페이지 전체를 새로고침하지 않고 url의 변경에 따라 컴포넌트를 동적으로 렌더링하여 SPA의 핵심적인 기능을 제공.

//아래의 Router컴포넌트: 애플리케이션의 라우팅을 관리하며, 정의된 경로에 따라 적절한 컴포넌트를 렌더링해주는 컴포넌트 
function Router() {
    return (
        <BrowserRouter>
            {/* BrowserRouter는 리액트 애플리케이션에서 클라이언트 측 라우팅을 관리하는 최상위 컴포넌트. a 태그와는 달리 url의 변화에  따른 페이지의 새로고침 과정이 없기때문에 사용자가 쉽고 부드럽게 웹앱을 사용할 수 있도록 도움. 그 하위에 있는 모든 라우팅 관련 컴포넌트(Routes, Route 등)를 감싸줌. 브라우저의 History API를 사용하여 URL을 관리하고 URL 변경을 감지하는 컴포넌트.*/}

            {/* Routes 컴포넌트는 여러 Route 컴포넌트를 감싸는 형태.
             Link URL이 변경될 때 Routes는 하위에 정의된 Route들 중에서 현재 URL과 일치하는 첫 번째 경로를 찾아 해당 컴포넌트를 App.js의 <div className='div-App'> 안에 렌더링*/}

            {/* path 속성으로 URL 경로를 설정하고, component 속성으로 해당 경로에서 렌더링할 컴포넌트를 지정.
            "/"는 애플리케이션의 루트 경로.*/}

            {/*  전체적인 workflow=> BrowserRouter 컴포넌트는 URL 변경을 감지하고 -> Routes컴포넌트는 변경된 url에 맞는 Route컴포넌트를 찾아서 해당 Route컴포넌트의 element 속성값인 컴포넌트를 렌더링 시켜줌*/}
            {/*<BodyStyleUpdater /> */}
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<MainScreen />} />
                <Route path="/Map" element={<KakaoMap />} />
                <Route path="/ClickerGameMain" element={<ClickerGame />} />
                <Route path="/BakingClass" element={<BakingClass />} />
                {/*<Route path="/Recipe" component={Recipe} />} */}
                <Route path="*" element={<NotFound />} />
                {/*정의되지 않은 경로로 접근하려는 경우 보여줄 컴포넌트*/}
            </Routes>
        </BrowserRouter>
    );
}

// /*-----------------------------------*/

// /*BodyStyleUpdater 컴포넌트:
//  React Router로 인해 변경되는 현재 URL 경로에 따라서 body의 CSS 클래스를 동적으로 설정하는 역할*/
// const BodyStyleUpdater = () => {
//     const location = useLocation();//React Router의 훅으로, 이 useLocation 훅을 사용하여 현재 URL 경로를 가져옴. 이를 통해 사용자가 현재 어떤 경로에 있는지 파악가능.

//     useEffect(() => {//useEffect: React의 훅으로, 컴포넌트가 렌더링될때마다 특정 작업(side-effect)을 수행할 수 있도록 하는 훅.

//         switch (location.pathname) {//location.pathname: 현재 경로. 

//             //이를 통해 현재 경로에 따라 body 태그의 className을 해당 해당 인수값으로 동적으로 할당 -> 이를 통해 각 경로에따라 body에 서로다른 스타일을 적용시킬 수 있음. 
//             case '/':
//                 document.body.classList.add('body-MainScreen');
//                 break;
//             case '/Map':
//                 document.body.classList.add('body-Map');
//                 break;
//             case '/ClickerGame':
//                 document.body.classList.add('body-ClickerGame');
//                 break;
//             case '/BakingClass':
//                 document.body.classList.add('body-BakingClass');
//                 break;
//             default:
//                 document.body.classList.add('body-NotFound');
//                 break;
//         }

//         // cleanup(뒷정리 함수): 컴포넌트가 언마운트되거나, useEffect의 종속성 배열에 있는 값이 변경될 때 실행되는,컴포넌트의 상태를 정리할때 사용되는 함수.

//         return () => {//cleanup 함수를 사용하여 컴포넌트가 언마운트될 때, 이전에 설정한 body의 className을 제거

//             document.body.className = ''; // body 태그의 클래스 프로퍼티값 초기화.다른 경로로 이동할 때 불필요한 클래스가 남지 않도록 함.
//         };
//     }, [location.pathname]); // useEffect의 2번째 인수는 종속성배열이다. 종속성배열은 useEffect가 의존하는 변수들의 목록으로,이 배열에 포함된 값이 변경될 때마다 useEffect 훅이 재실행된다. 여기서는 location.pathname 즉 현재경로가 변경될 때마다 useEffect가 실행된다. => 이로인해 현재경로가 변경될때마다 useEffect가 재실행되면서 현재 경로에 맞는 body의 클래스가 설정되고, useEffect가 실행되었으니 cleanup함수가 실행되면서 이전에 설정한 클래스는 초기화되는 효과도 얻을 수 있는 것이다. 이로써 useEffect를 활용한 동적인 body style 구현완료.

//     return null;
// }
export default Router;