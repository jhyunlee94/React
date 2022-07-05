import React, { useContext } from "react";
import ColorContext, { ColorConsumer } from "../contexts/color";

const ColorBox = () => {
  const { state } = useContext(ColorContext);
  return (
    // <ColorConsumer>
    // {({ state }) => (
    <>
      <div
        style={{
          width: "64px",
          height: "64px",
          background: state.color,
        }}
      >
        {/* <p style={{ color: state.fontColor }}>React</p> */}
      </div>
      <div
        style={{
          width: "32px",
          height: "32px",
          background: state.fontColor,
        }}
      >
        {/* <p style={{ color: state.fontColor }}>React</p> */}
      </div>
    </>
    // )}
    // </ColorConsumer>
  );
};

export default ColorBox;
