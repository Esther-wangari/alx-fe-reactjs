//import WelcomeMessage from './components/WelcomeMessage';
//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
//import Header from './Header';
//import MainContent from './MainContent.jsx';
//import Footer from './Footer.jsx';
import UserProfile from './components/UserProfile';
function App() {
  return (
    <div>
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
    </div>
  );
}
export default App;