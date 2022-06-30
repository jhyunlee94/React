import React from "react";
import useInput from "./useInput";

const CustomHooks = () => {
  const [state, handleChange] = useInput({
    //처음 객체 상태
    name: "",
    nickname: "",
  });

  const { name, nickname } = state; // 객체 비구조화

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

export default CustomHooks;
