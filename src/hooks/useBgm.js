import { useEffect } from 'react'
import { Howl } from 'howler'; //Howler.js: 웹 브라우저에서 소리를 재생하기 위한 JavaScript 라이브러리. 다양한 오디오 형식 지원(mp3,wav, ogg ...), 간편한 API를 제공 -> 이거 이용해서 사운드 쉽게 제어할 수 있도록 도와줌

// 배경음악을 재생용 useBgm 커스텀 훅
//fadeoutTime : bgm의 재생시간이 끝나갈때쯤 서서히 사운드가 줄어드는 타이밍을 조절해주는 일종의 타이머 시간 설정. fadeoutTime이 0이면 서서히 줄이지 않고 바로 정지.
function useBgm(path, volume, fadeoutTime) {
    let bgm; //Howl 객체

    const bgmPlay = (path) => { // 해당 경로의 bgm 재생
        bgm = new Howl({ src: [path] }); // Howl: 사운드 객체. 소리를 재생하고 제어하기 위한 실질적인 도구
        bgm.volume(volume); // 볼륨 설정
        bgm.play(); // bgm 재생
    }

    const bgmStop = () => bgm.stop(); // bgm 정지

    useEffect(() => {
        bgmPlay(path); // 이 커스텀 훅 마운트될때(실행될 때) bgm 자동 로드&재생.

        // bgm.on('play', ...): Howler.js에서 제공하는 대표적인 이벤트 리스너. bgm 객체에서 'play' 이벤트가 발생했을 때, 즉 배경 음악이 재생되기 시작했을 때의 이벤트 리스너. 
        // 이 커스텀 훅에서의 play 이벤트 리스너의 콜백함수는 => 배경 음악이 재생되기 시작하면 setTimeout을 사용하여 페이드 아웃 효과를 설정하는 기능.

        // bgm.fade(volume, 0, foTime): 페이드 아웃 효과를 담당하는 Howler.js의 fade 메서드. foTime 이라는 시간동안 서서히 볼륨을 줄임. 현재 볼륨(volume)에서 -> 0으로 서서히 줄이도록 설정

        //((bgm.duration() - bgm.seek()) * 1000 - foTime)시간 후에 fadeout해주는 콜백함수 실행
        // bgm.duration(): bgm.duration()으로 음악의 전체 재생 시간
        // bgm.seek(): bgm의 현재 재생 중인 위치(몇분 몇초ms)

        // 이 전체 재생시간과 현재 재생 중인 위치의 time diff는 남은 재생 시간. 여기서의 timeDiff는 남은 재생시간. 이 timeDiff에 1000을 곱해서 밀리초 ms단위로 변환하고 여기에 foTime (페이드 아웃 시간)을 뺌 => 이 결과값이 바로 페이드 아웃 효과가 시작될 시간. 해당 결과값시간에 도달하면 bgm.fade() 함수를 실행하여 페이드 아웃 효과를 줌

        //즉, 이 코드는 음악이 재생되고 나서, 남은 재생 시간에서 페이드 아웃 시간을 뺀 만큼의 시간이 지난 후에 bgm.fade() 함수를 실행하여 페이드 아웃 효과를 주는 것

        bgm.on('play', () => {

            const foTime = fadeoutTime;

            setTimeout(
                () => bgm.fade(volume, 0, foTime),
                (bgm.duration() - bgm.seek()) * 1000 - foTime);

        });

        return bgmStop; // 이 훅 컴포넌트 언마운트될 때 bgm 정지.

    }, []);
}

export default useBgm;