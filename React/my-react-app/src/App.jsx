import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Kayit from './pages/Kayit';
import Anasayfa from './pages/Anasayfa';
import Giris from './pages/Giris';
import Personel from './pages/Personel';
import NonFound from './pages/NonFound';
import Linkler from './component/Linkler';
import React, { useState } from 'react';

function App() {

  const [uyeler, setUyeler] = useState([]);
  const [personeller, setPersoneller] = useState([]);
  const [girisYapanUye, setGirisYapanUye] = useState(null);
  return (
    <>
  
<BrowserRouter>
<div className='contanier'>
    <Linkler girisYapanUye={girisYapanUye} />
          </div>
          <Routes>
          <Route path="/" element={<Anasayfa />} />
          <Route path="/Giris" element={<Giris uyeler={uyeler} setGirisYapanUye={setGirisYapanUye}/>} />
          <Route path="/Kayit" element={<Kayit uyeler={uyeler} setUyeler={setUyeler} />} />
          <Route path="*" element={<NonFound />} />
        
        {
          girisYapanUye&& 
      
          <Route path="/Personel" element={<Personel personeller={personeller} setPersoneller={setPersoneller} girisYapanUye={girisYapanUye}/> } />
               
        }
        </Routes>
      </BrowserRouter>

      
    </>
  );
}

export default App;

