// Import all modules
import React from 'react';

// Import SCSS
import styled from './style.module.scss';

// Import all components

function SimpleSidebar(props) {
  return(
    <div id={styled.sidebar}>
      { props.children }
    </div>
  );
}

export default SimpleSidebar;