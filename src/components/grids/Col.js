import React from 'react';
import styled from './col.module.scss'

function Col(props) {
  return(
    <div className={styled.col}>
      { props.children }
    </div>
  );
}

export default Col;