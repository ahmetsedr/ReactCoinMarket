[![alt text](https://i.ytimg.com/vi/DLvcmdBgT7k/hq720.jpg)](https://www.youtube.com/watch?v=DLvcmdBgT7k)

## Projenin Oluşturulması

* Terminalde `npm init vite@latest my-crypto-app --template react` komutu ile yeni bir Vite projesi oluşturun.
* `my-crypto-app` adlı proje dizinine gidin: `cd my-crypto-app`.
* Projenin çalıştırılması için `npm install` komutunu çalıştırın.
* `npm run dev` komutu ile proje tarayıcınızda açılacaktır.

## Kripto Para Birimi API'si ile Veri Alma
* CoinGecko gibi bir kripto para birimi API'si seçin.
* API'den veri çekebilmek için `fetch` fonksiyonunu kullanabilirsiniz.
* Verileri işlemek ve göstermek için `useState` ve `useEffect` hook'larını kullanabilirsiniz.

## Verilerin Listelenmesi
* Verileri listeleyebilmek için bir bileşen oluşturun. Örneğin `CryptoList`.
* `map` fonksiyonu ile verileri döngüsel olarak gösterin.
* Liste elemanlarının anahtarlarını belirtin.
* Her veri için bir `li` etiketi oluşturun ve gerekli verileri gösterin.

## Arama İşlevselliği Ekleme
* Arama kutusu ve butonu ekleyin. Bu işlem için bir `input` ve `button` etiketi kullanabilirsiniz.
* `useState` hook'u kullanarak arama terimini takip edecek bir state değişkeni oluşturun. Örneğin `searchTerm`.
* `onChange` event'ini kullanarak arama kutusuna girilen değeri `searchTerm` state değişkenine atayın.
* Verileri filtrelemek için `filter` fonksiyonunu kullanın. Filtreleme işlemini `searchTerm` state değişkenine göre yapabilirsiniz.
* Filtrelenmiş verileri `CryptoList` bileşenine gönderin.

## ReactStrap ya da başka css programı kullanabilirsiniz.
