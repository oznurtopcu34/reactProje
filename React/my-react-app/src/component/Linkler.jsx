import React from 'react';
import { Link } from 'react-router-dom';

const Linkler = ({ girisYapanUye }) => {
  return (
    <nav>
      <Link to="/">Anasayfa</Link>
      <Link to="/Giris">Üye Girişi</Link>
      <Link to="/Kayit">Üye Kayıt Ol</Link>
      {girisYapanUye && ( 
        <Link to="/Personel">Personeller</Link>
      )}
    </nav>
  );
};

export default Linkler;
