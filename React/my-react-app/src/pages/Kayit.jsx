import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';


const Kayit = ({ uyeler, setUyeler }) => {
  const [yakalananId, setYakalananId] = useState(1);
  const [ad, setAd] = useState("");
  const [soyad, setSoyad] = useState("");
  const [kullaniciAdi, setKullaniciAdi] = useState("");
  const [sifre, setSifre] = useState("");
 

const notify = () => toast("Lütfen tüm alanları doldurun!");
const newnotify = () => toast("Aynı Kullanıcıadı var :(");
const nextnotify = () => toast("Başarılı sekilde uye oldunuz:)");


  const kaydet = () => {
 
    if (!ad || !soyad || !kullaniciAdi || !sifre) {
      notify();

    }
    else{

   
    const ayniKullaniciAdi = uyeler.map((uye) => uye.kullaniciAdi).find((kullanıcı) => kullanıcı === kullaniciAdi);

    if (ayniKullaniciAdi) {
      newnotify();
      }
   else {
      const yeniUye = {
        id: yakalananId + 1,
        ad,
        soyad,
        kullaniciAdi,
        sifre,
        
      };
      setUyeler([...uyeler, yeniUye]);
      setYakalananId(yakalananId + 1);
      nextnotify();
      
    }
 
  }
    formTemizle();
  };
  
  const formTemizle = () => {
    setAd("");
    setSoyad("");
    setKullaniciAdi("");
    setSifre("");
    setDuzenlenenId(null);
  };

  return (
    <>
      <div className="kayit-container">
        <h1>Üye Kayıt Formu</h1>
        <input
          value={ad}
          onChange={(e) => setAd(e.target.value)}
          type="text"
          placeholder="Ad"
        />
        <input
          value={soyad}
          onChange={(e) => setSoyad(e.target.value)}
          type="text"
          placeholder="Soyad"
        />
        <input
          value={kullaniciAdi}
          onChange={(e) => setKullaniciAdi(e.target.value)}
          type="text"
          placeholder="Kullanıcı Adı"
        />
        <input
          value={sifre}
          onChange={(e) => setSifre(e.target.value)}
          type="password"
          placeholder="Şifre"
        />
        <div className="button-container">
          <button className="temizle-button" onClick={formTemizle}>
            Temizle
          </button>
          <button className="kaydet-button" onClick={kaydet}>
            Kaydet
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Kayit;
