import React, { useState } from 'react';
import '../App.css';

const UseState = () => {
  const [message, setMessage] = useState(''); // 빈 문자열로 메시지 값을 선언
  const onEnter = () => setMessage('안녕하세요');
  const onExit = () => setMessage('안녕히 가세요');

  const [number, setNumber] = useState(0);
  const onIncrease = () => {
    setNumber(++number);
  };

  const onDecrease = () => {
    setNumber(number - 1);
  };

  const [color, setColor] = useState('black');
  const onClickRed = () => {
    setColor('red');
  };

  return (
    <div>
      <button onClick={onEnter}>입장</button>
      <button onClick={onExit}>퇴장</button>
      <h1>{message}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <h1>{number}</h1>

      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={onClickRed}>
        빨간색
      </button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        초록색
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        파란색
      </button>

      <br></br>
    </div>
  );
};

export default UseState;
