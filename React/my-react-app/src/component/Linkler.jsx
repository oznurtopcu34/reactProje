import React from 'react';
import { Link } from 'react-router-dom';

const Linkler = () => {
  return (
    <nav>
      <Link to="/">Anasayfa</Link> 
      <Link to="/Giris">Üye Girişi</Link>  
      <Link to="/Kayit">Üye Kayıt Ol</Link>  
      <Link to="/Personel">Personeller</Link>
    </nav>
  );
};

export default Linkler;
