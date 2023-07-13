import React from 'react';
import './App.css';
import backgroundImage from './assets/Background.jpg';

function App() {
  const style = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: '#fff', // Change the color based on your background image
    textAlign: 'center',
  };

  const headerStyle = {
    background: 'none',
    border: 'none',
  };

  return (
    <div className="App" style={style}>
      <header className="App-header" style={headerStyle}>
        <h1>Stop Watching, Start doing!</h1>
        <h2>Find&Do is on the way</h2>
        <p>Every day a new Experience</p>
      </header>
    </div>
  );
}

export default App;
