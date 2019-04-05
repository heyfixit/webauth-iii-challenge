import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

export default withRouter(({ history }) =>
  localStorage.getItem('token') ? (
    <button
      onClick={() => {
        localStorage.removeItem('token');
        history.push('/');
      }}
    >
      Sign Out
    </button>
  ) : (
    <>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </>
  )
);
