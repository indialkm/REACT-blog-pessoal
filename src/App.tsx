import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Postagem from './pages/postagem/Postagem';
import CadastrarTemas from './pages/cadastrarTema/CadastrarTema';
import Temas from './pages/temas/Temas';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/postagem" element={<Postagem />} />
              <Route path="/cadastrarTema" element={<CadastrarTemas />} />
              <Route path="/temas" element={<Temas />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
);
}
export default App;