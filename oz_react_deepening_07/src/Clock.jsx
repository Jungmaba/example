import { useEffect, useState } from 'react';

/**
 * Clock 컴포넌트
 *
 * 실시간 시계를 표시하고 사용자가 시계를 시작하거나 정지할 수 있는 React 함수형 컴포넌트입니다.
 * 시간은 "시", "분", "초"로 나뉘어 표시됩니다.
 *
 * 주요 기능:
 * - 현재 시간을 "HH:mm:ss" 형식으로 표시합니다.
 * - 시계가 실행 중일 때 매초마다 시간을 업데이트합니다.
 **/
function Clock() {
  const today = new Date();
  // const dateFormatted = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

  const [time, setTime] = useState(new Date());
  const [stop, setStop] = useState(false);

  useEffect(() => {
    if (stop) return;
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, [stop]);

  const handleTimerToggle = () => {
    setStop((prev) => !prev);
  };

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const date = String(today.getDate()).padStart(2, '0');
  const hour = String(today.getHours()).padStart(2, '0');
  const minute = String(today.getMinutes()).padStart(2, '0');
  const second = String(today.getSeconds()).padStart(2, '0');
  // const fullString = `${year}/${month}/${date} ${hour}:${minute}:${second}`;
  // const chars = fullString.split("");

  const dateString = `${year}/${month}/${date}`;
  const timeString = `${hour}:${minute}:${second}`;

  return (
    <>
      <div className="timer-container">
        <div className="dateLine">
          {dateString.split('').map((char, index) => (
            <span key={index} className="digit">
              {char}
            </span>
          ))}
        </div>
        <div className="timeLine">
          {timeString.split('').map((char, index) => (
            <span key={index} className="digit">
              {char}
            </span>
          ))}
        </div>
      </div>
      <div>
        <button onClick={() => handleTimerToggle()}> {stop ? '타이머 시작' : '타이머 중지'} </button>
      </div>
    </>
  );
}

export default Clock;
