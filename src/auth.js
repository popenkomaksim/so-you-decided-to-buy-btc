/* @flow */

import '@firebase/auth';
import firebase from '@firebase/app';

const callbacks = new Set();

export default {
  signIn() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  },

  signOut() {
    return firebase.auth().signOut();
  },

  showLoginDialog() {
    callbacks.forEach(callback => callback());
  },

  onShowLoginDialog(callback: () => void) {
    callbacks.add(callback);
    return () => {
      callbacks.delete(callback);
    };
  },

  onAuthStateChanged(callback: any => void) {
    firebase.auth().onAuthStateChanged(callback);
  },
};
