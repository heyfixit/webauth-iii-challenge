import React, { useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

export default withRouter(({ history }) => {
  const [info, setInfo] = useState({
    username: '',
    password: '',
    department: ''
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleRegister = e => {
    e.preventDefault();
    const endpoint = 'http://localhost:5000/api/auth/register';
    axios
      .post(endpoint, info)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        history.push('/users');
      })
      .catch(err => console.error(err));
  };

  return (
    <>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
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
          <label htmlFor="department">Department</label>
          <input
            id="department"
            name="department"
            value={info.department}
            onChange={handleInputChange}
            placeholder="department"
          />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </>
  );
});

