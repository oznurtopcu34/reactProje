import React, { useState, useEffect } from "react";

const Anasayfa = () => {

  const [soz, setSoz] = useState("");

  useEffect(() => {
  
    const sozler = [
      "Başarı, her gün tekrarlanan küçük çabaların toplamıdır.",
      "Bugün harika bir şey yapmak için mükemmel bir gün!",
      "Gülümse, çünkü bu senin günün.",
      "Zorluklar seni durduramaz; yalnızca seni güçlendirebilir!"
    ];
    const sonSoz = sozler[Math.floor(Math.random() * sozler.length)];
    setSoz(sonSoz);
  }, []);

  return (
    <>
   
      <section className="hosgeldin">
        <h1>Hoş Geldiniz😄</h1>
        <p>{soz}</p>
      </section>

      <section className="hava">
        <div className="durumu">
          <h3>Bugünkü Hava Durumu</h3>
          <p>🌤️ 15°C - Güneşli</p>
        </div>
        <div className="bilgi">
          <h3>Bugünün Bilgisi</h3>
          <p>Bugün tarihte ilk e-posta 1971 yılında gönderildi!</p>
        </div>
      </section>


      <section className="etkinlik">
        <h2>Bugünün Etkinlikleri</h2>
        <ul>
          <li>🎉 Ece'nin Doğum Günü</li>
          <li>💻 Saat 14:00 - Takım Toplantısı</li>
          <li>☕ Saat 16:00 - Kahve Molası</li>
        </ul>
      </section>

 
      <section className="rahatlama">
        <h2>Rahat Bir Nefes Alın</h2>
        <img
          src="https://cdn.pixabay.com/photo/2024/06/04/02/55/yoga-8807752_640.jpg"
          alt="Meditasyon "
        />
      </section>

      
      <footer>
        <p>📅 Bugün: {new Date().toLocaleDateString()}</p>
        <p>&copy; Znr Yazılım Şirketiniz. Mutlu ve üretken bir gün dileriz!</p>
      </footer>
    </>
  );
};

export default Anasayfa;
