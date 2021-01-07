// Import all modules
import React from 'react';

import styled from './style.module.scss';

function Container(props) {
  return(
    <div className={ props.componentName !== 'login' ? styled.container : styled.containerLogin }>
      { props.children }
    </div>
  );
}

export default Container;