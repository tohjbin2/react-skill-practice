import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Chart from './pages/Pagination/Chart';

function Router() {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <Routes>
        <Route path="/pagination1" element={<Chart />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default Router;
