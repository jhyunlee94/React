import { useRef, useState, useCallback } from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function App() {
  const [todos, setTodes] = useState([ // todos를 객체로 선언 하기
    {
      id: 1,
      text: "리액트 기초 알아보기",
      checked: true,
    },
    {
      id: 2,
      text: "컴포넌트 스타일링 해보기",
      checked: true,
    },
    {
      id: 3,
      text: "일정관리 앱 만들기",
      checked: false,
    },
  ]);

  //todos 에 넣어 줄 새로운 함수
  const nextId = useRef(4);

  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current,
      text: text,
      checked: false,
    }
    setTodes(todos.concat(todo));
    nextId.current += 1;
  },[todos]); // todos가 변경될때마다 렌더링

  //삭제하는 기능
  const onRemove = useCallback(
    id => {
      setTodes(todos.filter(todo => todo.id !== id))
    },
    [todos]
  );

  const onChecked = useCallback(
    id => {
      setTodes(todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo
      ))
    },
    [todos]
  );

  return (
    // onInsert함수를 props로 보내줘야한다 부모 컨테이너에 접근이 안되기때문에 함수를 이용할 수 밖에 없다
    <>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}></TodoInsert>
        <TodoList todos={todos} onRemove={onRemove} onChecked={onChecked}></TodoList>
      </TodoTemplate>
    </>
  );
}

export default App;
