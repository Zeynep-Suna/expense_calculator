// * Bağlantı kontrolü
// console.log(`Selam Js`);

// ! HTML den elemanları çağırma
// Forma erişme
var form = document.querySelector("#expense-form");
// console.log(form);

// Harcama İnputuna erişme
var harcamaInput = document.querySelector("#expense-name")
// console.log(harcamaInput);

// Miktar inputuna erişme
var fiyatInput = document.querySelector("#expense-amount");
// Harcama kısımının kapsayıcısına erişme
var harcamaKapsayıcısı = document.querySelector("#expense");
// console.log(harcamaKapsayıcısı);

// console.log(fiyatInput);

// ! Formun gönderilmesi halinde çalışacak fonksiyon
function harcamaEkle(e) {
  // Formun sayfa yenilemesini engelledik
  e.preventDefault();
  // İnputların boş olma durumunu kontrol ettik
  if (harcamaInput.value === "" || fiyatInput.value === "") {
    alert("İnputları doldurunuz !!");
    // Eğer if bloğu çalışırsa bu yapıyı durdur.Diğer kısım çalışmasın
    return;
  }
  // Harcama inputunun değerine eriş
  var harcamaAdı = harcamaInput.value;
  //   console.log(harcamaAdı);
  // Fiyat inputunun değerine eriş
  var harcamaFiyat = fiyatInput.value;
  //   console.log(harcamaFiyat);

  // Html de bir eleman oluşturduk
  var harcamaDiv = document.createElement("div");
  // Html de oluşturulan elemena bir class ekledik
  harcamaDiv.classList.add("harcama");
  // Html de oluşturulan bu elemanın içeriğini belirleme
  harcamaDiv.innerHTML = `
    <h2>
    ${harcamaAdı} </h2>
    <h3> ${harcamaFiyat} TL</h3>
    <img id="delete-btn" src="images/trash.png" alt="trash-img" />
  `;
  // Html de oluşturulan class eklenen,içeriği belirlenen bu elemanı Dom ağacına ekledik
  harcamaKapsayıcısı.appendChild(harcamaDiv);

  // İnputları içeriğini sıfırla
  harcamaInput.value = "";
  fiyatInput.value = "";

  //   console.log(`Çalıştı`);
}
// Forma olay izleyicisi eklendi
form.addEventListener("submit", harcamaEkle);

// Ekrandan cartı silen fonksiyon

function elemanSil(e) {
  var element = e.target;
  // Sil butonuna tıklanınca elemanı ekrandan kaldır
  if (element.id === "delete-btn") {
    // * parentElement ==> Bir elemanın kapsayıcısına erişmek için kullanılır.
    // Belirlenen elemanın ekrandan kaldırdık
    element.parentElement.remove();
  }
  //   console.log(`Silme fonk. çalıştı`);
}

harcamaKapsayıcısı.addEventListener("click", elemanSil);