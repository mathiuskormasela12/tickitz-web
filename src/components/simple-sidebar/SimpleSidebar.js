// Import all modules
import React from 'react';

// Import SCSS
import styled from './style.module.scss';

// Import all components

export function SimpleSidebar(props) {
  return(
    <div id={styled.sidebar}>
      { props.children }
    </div>
  );
}