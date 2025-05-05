
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexUpdate from './pages/IndexUpdate';
import NotFound from './pages/NotFound';
import './App.css';
import { Toaster } from './components/ui/toaster';

function AppUpdate() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexUpdate />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default AppUpdate;
