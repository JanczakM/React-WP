import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    return (
      <a className={props.styles} href='#posts'>{props.text}</a>
    )
}

Button.propTypes = {
  text: PropTypes.string,
  styles: PropTypes.string,
}

export default Button;
