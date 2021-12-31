import React from 'react';
import './App.css';
import Header from './components/Header';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="container">
      <Header/>
      <SignUp/>
    </div>
  );
}

export default App;
