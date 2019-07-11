import React from 'react';
import './Person.css';

const person = (props) => {
    const randomNum = Math.random();

    if (randomNum > 0.7) {
        throw new Error('Something went wrong');
    }
    return (
        <div className='Person'>
            <p  onClick={props.click}>I'm {props.name} who is {props.age } years old</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name} />
        </div>
    );
}

export default person;