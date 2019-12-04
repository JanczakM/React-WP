import React from 'react';
import Button from './Button';
import {settings} from '../settings/Settings';

const MainHeader = () => {

    return (
        <div className='homepage-header'>
          <div className='homepage-header-container'>
            <h1 className='homepage-header-title'>{settings.title}</h1>
            <Button text='w drogę!' styles='button-white'/>
          </div>
        </div>
    )
}

export default MainHeader;
