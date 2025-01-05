import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Giris = ({ uyeler, setGirisYapanUye }) => {
  const [kullaniciAdi, setKullaniciAdi] = useState("");
  const [sifre, setSifre] = useState("");
  const [hataMesaji, setHataMesaji] = useState("");
  const navigate = useNavigate();

  const girisYap = () => {
    const uye = uyeler.find(
      (uye) => uye.kullaniciAdi === kullaniciAdi && uye.sifre === sifre
    );

    if (uye) {
setGirisYapanUye(uye);
      navigate("/");
    } else {
      setHataMesaji("Hatalı kullanıcı adı veya şifre. Lütfen tekrar deneyin.");
    }
  };

  return (
    <>
      <div className="giris-container">
        <h1>Üye Girişi</h1>
        {hataMesaji && <p style={{ color: "red" }}>{hataMesaji}</p>}
        <input
          type="text"
          placeholder="Kullanıcı Adı"
          value={kullaniciAdi}
          onChange={(e) => setKullaniciAdi(e.target.value)}
        />
        <input
          type="password"
          placeholder="Şifre"
          value={sifre}
          onChange={(e) => setSifre(e.target.value)}
        />
        <button onClick={girisYap}>Giriş Yap</button>
      </div>
    </>
  );
};

export default Giris;
