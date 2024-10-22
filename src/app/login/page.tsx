'use client'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie'; // Import js-cookie

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    Cookies.set("loggedin",true);
  
    try {
      const response = await axios.post('http://localhost:8080/login', {
        username,
        password
      });

      if (response.status === 200) {
        Cookies.get('loggedin'); // Set auth token in cookies
        router.push('/welcome');
      } else {
        setMessage('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      setMessage('Invalid username or password: ' + error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
}