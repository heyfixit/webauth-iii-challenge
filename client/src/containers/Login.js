import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default props => {
  const [info, setInfo] = useState({ username: '', password: '' });
  const [redirectReferrer, setRedirectReferrer] = useState(false);
  const { from } = props.location.state || { from: { pathname: '/' } };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleLogin = e => {
    e.preventDefault();
    const endpoint = 'http://localhost:5000/api/auth/login';
    axios
      .post(endpoint, info)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        setRedirectReferrer(true);
      })
      .catch(err => console.error(err));
  };

  if (redirectReferrer) {
    return <Redirect to={from} />;
  }

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            value={info.username}
            onChange={handleInputChange}
            placeholder="username"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            value={info.password}
            onChange={handleInputChange}
            placeholder="password"
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
};
