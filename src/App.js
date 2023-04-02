import React from "react";

import Karakter from "./components/Karakter";

const App = () => {
  return (
    <div className="App">
      <h1 className="Header">STARWARS CHARACTERS</h1>
      <Karakter />
    </div>
  );
};

export default App;

/*Esnek Mülakat Soruları
1-React JS nedir ve hangi sorunları çözer? Yanıtınızı sınıfta tanıtılan kavramlarla ve web'deki kişisel araştırmanızla destekleyin.
2-Bileşen statelerini tanımlayın.
3-Propları açıklayın.
4-Side effektler nelerdir ve bir React bileşenindeki efektleri belirli state veya prop değişiklikleriyle nasıl senkronize edersiniz?

CEVAPLAR:

1-React bir JS kütüphanesidir. Özellikle tekrar kullanılabilen componentleri kullanarak uygulama performansını artırır ve Virtual DOM kullanması sayesinde web sayfalarının daha hızlı çalışmasına olanak sağlar. 
2-Bileşenler bir arayüz uygulamasının farklı parçalarını temsil eder. Bileşenler farklı alt bileşenler içerebilir ve data akışı proplar sayesinde gerçekleşir.
3-Proplar bir bileşene ait özellik değelerini içerir ve bileşenler arasındaki data akışını sağlar.
4-Side effektler api requestleri, zamanlayıcılar gibi işlevlerin tetiklenmesi ile oluşan etkileşimlerdir. React'ta, side effect'leri belirlemek ve bunları state veya prop değerlerine bağlamak için "useEffect" kullanılır.





*/
