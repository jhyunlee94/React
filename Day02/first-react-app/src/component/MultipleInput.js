import React, { useState } from 'react';

function MultipleInput() {
  const [form, setForm] = useState({
    // username, message를 가진 객체로 만듬
    username: '',
    message: '',
  });

  //form이 객체여서 비구조화할당을 사용하여 username, message로 분리
  const { username, message } = form;

  //onChange 이벤트에 할당될 함수 정의
  const handleChange = (e) => {
    const nextForm = {
      // nextForm 객체 생성
      ...form, // 기존의 form 복사
      //username:'',
      //message: '',
      [e.target.name]: e.target.value,
      //username: 'gogi'
    };
    setForm(nextForm); // 기존 폼을 새로운 폼으로 덮어 씀
  };

  // input이 늘어나면 onChange 이벤트에 할당할 함수를 계속 생성해야됨
  // const [message, setMessage] = useState('');
  // const [username, setUsername] = useState(''); // 빈 문자열 초기값

  // const onClick = () => {
  //   alert(message + '맞냐??');
  //   setMessage('');
  // };

  // const changeMessage = (e) => {
  //   setMessage(e.target.value);
  //   console.log(e.target.value);
  // };

  // const changeUserName = (e) => {
  //   setUsername(e.target.value);
  //   console.log(e.target.value);
  // };

  const handleClick = (e) => {
    alert(username + ' : ' + message);
    setForm({
      username: '',
      message: '',
    });
  };
  return (
    <div>
      EventPractice
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        onChange={handleChange}
        value={username}
      ></input>
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

export default MultipleInput;
