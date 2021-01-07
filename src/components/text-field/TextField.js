import React from 'react';

import styled from './style.module.scss';

function TextField(props) {
  return(
    <div className={ styled.control }>
      <label htmlFor={props.labelFor}>
        { props.textLabel }
      </label>
      <div className={ styled.field }>
        <input type="text" placeholder={props.placeholder} id={props.labelFor} autoComplete="true" />
      </div>
    </div>
  );
}

export default TextField;
