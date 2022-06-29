import React, { useState } from 'react';

function EventPractice() {
  const [message, setMessage] = useState('');

  //alert 창 띄워지고 input 이 내용이 없어지게
  const onClick = () => {
    alert(message + '맞냐??');
    setMessage('');
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
    console.log(e.target.value);
  };

  const handleClick = (e) => {
    alert(message + 'ㅇㅇ?');
    setMessage('');
  };
  return (
    <div>
      EventPractice
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력하세요"
        onChange={handleChange}
        value={message}
      ></input>
      <button onClick={handleClick}>확인</button>
    </div>
  );
}

export default EventPractice;
