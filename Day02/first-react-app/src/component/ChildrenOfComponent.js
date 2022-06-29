import React from 'react';
import '../App.css';

const ChildrenOfComponent = (props) => {
  return (
    <div>
      <p>안녕하세요. 제 이름은 {props.name}입니다.</p>
      <p>전화번호는 {props.tel}</p>
      <p>{props.children}</p>
    </div>
  );
};
ChildrenOfComponent.defaultProps = {
  name: '기본이름',
  tel: '010-0000-1111',
};
export default ChildrenOfComponent;
