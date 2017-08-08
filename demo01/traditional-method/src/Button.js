import React from 'react';
import logo from './logo.svg';
import './Button.css';

const Button = React.createClass({
  getDefaultProps() {
    return {
      color: 'red',
      text: 'Confirm'
    }
  },
  render() {
    const {
      color,
      text
    } = this.props;
    return (
      <button className={ "btn-" + color }>
        <em>{ text }</em>
      </button>
    );
  }
});

export default Button;