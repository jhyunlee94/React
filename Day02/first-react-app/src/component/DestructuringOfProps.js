import React from 'react';
import '../App.css';

const DestructuringOfProps = (props) => {
  const { name, tel, children } = props;
  return (
    <div>
      <p>안녕하세요. 제 이름은 {name}입니다.</p>
      <p>전화번호는 {tel}</p>
      <p>{children}</p>
    </div>
  );
};
DestructuringOfProps.defaultProps = {
  name: '기본이름',
  tel: '010-0000-1111',
};
export default DestructuringOfProps;
