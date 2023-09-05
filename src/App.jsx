import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from './components/common/Layout';
import Dashboard from './components/Dashboard';
import Product from './components/Product';
import User from './components/User';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Product />} />
          <Route path="users" element={<User />} />
        </Route>
        <Route path="login" element={<div>This is Login</div>}></Route>
      </Routes>
    </Router>

  );
}

export default App;
