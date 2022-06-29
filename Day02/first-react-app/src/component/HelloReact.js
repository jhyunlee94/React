import React, { Fragment } from 'react';
import '../App.css';

const HelloReact = () => {
    const name = "리액트";
    // const style = {
    //     backgroundColor: "black",
    //     color: "white",
    //     fontSize: "48px",
    //     fontWeight: "bold",
    //     padding: 16
    // }
    return (
        <Fragment>
            {/* {name === "리액트" ? (
                <h1>리액트입니다.</h1>
            ) : (
                null
            )}  */
            
            name === "리액트" && <h1 className='react'>리액트입니다.</h1>
            }
            <h1 className='react'>{name}</h1>
            {/* 주석은 이렇게 사용한다. */}
            //이런 주석은 다 표출됨
            /* 이런 주석은 다 표출됨 */
        </Fragment>
    );
};

export default HelloReact;