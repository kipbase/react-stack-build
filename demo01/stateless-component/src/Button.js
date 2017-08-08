import React from 'react';
import logo from './logo.svg';
import './Button.css';

function Button({
  color = 'red',
  text = 'Confirm'
}) {
  return (
    <button className={ "btn-" + color }>
      <em>{ text }</em>
    </button>
  );
}

export default Button;