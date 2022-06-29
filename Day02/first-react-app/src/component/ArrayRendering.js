import React, { useState } from 'react';

const ArrayRendering = () => {
  const [names, setNames] = useState([
    { id: 1, text: 'HTML' },
    { id: 2, text: 'CSS' },
    { id: 3, text: 'JQuery' },
    { id: 4, text: 'React' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState('5');
  // const names = ['HTML', 'CSS', 'JQuery', 'React'];

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleClick = (e) => {
    const nextName = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextName);
    setInputText('');
  };

  const onRemove = (id) => {
    // filter 함수를 사용해서 제거 기능 구현
    // name.id를 가져와서 현재 id 와 다른 애들만 name에 담아줄거예요
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };
  //배열의 map 함수를 이용하여 새로운 배열을 만들기
  const nameList = names.map((name) => (
    <li onDoubleClick={() => onRemove(name.id)} key={name.id}>
      {name.text}
    </li>
  ));
  //   const nameList = names.map((name, index) => <li key={index}>{name}</li>);

  return (
    <div>
      <ul>
        {/* <li>HTML</li>
        <li>CSS</li>
        <li>JQuery</li>
        <li>React</li> */}
        <input
          value={inputText}
          onChange={handleChange}
          placeholder="몰러"
        ></input>
        <button onClick={handleClick}>추가</button>
        {nameList}
      </ul>
    </div>
  );
};

export default ArrayRendering;
