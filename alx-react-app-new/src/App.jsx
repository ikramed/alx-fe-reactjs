import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Task 1: WelcomeMessage
import WelcomeMessage from './components/WelcomeMessage';

// Task 2: Specific components
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

// Task 3: UserProfile
import UserProfile from './components/UserProfile';

// Task 4: Counter
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />

      {/* Counter component */}
      <Counter />

      <div className="logos">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
