import React, { useEffect } from 'react';

//사용자가 잘못된 경로로 접근했을 때, 존재하지 않는 페이지에 접근했을 때 보여줄 컴포넌트
const NotFound = () => {

    //body 색상 설정.
    useEffect(() => {
        document.body.className = 'body-NotFound';
        return () => {
            document.body.className = '';
        };
    }, []);

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 64,
                position: "absolute",
                width: "100%",
                height: "100%",
            }}
        >
            404: Path Not Found
        </div>
    );

};

export default NotFound;