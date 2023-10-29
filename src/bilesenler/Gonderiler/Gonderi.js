import React from "react";
import Yorumlar from "../Yorumlar/Yorumlar";
import BegenBolumu from "./BegenBolumu";
import GonderiBasligi from "./GonderiBasligi";

const Gonderi = (props) => {
  // 🔥 Bu bileşenin parentının aşağıdaki propları düzgün gönderdiğinden emin olun.
  const { gonderi, gonderiyiBegen } = props;

  return (
    <div className="post-border">
      <GonderiBasligi
        username={gonderi.username}
        thumbnailUrl={gonderi.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={gonderi.imageUrl}
        />
      </div>
      {/* BegenBolumu düzgün çalışması için ihtiyaç duyduğu tüm proplara sahip mi? */}
      <BegenBolumu gonderiyiBegen={() => gonderiyiBegen(gonderi.id)} begeniSayisi={gonderi.likes} />
      {/* Yorumlar da proplara dikkat istiyor! */}
      <Yorumlar yorumlar={gonderi.comments}/>
    </div>
  );
};

export default Gonderi;
