import React, { useState } from 'react';
import { authService } from '../services/authService';
import Login from './Login';
import Register from './Register';

const Authentication: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleIsLogin = () => {
    setIsLogin(!isLogin);
  };

  const handleAuth = async (email: string, password: string) => {
    if (isLogin) {
      await authService.login(email, password);
    } else {
      await authService.register(email, password);
    }
  };

  return (
    <div className="authentication">
      {isLogin ? (
        <Login handleAuth={handleAuth} toggleIsLogin={toggleIsLogin} />
      ) : (
        <Register handleAuth={handleAuth} toggleIsLogin={toggleIsLogin} />
      )}
    </div>
  );
};

export default Authentication;