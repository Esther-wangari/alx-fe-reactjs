//import WelcomeMessage from './components/WelcomeMessage';
//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import Header from './Header';
import MainContent from './MainContent.jsx';
import Footer from './Footer.jsx';
import Counter from './components/Counter.jsx';
//import UserProfile from './components/UserProfile';
function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
      <Counter />
    </div>
  );
}
export default App;