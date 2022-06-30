import React, { useReducer } from "react";

function reducer(state, action) {
  return {
    // 객체 하나 리턴
    ...state,
    [action.name]: action.value,
  };
}

const MultipleInputUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    //처음 객체 상태
    name: "",
    nickname: "",
  });

  const { name, nickname } = state; // 객체 비구조화

  const handleChange = (e) => {
    dispatch(e.target); // 현재 이벤트가 발생한걸 가지고 dispatch함
  };

  return (
    <div>
      <input
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="name"
      ></input>
      <input
        name="nickname"
        value={nickname}
        onChange={handleChange}
        placeholder="nickname"
      ></input>
      <br></br>
      <b>이름 : {name}</b>
      <br></br>
      <b>별명 : {nickname}</b>
    </div>
  );
};

export default MultipleInputUseReducer;
