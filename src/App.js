import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {

  const[darkMode, setdarkMode] = React.useState(true);
  function toggle(){
      setdarkMode(prevDarkMode => !prevDarkMode);
  }

  return (
    <div className="App">
      <Navbar darkMode={darkMode} toggle={toggle} />
      <Main darkMode={darkMode} />
    </div>
  );
}

export default App;
