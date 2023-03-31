import React from "react";
import Yorumlar from "../Yorumlar/Yorumlar";
import BeğenBölümü from "./BeğenBölümü";
import GönderiBaşlığı from "./GönderiBaşlığı";

const Gönderi = (props) => {
  // 🔥 Bu bileşenin parentının aşağıdaki propları düzgün gönderdiğinden emin olun.
  const { gönderi, gonderiyiBegen } = props;

  return (
    <div className="post-border">
      <GönderiBaşlığı
        username={gönderi.username}
        thumbnailUrl={gönderi.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={gönderi.imageUrl}
        />
      </div>
      {/* BeğenBölümü düzgün çalışması için ihtiyaç duyduğu tüm proplara sahip mi? */}
      <BeğenBölümü
        begenSayisi={gönderi.likes}
        gonderiyiBegen={() => gonderiyiBegen(gönderi.id)}
      />
      {/* Yorumlar da proplara dikkat istiyor! */}
      <Yorumlar yorumlar={gönderi.comments} />
    </div>
  );
};
export default Gönderi;