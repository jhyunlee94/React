import React, { useCallback, useMemo, useState } from "react";

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

const AverageUseCallback = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState(""); // input에서 쓸 거

  const handleChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const handleClick = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber(""); // 기존에 남아있던 number를 빈칸으로
    },
    [number, list] // 특정 값이 변경되었을 때
  );

  const avg = useMemo(() => getAverage(list), [list]);

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
        <b>평균 값: {avg}</b>{" "}
        {/*리턴 값이 있으면 getAverage(list)로 사용 이벤트에서 매개변수를 넣어줄때는 () => getAverage(list)*/}
      </div>
    </div>
  );
};

export default AverageUseCallback;
