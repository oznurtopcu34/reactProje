import React, { useState } from "react";

const Personel = () => {
  const [personeller, setPersoneller] = useState([]);
  const [yeniId, setYeniId] = useState(1);
  const [ad, setAd] = useState("");
  const [soyad, setSoyad] = useState("");
  const [bolum, setBolum] = useState("");
  const [duzenlenenPersonel, setDuzenlenenPersonel] = useState(false);
  const [duzenlenenId, setDuzenlenenId] = useState(null);
  const [hataMesaji, setHataMesaji] = useState("");

  const kaydet = () => {
    if (!ad || !soyad || !bolum) {
      setHataMesaji("Lütfen tüm alanları doldurun!");
      return;
    }

    if (duzenlenenPersonel) {
      setPersoneller(
        personeller.map((personel) =>
          personel.id === duzenlenenId
            ? { ...personel, ad, soyad, bolum }
            : personel
        )
      );
      setDuzenlenenPersonel(false);
    } else {
      setPersoneller([
        ...personeller,
        { id: yeniId, ad, soyad, bolum },
      ]);
      setYeniId(yeniId + 1);
    }

    setAd("");
    setSoyad("");
    setBolum("");
    setDuzenlenenId(null);
    setHataMesaji("");
  };

  const guncelle = (id) => {
    const personel = personeller.find((personel) => personel.id === id);
    if (personel) {
      setAd(personel.ad);
      setSoyad(personel.soyad);
      setBolum(personel.bolum);
      setDuzenlenenId(id);
      setDuzenlenenPersonel(true);
      setHataMesaji("");
    }
  };

  const sil = (id) => {
    setPersoneller(personeller.filter((personel) => personel.id !== id));
  };

  return (
    <div >
      <div >
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
            value={bolum}
            onChange={(e) => setBolum(e.target.value)}
            type="text"
            placeholder="Bölüm"
          />
          <div >
            <button
           
              onClick={() => {
                setAd("");
                setSoyad("");
                setBolum("");
                setDuzenlenenPersonel(false);
                setDuzenlenenId(null);
                setHataMesaji("");
              }}
            >
              Temizle
            </button>
            <button onClick={kaydet}>
              {duzenlenenPersonel ? "Güncelle" : "Ekle"}
            </button>
          </div>
        </div>
      </div>

      <div >
        {personeller.map((personel) => (
          <div key={personel.id}>
            <p>ID: {personel.id}</p>
            <p>Ad: {personel.ad}</p>
            <p>Soyad: {personel.soyad}</p>
            <p>Bölüm: {personel.bolum}</p>
            <button  onClick={() => sil(personel.id)}>
              Sil
            </button>
            <button onClick={() => guncelle(personel.id)}>
              Güncelle
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Personel;
