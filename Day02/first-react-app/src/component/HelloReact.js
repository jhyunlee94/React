import React, { Fragment } from 'react';

const HelloReact = () => {
    const name = "리액트";
    return (
        <Fragment>
            <h1>Hello {name} React!!</h1>
            <h2>First {name} App</h2>
        </Fragment>
    );
};

export default HelloReact;