import React, { useState , useCallback} from 'react';
import { MdAdd } from 'react-icons/md';
import "../styles/TodoInsert.scss";

const TodoInsert = ({onInsert}) => {

    //항목 추가하는 기능
    const [value, setValue] = useState(''); // 여기 내에서 입력 받는거
    const handleChange = useCallback(e => { // useCallback 렌더링 될때 만 읽도록
        setValue(e.target.value);
    },[]); // [] 이 처음 렌더링 될때만 이란 뜻 빈값

    const handleSubmit = useCallback(e => {
        onInsert(value); // 입력한 value 값이 갈수있도록 그리고 App에서 text하나만 있기에 value하나만
        setValue('');

        //서브밋되면 화면이 새로고침 되기 때문에 새로고침 방지
        e.preventDefault(); // 원래있던 기본 이벤트 막기
    },[onInsert, value]); // onInsert 가 생성될때마다, value가 변경될때마다
    return (
        <form className="TodoInsert" onSubmit={handleSubmit}>
            <input 
                placeholder='할 일을 입력하세요.'
                value={value}
                onChange={handleChange}></input>
            <button type='submit'>
                <MdAdd></MdAdd>
            </button>
        </form>
    );
};

export default TodoInsert;