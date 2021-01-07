import React from 'react';
import styled from './col.module.scss'

export function Col(props) {
  return(
    <div className={styled.col}>
      { props.children }
    </div>
  );
}