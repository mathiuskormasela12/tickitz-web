// Import all modules
import React from 'react';
import styled from './row.module.scss';

export function Row(props) {
  return(
    <div id={styled.row}>
      { props.children }
    </div>
  );
}