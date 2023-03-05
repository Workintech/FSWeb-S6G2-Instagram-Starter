/* 
  Buradan başlayın ve iç içe geçmiş bileşenlere doğru ilerleyin.
  Projedeki tüm dosyalara kod eklenmesi gerekmez.
  Nerelerde değişiklik yapmanız gerektiğini anlamak için her dosyayı inceleyin.
*/

// State hook u import edin
import React, { useState } from "react";

// Gönderiler (çoğul!) ve AramaÇubuğu bileşenlerini import edin, çünkü bunlar App bileşeni içinde kullanılacak
// sahteVeri'yi import edin
import Gönderiler from "./bileşenler/Gönderiler/Gönderiler";
import AramaÇubuğu from "./bileşenler/AramaÇubuğu/AramaÇubuğu";
import sahteVeri from "./sahte-veri";

import "./App.css";

const App = () => {
  // Gönderi nesneleri dizisini tutmak için "gonderiler" adlı bir state oluşturun, **sahteVeri'yi yükleyin**.
  // Artık sahteVeri'ye ihtiyacınız olmayacak.
  // Arama çubuğunun çalışması için , arama kriterini tutacak başka bir state'e ihtiyacımız olacak.
  const [gonderiler, setGonderiler] = useState(sahteVeri);
  const [alreadyLikedItems, setAlreadyLikedItems] = useState([]);

  const gonderiyiBegen = (gonderiID) => {
    /*
      Bu fonksiyon, belirli bir id ile gönderinin beğeni sayısını bir artırma amacına hizmet eder.

      Uygulamanın durumu, React ağacının en üstünde bulunur, ancak iç içe geçmiş bileşenlerin stateleri değiştirememesi adil olmaz!
      Bu fonksiyon, belirli bir gönderinin beğeni sayısını artırılmasına olanak sağlamak amacıyla iç içe geçmiş bileşenlere aktarılır.

	  "setGonderi" yi çağırın ve state ine "posts.map" çağrısını iletin.
      `map` içine iletilen callback aşağıdaki mantığı gerçekleştirir:
        - gönderinin idsi "gonderiID" ile eşleşirse, istenen değerlerle yeni bir gönderi nesnesi döndürün.
        - aksi takdirde, sadece gönderi nesnesini değiştirmeden döndürün.
     */

    alreadyLikedItems.includes(gonderiID)
      ? setAlreadyLikedItems((e) => e.filter((id) => id !== gonderiID))
      : setAlreadyLikedItems((e) => [...e, gonderiID]);

    setGonderiler(
      gonderiler.map((gonderi) => {
        if (
          gonderi.id === gonderiID &&
          !alreadyLikedItems.includes(gonderiID)
        ) {
          return {
            ...gonderi,
            likes: gonderi.likes + 1,
          };
        } else if (
          gonderi.id === gonderiID &&
          alreadyLikedItems.includes(gonderiID)
        ) {
          return {
            ...gonderi,
            likes: gonderi.likes - 1,
          };
        } else {
          return gonderi;
        }
      })
    );
  };

  const yorumEkle = (gonderiID, yorum) => {
    console.log(gonderiID);
    setGonderiler(
      gonderiler.map((gonderi) => {
        if (gonderi.id === gonderiID) {
          gonderi.comments.push({
            id: 99,
            username: "alper",
            text: yorum,
          });
        }
        return gonderi;
      })
    );
  };

  return (
    <div className="App">
      {/* AramaÇubuğu ve Gönderiler'i render etmesi için buraya ekleyin */}
      <AramaÇubuğu />
      <Gönderiler
        gonderiler={gonderiler}
        gonderiyiBegen={gonderiyiBegen}
        yorumEkle={yorumEkle}
      />

      {/* Her bileşenin hangi proplara ihtiyaç duyduğunu kontrol edin, eğer ihtiyaç varsa ekleyin! */}
    </div>
  );
};

export default App;
