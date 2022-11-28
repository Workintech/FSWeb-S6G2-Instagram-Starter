// Bu dosyayı değiştirmenize gerek yok
import React from 'react';

const Yorum = props => {
  // 🔥 Bu bileşenin parentının aşağıdaki propları düzgün gönderdiğinden emin olun.
  const { yorum } = props;

  return (
    <div className='comment-text'>
      <span className='user'>{yorum.username}</span>
      {' '}
      <span className='comment'>{yorum.text}</span>
    </div>
  );
};


export default Yorum;
