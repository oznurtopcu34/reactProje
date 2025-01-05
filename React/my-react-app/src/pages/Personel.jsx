import React, { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";



const Personel = ({ personeller, setPersoneller, girisYapanUye}) => {
 const navigate = useNavigate();
  const [yeniId, setYeniId] = useState(1);
  const [ad, setAd] = useState("");
  const [soyad, setSoyad] = useState("");
  const [bolum, setBolum] = useState("");
  const [resimUrl, setResimUrl] = useState("");
  const [duzenlenenPersonel, setDuzenlenenPersonel] = useState(false);
  const [duzenlenenId, setDuzenlenenId] = useState(null);
  const [hataMesaji, setHataMesaji] = useState("");

 useEffect(() => {
    if (!girisYapanUye) {
      
      }
  }, [girisYapanUye, navigate]);


  const kaydet = () => {
  if(!girisYapanUye){
 setHataMesaji("Personel eklemek için üye girişi yapmalısınız!");

      return;
  }
    if (!ad || !soyad || !bolum || !resimUrl) {
      setHataMesaji("Lütfen tüm alanları doldurun!");
      return;
    }

    if (duzenlenenPersonel) {
      setPersoneller(
        personeller.map((personel) =>
          personel.id === duzenlenenId
            ? { ...personel, ad, soyad, bolum, resimUrl }
            : personel
        )
      );
      setDuzenlenenPersonel(false);
    } else {
      setPersoneller([
        ...personeller,
        { id: yeniId, ad, soyad, bolum, resimUrl },
      ]);
      setYeniId(yeniId + 1);
    }

    setAd("");
    setSoyad("");
    setBolum("");
    setResimUrl("");
    setDuzenlenenId(null);
    setHataMesaji("");
  };

  const guncelle = (id) => {
    const personel = personeller.find((personel) => personel.id === id);
    if (personel) {
      setAd(personel.ad);
      setSoyad(personel.soyad);
      setBolum(personel.bolum);
      setResimUrl(personel.resimUrl);
      setDuzenlenenId(id);
      setDuzenlenenPersonel(true);
      setHataMesaji("");
    }
  };

  const sil = (id) => {
    setPersoneller(personeller.filter((personel) => personel.id !== id));
  };

  return (

<>  
<div className="personel-container">
    {hataMesaji && <p className="hata-mesaji">{hataMesaji}</p>}
    <div className="personel-form">
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
        value={bolum}
        onChange={(e) => setBolum(e.target.value)}
        type="text"
        placeholder="Bölüm"
      />
      <input
        value={resimUrl}
        onChange={(e) => setResimUrl(e.target.value)}
        type="text"
        placeholder="Resim URL"
      />
      <div>
        <button
          className="temizle-button"
          onClick={() => {
            setAd("");
            setSoyad("");
            setBolum("");
            setResimUrl("");
            setDuzenlenenPersonel(false);
            setDuzenlenenId(null);
            setHataMesaji("");
          }}
        >
          Temizle
        </button>
        <button className="kaydet-button" onClick={kaydet}>
          Kaydet
        </button>
      </div>
    </div>
  </div>
  <div className="personel-list">
  {personeller.map((personel) => (
    <div key={personel.id} className="personel-card">
      {personel.resimUrl && (
        <img
          src={personel.resimUrl}
          alt={`${personel.ad} ${personel.soyad}`}
        />
      )}
      <p>ID: {personel.id}</p>
      <p>Ad: {personel.ad}</p>
      <p>Soyad: {personel.soyad}</p>
      <p>Bölüm: {personel.bolum}</p>
      <button
        className="sil-button"
        onClick={() => sil(personel.id)}
      >
        Sil
      </button>
      <button
        className="guncelle-button"
        onClick={() => guncelle(personel.id)}
      >
        Güncelle
      </button>
    </div>
  ))}
</div>

  </>  
  );
};

export default Personel;
