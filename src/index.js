import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import App.js
import reportWebVitals from './reportWebVitals';


// Render the App component to the DOM
ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Your main app component */}
  </React.StrictMode>,
  document.getElementById('root') // Ensure this matches the target div id in your public/index.html
);

// Optional: Measure performance (You can remove this if you're not using it)
reportWebVitals();
