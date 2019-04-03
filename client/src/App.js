import React from 'react';
import styled from 'styled-components';
import { Route, NavLink } from 'react-router-dom';

import Reset from './components/Reset';
import Login from './containers/Login';
import Users from './containers/Users';

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
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/users">Users</NavLink>
        </nav>
      </header>
      <main>
        <h1>Hello</h1>
        <Route path="/login" component={Login}></Route>
        <Route path="/users" component={Users}></Route>
      </main>
    </AppWrapper>
  );
};

export default App;
