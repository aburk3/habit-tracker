import React from 'react';

import classes from './Button.module.css';

const Button = props => (
  <button
    className={[classes.Button, classes[props.btnStyle]].join(' ')}
    onClick={props.clicked}
    type={props.btnType}
  >
    {props.children}
  </button>
);

export default Button;
