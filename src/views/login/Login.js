// Import all modules
import React from 'react';

import styled from './style.module.scss';

import tickitz from '../../assets/img/tickitz.svg';

// Import all components
import SimpleSidebar from '../../components/simple-sidebar/SimpleSidebar';
import Row from '../../components/grids/Row';
import Col from '../../components/grids/Col';
import Container from '../../components/container/Container';
import TextField from '../../components/text-field/TextField';
import PasswordField from '../../components/password-field /PasswordField';

function Login() {
  return(
    <div id={ styled.login }>
      <Row>
        <Col>
          <SimpleSidebar>
            <div className={ styled.sidebarItem}>
              <img src={ tickitz } alt="Tickitz Login" className={ styled.img } />
            </div>
            <div className={ styled.sidebarItem}>
              <p className={ styled.subtitle }>
                wait, watch, wow!
              </p>
            </div>
          </SimpleSidebar>
        </Col>
        <Col>
          <Container componentName="login">
            <header className={ styled.header }>
              <h2 className={ styled.title }>Sign In</h2>
              <p className={ styled.formSubtitle }> 
                Sign in with your data that you entered during
                your registration
              </p>
            </header>
            <form>
              <TextField labelFor="email" textLabel="Email" placeholder="Write your email" />
              <PasswordField labelFor="password" textLabel="Password" placeholder="Write your Password" />
            </form>
          </Container>
        </Col>
      </Row>
    </div>
  );
}

export default Login;