import React from 'react';

const Hello = (props) => {
  const name = 'react';

  return (
    <>
      <div style={{ color: props.color }}>
        {name}안녕하세요 {props.name}
      </div>
      <div className="gray-box"></div>
    </>
  );
};

Hello.defaultProps = {
  name: '이름없음',
};

export default Hello;
