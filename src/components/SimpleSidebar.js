// Import all modules
import React from 'react';

// Import all components
import Row from '../components/grids/Row';
import Col from '../components/grids/Col';

function SimpleSidebar(props) {
  return(
    <div id="simple-sidebar">
      <Row>
        <Col>
          <p>Satu</p>
        </Col>
        <Col>
          <p>DUa</p>
        </Col>
      </Row>
    </div>
  );
}

export default SimpleSidebar;