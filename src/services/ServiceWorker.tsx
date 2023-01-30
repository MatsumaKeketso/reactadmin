import React from "react";
// Authentication
export const anyInputAuthProvider = {
  login: (params: any) => {
    localStorage.setItem("token", "any_input_token");
    return Promise.resolve();
  },
  logout: () => {
    localStorage.removeItem("token");
    return Promise.resolve();
  },
  checkError: (error: any) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem("token");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () => {
    return localStorage.getItem("token") ? Promise.resolve() : Promise.reject();
  },
  getPermissions: () => Promise.resolve(),
};

export const firebaseConfig = {
  apiKey: "AIzaSyCrYGx7E2xStgFwnHc2MIDe6WQj64R8h5E",
  authDomain: "todoapp-a9619.firebaseapp.com",
  databaseURL: "https://todoapp-a9619-default-rtdb.firebaseio.com",
  projectId: "todoapp-a9619",
  storageBucket: "todoapp-a9619.appspot.com",
  messagingSenderId: "588937765016",
  appId: "1:588937765016:web:7416c40633a033ca08f0ed",
  measurementId: "G-EPP3HZ6NK4",
};
