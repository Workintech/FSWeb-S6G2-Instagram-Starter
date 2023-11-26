import React from "react";
import Gonderi from "./Gonderi";
import "./Gonderiler.css";
//import BegenBolumu from "./BegenBolumu";
import Yorumlar from "../Yorumlar/Yorumlar";

const Gonderiler = (props) => {
  
  // 🔥 Gönderiler'in ebeveyninin doğru değişkenleri doğru şekilde ilettiğine emin olun!
  const { gonderiyiBegen, gonderiler } = props;

  return (
    <div className="posts-container-wrapper">
      
      {/* gönderiler dizisini işleyip her döngüde bir Gönderi bileşeni çağırın*/
       gonderiler.map((item) =>{
        return(<Gonderi key ={item.id} gonderi = {item} gonderiyiBegen = {gonderiyiBegen} />)
    })
      
      }
       
      {/* Gönderi'nin çağırılmasında hangi propları kullanmanız gerektiğine dikkat edin! */}
    </div>
  );
};
<Yorumlar/>
export default Gonderiler;
