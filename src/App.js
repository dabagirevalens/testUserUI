import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './components/Home';
import NewUser from './components/NewUser';
import EditUser from './components/EditUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/new' element={<NewUser />} />
        <Route path='/edit/:id' element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
