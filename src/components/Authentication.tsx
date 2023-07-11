```tsx
import React, { useEffect, useState } from 'react';
import { Firebase } from '../services/Firebase';

const Authentication: React.FC = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const signIn = async () => {
    try {
      const provider = new Firebase.auth.GoogleAuthProvider();
      await Firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.error(error);
    }
  };

  const signOut = async () => {
    try {
      await Firebase.auth().signOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {user ? (
        <button onClick={signOut}>Sign Out</button>
      ) : (
        <button onClick={signIn}>Sign In</button>
      )}
    </div>
  );
};

export default Authentication;
```