import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/home';

function Routs() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default Routs;
