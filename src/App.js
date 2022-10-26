import './App.css';
import React from 'react';
import data from './data'
import NavBar from './components/NavBar'
import Card from './components/Card'
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="container">
        {data.map(item =>
          <Card
            key={item.id}
            {...item}
          />
        )}
      </div>
    </React.Fragment>
  );
}

export default App;
