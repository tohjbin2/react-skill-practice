import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Chart from './practice/Pagination1/Chart';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pagination1" element={<Chart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
