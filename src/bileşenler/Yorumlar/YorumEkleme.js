import React, { useState } from "react";

const YorumEklemeBolumu = (props) => {
  const { yorumEkle } = props;
  const [yorumText, setYorumText] = useState("");
  const handleChange = (e) => {
    setYorumText(e.target.value);
  };
  return (
    <div className="comment-input">
      <input type={"text"} onChange={handleChange} />
      <button onClick={() => yorumEkle(yorumText)}>Yorum yap</button>
    </div>
  );
};

export default YorumEklemeBolumu;
