import logo from './logo.svg';
import './App.css';
import HelloReact from './component/HelloReact';
import DummyComponent from './component/DummyComponent';
import PropsOfComponent from './component/PropsOfComponent';
import ChildrenOfComponent from './component/ChildrenOfComponent';
import DestructuringOfProps from './component/DestructuringOfProps';
import UseState from './component/UseState';
import Test from './component/Test';

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

  return <UseState></UseState>;
  // return <Test></Test>;
}

export default App;
