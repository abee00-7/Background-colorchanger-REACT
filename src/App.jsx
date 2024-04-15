import React, { useState } from 'react';
import './App.css'; 


function App() {
  const [backgroundColor, setBackgroundColor] = useState(''); 

  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center min-vh-100"
         style={{ backgroundColor, transition: 'background-color 0.5s ease' }}>
      <h1 className='text-success'>Background ColorChanger</h1>
      <div>
        <button className="btn btn-danger" onClick={() => changeBackgroundColor('red')}>Change Color</button>
        <button className="btn btn-primary" onClick={() => changeBackgroundColor('blue')}>Change Color</button>
        <button className="btn btn-warning" onClick={() => changeBackgroundColor('yellow')}>Change Color</button>
      </div>
    </div>
  );
}

export default App;
