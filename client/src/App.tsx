import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChoosePage from './pages/ChoosePage';
import GivePage from './pages/GivePetPage';
import LoginPage from './pages/Login/Login';
import TakePage from './pages/TakePetPage';
import PrivateRoute from './utils/PrivateRoute';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route element={<ChoosePage />} path="/" />
            <Route element={<GivePage />} path="/give" />
            <Route element={<TakePage />} path="/take" />
          </Route>
          <Route element={<LoginPage />} path="/login"/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
