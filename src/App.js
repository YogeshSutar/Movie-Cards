import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Component/Layout/Layout'; 
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import ErrorPage from './Pages/ErrorPage';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>
          <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
