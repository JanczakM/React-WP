import React from 'react';
import Button from './Button';

const MainHeader = () => {

    return (
        <div className='homepage-header'>
          <div className='homepage-header-container'>
            <h1 className='homepage-header-title'>aktywne podróże</h1>
            <Button text='w drogę!' styles='button-white'/>
          </div>
        </div>
    )
}

export default MainHeader;
