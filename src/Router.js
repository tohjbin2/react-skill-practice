import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Chart1 from './practice/Pagination1/Chart1';
import Chart2 from './practice/Pagination2/Chart2';
import Carousel1 from './practice/Carousel1/Carousel1';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pagination1" element={<Chart1 />} />
        <Route path="/pagination2" element={<Chart2 />} />
        <Route path="/carousel1" element={<Carousel1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
