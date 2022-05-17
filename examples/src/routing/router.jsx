import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import { About } from '../components/About';
import { Dashboard } from '../components/Dashboard';
import { List } from '../components/List';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/List" element={<List />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/About" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
