import React from 'react';
import Yorum from './Yorum';
import './Yorumlar.css';

const Yorumlar = props => {
  // 🔥 Bu bileşenin parentının aşağıdaki propları düzgün gönderdiğinden emin olun.
  const { yorumlar } = props;

  return (
    <div>
      {/* her gönderi yorumları için map'le işleyerek bir Yorum bileşeni döndürün (proplarına dikkat ederek)*/}
      {yorumlar.map((comment) => (
        <Yorum yorum={comment} />
      ))}
    </div>
  );
};

export default Yorumlar;
