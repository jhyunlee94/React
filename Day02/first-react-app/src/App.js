import logo from './logo.svg';
import './App.css';
import HelloReact from './component/HelloReact';
import DummyComponent from './component/DummyComponent';
import PropsOfComponent from './component/PropsOfComponent';
import ChildrenOfComponent from './component/ChildrenOfComponent';
import DestructuringOfProps from './component/DestructuringOfProps';
import UseState from './component/UseState';
import Test from './component/Test';
import EventPractice from './component/EventPractice';
import MultipleInput from './component/MultipleInput';
import UseRef from './component/UseRef';
import ArrayRendering from './component/ArrayRendering';

function App() {
  // return <PropsOfComponent name="REACT" tel="010-1111-2222" />;
  // return (
  //   <ChildrenOfComponent name="test" tel="test">
  //     칠드런입니다.
  //   </ChildrenOfComponent>
  // );
  // return (
  //   <DestructuringOfProps name="이종현" tel="010-1111-2222">
  //     비구조화입니다.
  //   </DestructuringOfProps>
  // );

  return (
    <div>
      {/* <UseState></UseState> */}
      {/* <PropsOfComponent></PropsOfComponent> */}
      {/* <EventPractice></EventPractice> */}
      {/* <MultipleInput /> */}
      {/* <UseRef></UseRef> */}
      <ArrayRendering></ArrayRendering>
    </div>
  );
  // return <Test></Test>;
}

export default App;
