// Import all modules
import React from 'react';

// Import SCSS
import styled from './style.module.scss';

// Import all components

export function SimpleSidebar(props) {
  return(
    <React.Fragment>
      <div id={styled.sidebar}>
        { props.children }
      </div>
    </React.Fragment>
  );
}