import React from 'react';

const PropsOfComponent = (props) => {
  return (
    <div>
      <p>안녕하세요. 제 이름은 {props.name}입니다.</p>
      <p>전화번호는 {props.tel}</p>
    </div>
  );
};

PropsOfComponent.defaultProps = {
  name: '기본이름',
  tel: '010-0000-1111',
};

export default PropsOfComponent;
