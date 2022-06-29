import React, { useState } from 'react';

function Test() {
  const [message, setMessage] = useState(''); // 빈 문자열로 메시지 값을 선언
  const onEnter = () => setMessage('안녕하세요');
  const onExit = () => setMessage('안녕히 가세요');
  return (
    <div>
      <button onClick={onEnter}>입장</button>
      <button onClick={onExit}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
}

export default Test;
