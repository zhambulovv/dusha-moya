import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import ProductTable from './ProductTable';
import SettingsPage from './SettingsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductTable />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
