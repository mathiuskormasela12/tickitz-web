// Import all modules
import React from 'react';

import styled from './style.module.scss';

import tickitz from '../../assets/img/tickitz.svg';
import tickitz2 from '../../assets/img/tickitz2.svg';

// Import all components
import {
  SimpleSidebar,
  Row,
  Col,
  Container,
  TextField,
  PasswordField,
  Button
} from '../../components';

function Login() {
  return(
    <React.Fragment>
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
                <img src={tickitz2} alt="Tickitz" className={styled.tickitzMobileImg} />
                <h2 className={ styled.title }>Sign In</h2>
                <p className={ styled.formSubtitle }> 
                  Sign in with your data that you entered during
                  your registration
                </p>
              </header>
              <form>
                <TextField labelFor="email" textLabel="Email" placeholder="Write your email" />
                <PasswordField labelFor="password" textLabel="Password" placeholder="Write your Password" />
                <Button type="button" value="Sign In" />
              </form>
            </Container>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
}

export default Login;