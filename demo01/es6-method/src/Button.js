import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
  }
  static defaultProps = {
    color: 'red',
    text: 'Comfirm'
  };
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
}

export default Button;