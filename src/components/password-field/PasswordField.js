import React from 'react';

import styled from './style.module.scss';

export function PasswordField(props) {
  return(
    <div className={ styled.control }>
      <label htmlFor={props.labelFor}>
        { props.textLabel }
      </label>
      <div className={ styled.field }>
        <input type="password" placeholder={props.placeholder} id={props.labelFor} />
      </div>
    </div>
  );
}