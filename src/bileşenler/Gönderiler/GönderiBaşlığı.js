// Bu dosyada bir değişiklik yapmanıza gerek yok
import React from 'react';

const GönderiBaşlığı = props => {
  // 🔥 Bu bileşenin parentının aşağıdaki propları düzgün gönderdiğinden emin olun.
  const { thumbnailUrl, username } = props;

  return (
    <div className='post-header'>
      <div className='post-thumb-wrapper'>
        <img
          alt='post header'
          className='post-thumb'
          src={thumbnailUrl}
        />
      </div>
      <h2>{username}</h2>
    </div>
  );
};

export default GönderiBaşlığı;
