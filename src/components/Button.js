import React from 'react';

const Button = (props) => {
    return (
      <a className={props.styles} href='#posts'>{props.text}</a>
    )
}

export default Button;
