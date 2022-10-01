/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/home';

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
