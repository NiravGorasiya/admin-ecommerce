import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
//import './assets/css/vendor-styles.css'; // Custom Vendor CSS
import { Route, Routes } from 'react-router-dom';
import ProductList from './layouts/product/prodect-list'; // Corrected component name to ProductList
import Dashboard from './layouts/Dashboard';

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/page-product-list" element={<ProductList />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
