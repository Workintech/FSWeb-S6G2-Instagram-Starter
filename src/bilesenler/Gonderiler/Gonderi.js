import React from "react";
import Yorumlar from "../Yorumlar/Yorumlar";
import BegenBolumu from "./BegenBolumu";
import GonderiBasligi from "./GonderiBasligi";

const Gonderi = (props) => {
  // 🔥 Bu bileşenin parentının aşağıdaki propları düzgün gönderdiğinden emin olun.
  const { postData, gonderiyiBegen } = props;

  return (
    <div className='post-border'>
      <GonderiBasligi
        username={postData.username}
        thumbnailUrl={postData.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={postData.imageUrl}
        />
      </div>
      {/* BeğenBölümü düzgün çalışması için ihtiyaç duyduğu tüm proplara sahip mi? */}
      <BegenBolumu
        gonderiyiBegen= {() => gonderiyiBegen(postData.id)} 
        likeNr = {postData.likes}
      />
      {/* Yorumlar da proplara dikkat istiyor! */}
      <Yorumlar yorumlar={postData.comments}/>
    </div>
  );
};

export default Gonderi;
