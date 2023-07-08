import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

export const authService = {
  async login(email: string, password: string) {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  async register(email: string, password: string) {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  async logout() {
    try {
      await firebase.auth().signOut();
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  async getCurrentUser() {
    return firebase.auth().currentUser;
  }
};