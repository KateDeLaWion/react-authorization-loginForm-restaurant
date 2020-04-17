import React from 'react';
import logo from './logo.svg';
import './App.css';

// Not using @appbaseio/reactivesearch in this current app.
// import {
//   ReactiveBase,
//   CategorySearch,
//   RatingsFilter,
//   ResultCard
// } from '@appbaseio/reactivesearch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        

        


        {/* Not using React original design */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        <img src={"https://www.touchofclass.com/images/xxl/T391-001.jpg"} className="App-logo" alt="logo" />

        <p>
          <code>src/App.js</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Thank you for visiting us!
        </a>


      </header>
    </div>
  );
}

export default App;
