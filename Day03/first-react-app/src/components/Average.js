import React, { useState } from "react";

const getAverage = (numbers) => {
  console.log("평균 값 계산중...");
  if (numbers.length === 0) {
    return 0;
  }
  let sum = 0;
  numbers.forEach((element) => {
    sum += element;
  });
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState(""); // input에서 쓸 거

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const handleClick = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber(""); // 기존에 남아있던 number를 빈칸으로
  };

  return (
    <div>
      <input value={number} onChange={handleChange}></input>
      <button onClick={handleClick}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균 값: {getAverage(list)}</b>{" "}
        {/*리턴 값이 있으면 getAverage(list)로 사용 이벤트에서 매개변수를 넣어줄때는 () => getAverage(list)*/}
      </div>
    </div>
  );
};

export default Average;
