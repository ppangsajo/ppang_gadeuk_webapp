import { Header, Nav, Button } from '../styles/MainScreenStyles';
import { Link } from 'react-router-dom';
function PageHeader() {
  return (
    <Header>
      <Nav>
        {/* 버튼 클릭시 url 이 /~~ 으로 변경됨. 이후 이 url 변경을 Router.js 모듈의 BrowserRouter 컴포넌트가 감지하여 url에 따른 컴포넌트를 화면에 렌더링시켜줌*/}
        <Link to="/BakeryMap">
          <Button>근처 빵집 찾기</Button>
        </Link>
        <Link to="/ClickerGameMain">
          <Button>클리커 게임</Button>
        </Link>
        <Link to="/BakingClass">
          <Button>홈베이킹 클래스</Button>
        </Link>
      </Nav>
    </Header>
  );
}

export default PageHeader;
