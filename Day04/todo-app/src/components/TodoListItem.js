import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from 'react-icons/md';
import "../styles/TodoListItem.scss";
import cn from "classnames";


const TodoListItem = ({todo, onRemove, onChecked}) => {

    const {id, text, checked} = todo; // 비구조 할당으로 text, checked 만 사용하겠다 todo 라는거에서 

    return (
        <div className='TodoListItem'>
            <div className={cn("checkbox", {checked})} onClick={() => {onChecked(id)}}>
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                <div className='text'>{text}</div>
            </div>
            <div className='remove' onClick={() => onRemove(todo.id)}>
                <MdRemoveCircleOutline/>
            </div>
        </div>
    );
};

export default TodoListItem;