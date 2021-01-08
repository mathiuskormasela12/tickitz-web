import React from 'react';

import styled from './style.module.scss';

export function TextField(props) {
  return(
    <React.Fragment>
      <div className={ styled.control }>
        <label htmlFor={props.labelFor}>
          { props.textLabel }
        </label>
        <div className={ styled.field }>
          <input type="text" placeholder={props.placeholder} id={props.labelFor} autoComplete="true" />
        </div>
      </div>
    </React.Fragment>
  );
}
