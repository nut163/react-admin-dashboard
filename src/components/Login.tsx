import React, { useState } from 'react';
import { authService } from '../services/authService';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await authService.login(email, password);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <form onSubmit={handleLogin} className="p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-8 text-center">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="email"
          className="block w-full p-2 border border-gray-300 rounded mb-4"
          name="email"
          placeholder="Email Address"
          onChange={e => setEmail(e.target.value)}
          value={email}
          required
        />
        <input
          type="password"
          className="block w-full p-2 border border-gray-300 rounded mb-4"
          name="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
          value={password}
          required
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white font-bold rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;