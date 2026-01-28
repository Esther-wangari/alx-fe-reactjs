//import WelcomeMessage from './components/WelcomeMessage';
//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
//import Header from './Header';
//import MainContent from './MainContent.jsx';
//import Footer from './Footer.jsx';
//import Counter from './components/Counter.jsx';
//import UserProfile from './components/UserProfile';
import ProfilePage from "./components/ProfilePage";
import UserContext from './UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;