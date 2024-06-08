import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import Search from './components/Search';
import Delete from './components/Delete';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddProduct/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/delete" element={<Delete/>}/>
      <Route path="/view" element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
