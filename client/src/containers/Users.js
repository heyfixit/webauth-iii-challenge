import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const endpoint = 'http://localhost:5000/api/restricted/users';
    const token = localStorage.getItem('token');
    const reqOptions = {
      headers: {
        authorization: token
      }
    };
    axios.get(endpoint, reqOptions).then(res => {
      setUsers(res.data);
    });
  }, []);

  return (
    <>
      <h2>List of Users</h2>
      <ul>
        {users.map(u => (
          <li key={u.id}>{u.username}</li>
        ))}
      </ul>
    </>
  );
};
