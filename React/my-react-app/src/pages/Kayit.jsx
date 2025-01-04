
import React, { useState } from 'react';

const Kayit = ({ uyeler, setUyeler }) => {
  const [yakalananId, setYakalananId] = useState(uyeler.length > 0 ? uyeler[uyeler.length - 1].id + 1 : 1);
  const [ad, setAd] = useState("");
  const [soyad, setSoyad] = useState("");
  const [kullaniciAdi, setKullaniciAdi] = useState("");
  const [sifre, setSifre] = useState("");
  const [duzenlenenUye, setDuzenlenenUye] = useState(false);
  const [duzenlenenId, setDuzenlenenId] = useState(null);
  const [hataMesaji, setHataMesaji] = useState("");

  const kaydet = () => {
    if (!ad || !soyad || !kullaniciAdi || !sifre) {
      setHataMesaji("Lütfen tüm alanları doldurun!");
      return;
    }

    if (duzenlenenUye) {
      setUyeler(
        uyeler.map((uye) =>
          uye.id === duzenlenenId
            ? { ...uye, ad, soyad, kullaniciAdi, sifre }
            : uye
        )
      );
      setDuzenlenenUye(false);
    } else {
      const yeniUye = {
        id: yakalananId,
        ad,
        soyad,
        kullaniciAdi,
        sifre,
      };
      setUyeler([...uyeler, yeniUye]);
      setYakalananId(yakalananId + 1);
    }

    setAd("");
    setSoyad("");
    setKullaniciAdi("");
    setSifre("");
    setDuzenlenenId(null);
    setHataMesaji("");
  };

  const guncelle = (id) => {
    const uye = uyeler.find((uye) => uye.id === id);
    if (uye) {
      setAd(uye.ad);
      setSoyad(uye.soyad);
      setKullaniciAdi(uye.kullaniciAdi);
      setSifre(uye.sifre);
      setDuzenlenenId(id);
      setDuzenlenenUye(true);
      setHataMesaji("");
    }
  };

  const sil = (id) => {
    setUyeler(uyeler.filter((uye) => uye.id !== id));
  };

  return (
    <>
      <div>
        <div>
          {hataMesaji && <p style={{ color: "red" }}>{hataMesaji}</p>}
          <div>
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
            <div>
              <button
                onClick={() => {
                  setAd("");
                  setSoyad("");
                  setKullaniciAdi("");
                  setSifre("");
                  setDuzenlenenUye(false);
                  setDuzenlenenId(null);
                  setHataMesaji("");
                }}
              >
                Temizle
              </button>
              <button onClick={kaydet}>
              Kaydet
              </button>
            </div>
          </div>
        </div>

    
      </div>
    </>
  );
};

export default Kayit;
