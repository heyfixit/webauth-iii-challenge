import React, { useState, useEffect } from 'react';
import axios from 'axios';
import requiresAuth from '../components/requiresAuth';

export default requiresAuth(() => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const endpoint = '/restricted/users';

    axios.get(endpoint).then(res => {
      setUsers(res.data);
    });
  }, []);

  return (
    <>
      <h2>List of Users</h2>
      <ul>
        {users.map(u => (
          <li key={u.id}>
            <div>{u.username}</div>
            <div>{u.department}</div>
          </li>
        ))}
      </ul>
    </>
  );
});
