import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SundaysPage from './SundaysPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/pages/Sundays" element={<SundaysPage />} />
        <Route path="/" element={<Navigate to="/pages/Sundays" />} />
      </Routes>
    </Router>
  );
}

export default App;
