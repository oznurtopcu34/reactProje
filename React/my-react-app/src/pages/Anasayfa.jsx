import React from 'react';

const Anasayfa = () => {
  const card = [
    { resimAdi: "rcv", aciklama: "Bcn", image: "/src/pages/indir.jpeg" },

  ];

  return (
    <div>
      {card.map((item, index) => (
        <div key={index}>
          <img src={item.image} alt={item.resimAdi} />
          <h1>{item.resimAdi}</h1>
          <p>{item.aciklama}</p>
        </div>
      ))}
    </div>
  );
};

export default Anasayfa;
