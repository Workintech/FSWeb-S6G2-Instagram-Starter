# React Bileşenleri- Insta Klonu

## React Bileşenleri Oluşturma ve Props Aracılığıyla Veri Aktarma

## Giriş

- Bu proje için, React kullanarak basit bir Instagram klonu oluşturacaksınız.
- Bazı sahte veriler içeren `sahte-veri.js` adlı bir dosya var. Sahte verilerdeki her nesne, sahte bir Instagram gönderisini temsil eder.
- React uygulamanız, sahte gönderi verileri alacak ve her birini ayrı bir Instagram gönderisi olarak işleyecektir.

## Talimatlar

### Görev 1: Proje Kurulumu

Bu proje, create-react-app (CRA) kullanılarak oluşturuldu. Bu projenin çalışması için CRA'yı kurmanız gerekmeyecek. Projeyi uygun bağımlılıklarla kurmak için aşağıdaki adımları izleyin.

- [ ]  Projeyi forklayarak bir kopyasını oluşturun.
- [ ]  Terminalden klonlayın
- [ ]  Projenin ana dizinine gidin
- [ ]  `npm install` komutuyla bağımlılıkları indirin (Tavsiye edilen NPM version: 18)
- [ ]  `npm start` ile çalıştırın
- [ ]  Push commits: git push origin `main`.

### Görev 2a

İş akış mantığı (bussiness logic) için linkteki diagramı inceleyin [Component ve Data Akış Diagramı](https://www.figma.com/file/RrbOO8oXYz1a3bhSKNvJ9D/S6G2-0323?node-id=0%3A1&t=0H0rwzIyCbz0CE8F-1). 
Bu diagram uygulamadaki componentler arasındaki ilişki göstermektedir. Ayrıca componentlerdeki veri iletişimi de detaylı 
olarak görselleştirilmiştir. Elinizdeki veri hangi componentten hangi componente yönlendirilmeli veya methodlar hangi 
component içinde tanımlanıp, hangi componente prop olarak aktarılmalı gibi soruların cevaplarını bulabilirsiniz.
Lütfen diagramı okumaya başlamadan önce, diagramdaki nesnelerin ne anlama geldiğini ifade eden tabloyu (yine 
diagram içinde sol tarafta) inceleyiniz.  

- [ ]  Bu uygulama, bu proje için gereken iki ana bölüme ayrılabilir: Arama Çubuğu ve Gönderiler.
- [ ]  Bu projeyi tamamlamak için, sayfanın üst kısmında oluşturulan Arama Çubuğunun tek bir örneğinin yanı sıra `sahte-veri.js` dizisindeki her nesne için ayrı bir gönderi oluşturan bir Gönderi bileşeni olacaktır.
- [ ]  Gönderileri takip etmek ve stateleri belirlemek için dün öğrendiklerinizi kullanın.
- [ ]  Gönderilerdeki "beğeni sayısını" artırmak için bir callback uygulayacak ve bunu birkaç seviyeden iç içe geçmiş bir bileşene aktaracaksınız.
- [ ]  Başlamadan önce kodu gözden geçirin. Bir sürü dosya var. Hepsine kod eklenmesi gerekli değil. App.js dosyasında başlayın ve oradaki talimatları okuyun.

---

Projenin son görüntüsü görseldeki gibi olmalıdır: [görsel için tıklayın](/project-output.png)

### Görev 3: Ek Görevler

- [ ]  sahte-veri.js dosyasında daha fazla sahte veri oluşturun ve arama çubuğuna arama işlevi ekleyin. Bunu yapmanın bir yolu filtre yöntemidir.
- [ ]  Bir input kullanarak bir gönderiye yorum ekleme özelliğini uygulayın.
- [ ]  Tüm uygulamanın stilini tamamlayın ve instagram klonunuzun verilen tasarım özelliklerine çok benzemesini sağlayın.

