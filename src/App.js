import React from 'react';
import KakaoMap from './KakaoMap'; // KakaoMap 컴포넌트 import
import './App.css'; // CSS 파일 import

function App() {
  return (
    /*컨테이너 안에 카카오맵 배치*/
    <div className='container'>
      <h1>🥖🍞🥐 가까운 빵집을 만나보세요! 🥐🍞🥖</h1>
      <KakaoMap /> {/* KakaoMap 컴포넌트 사용 */}
    </div>
  );
}

export default App;
