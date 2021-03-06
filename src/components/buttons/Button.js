import React from 'react';

import styled from './style.module.scss';

export function Button(props) {
  return (
    <React.Fragment>
      <div id={styled.button}>
        <div className={styled.control}>
          <button type={props.type} className={styled.btn}>
            { props.value }
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}