import React from 'react';
import styled from '../../style/grid/col.module.scss'

function Col(props) {
  return(
    <div class={styled.col}>
      { props.children }
    </div>
  );
}

export default Col;