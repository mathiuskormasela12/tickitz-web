// Import all modules
import React from 'react';
import styled from '../../style/grid/row.module.scss';

function Row(props) {
  return(
    <div id={styled.row}>
      { props.children }
    </div>
  );
}

export default Row;