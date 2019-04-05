import React from 'react';
import styled from 'styled-components';
import { Route, NavLink, withRouter } from 'react-router-dom';

import Reset from './components/Reset';
import Login from './containers/Login';
import Register from './containers/Register';
import Users from './containers/Users';
import AuthButton from './components/AuthButton';
import PrivateRoute from './components/PrivateRoute';

const AppWrapper = styled.div`
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  return (
    <AppWrapper>
      <Reset />
      <header>
        <nav>
          {localStorage.getItem('token') && (
            <NavLink to="/users">Users</NavLink>
          )}
          <AuthButton />
        </nav>
      </header>
      <main>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/users" component={Users} />
      </main>
    </AppWrapper>
  );
};

export default withRouter(App);
