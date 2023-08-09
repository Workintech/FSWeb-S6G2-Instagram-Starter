/* 
  Buradan başlayın ve iç içe geçmiş bileşenlere doğru ilerleyin.
  Projedeki tüm dosyalara kod eklenmesi gerekmez.
  Nerelerde değişiklik yapmanız gerektiğini anlamak için her dosyayı inceleyin.
*/

// State hook u import edin
import React, {useState} from 'react';
import sahteVeri from "./sahte-veri";
import Gönderiler from "./bilesenler/Gonderiler/Gonderiler";
import AramaÇubuğu from "./bilesenler/AramaCubugu/AramaCubugu";

// Gönderiler (çoğul!) ve AramaÇubuğu bileşenlerini import edin, çünkü bunlar App bileşeni içinde kullanılacak
// sahteVeri'yi import edin
import './App.css';

const App = () => {
  // Gönderi nesneleri dizisini tutmak için "gonderiler" adlı bir state oluşturun, **sahteVeri'yi yükleyin**.
  // Artık sahteVeri'ye ihtiyacınız olmayacak.
  // Arama çubuğunun çalışması için , arama kriterini tutacak başka bir state'e ihtiyacımız olacak.

  const [gonderiler, setGonderiler] = useState(sahteVeri);
	
  const searchAction = (searchTerm) => {
    let newPostsArray = [];

    if(!!searchTerm){

      gonderiler.map((item)=>{
        if(item.username.includes(searchTerm))
        {
          newPostsArray.push(item);
        }
      });
    }
    else{
      newPostsArray = [...sahteVeri];
    }

    setGonderiler(newPostsArray);
    
  }

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

    const newPostsArray = [];

    gonderiler.map((item)=>{
      if(item.id === gonderiID)
      {
        item.likes++
      }
      newPostsArray.push(item);
    });
    setGonderiler(newPostsArray);
  };

  return (
    <div className='App'>
      <AramaÇubuğu searchGitsin = {searchAction}/>
      <Gönderiler gonderiyiBegen = {gonderiyiBegen} posts = {gonderiler} />
      {/* AramaÇubuğu ve Gönderiler'i render etmesi için buraya ekleyin */}
      {/* Her bileşenin hangi proplara ihtiyaç duyduğunu kontrol edin, eğer ihtiyaç varsa ekleyin! */}
    </div>
  );
};

export default App;