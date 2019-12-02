import React from 'react';
import {Link} from 'react-router-dom';
import Button from './Button';

const MainHeader = (props) => {

    return (
        <header className='header'>
          <div className='header-container'>
            <h1 className='header-title'>aktywne podróże</h1>
            <Button text='w drogę!' styles='button-white'/>
          </div>
        </header>
    )
}

export default MainHeader;
