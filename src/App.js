import Home from './Pages/Home'
import Contact from './Pages/Contact';
import About from './Pages/About';
import ErrorPage from './Pages/ErrorPage';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='*' element={<ErrorPage/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
