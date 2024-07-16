import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
// import OtherComponent from './components/OtherComponent'; // Example additional component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/other" element={<OtherComponent />} /> Example additional route */}
      </Routes>
    </Router>
  );
}

export default App;
