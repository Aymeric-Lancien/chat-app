import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact name = "Micheline" online = {true} image = "https://randomuser.me/api/portraits/women/39.jpg"/>
      <Contact name = "Ida" online = {false} image = "https://randomuser.me/api/portraits/women/5.jpg"/>
      <Contact name = "Roger" online = {true} image = "https://randomuser.me/api/portraits/men/94.jpg"/>
    </div>
  );
}

export default App;
