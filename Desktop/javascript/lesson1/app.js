//=============================
//KONSOL
//console.log('Hello javs');
//console.log('Bonjour a tous');
//alert("attention") // sayfa basinda onay izni verdi
//console.warn("Faitez attention"); // consolda uyari yazisi cikarir 
//console.error("C'est un faute"); // hata yazisi verir consol da
//prompt("Entre votre nom");// adinizi girmek icin live serverda eklenti verir

//===Degisken Tanimlama=======
//======Var================
var isim="Selma"; // Cok fazla kullanilan bir degisken degildir asasgida ki ornekle anlasilabilir
console.log(typeof isim);
isim=523;
console.log(typeof isim);


// ===== CONST =================================================
// const ne aldiysa oyle kalir baslangicta olan deger sabit kalir Var gibi degil
const piSayisi=3.14;
//piSayisi=3;



// ===LET============
// DEgisir icinde kendisi private icinde private  public icinde public gibi 
let fiyat;
fiyat=10;
console.log(typeof fiyat);
fiyat="Tarcin";
console.log(fiyat);


//String tanimlamak icin 3 farkli karakter kullanilirsa
let name1="Salih";
let name2="Havva";
let name3="Kenan";
console.log(name2);


// ==========ARITMETIK ORTALAMALAR================================================================
const cola=8;
const cips=5;
const brad=4;
console.log("Prix total: " , cola + cips+ brad);

const ad="Mehmet";
const lastname="Kenan";
console.log(ad+lastname);

const s1=5;
let s2="5";
console.log(s1+s2); // Consol 55 gosterir VS code bu durumlarda tercihini string den yana kullanilir

console.log("My name is "+ ""+ ad +""+"LastName"  + "" +  lastname );

// todo Template literal isin kolay kismi $ ve backtic bu stil otomatik olarak bosluk vererek yapiyor

console.log(`benim adim ${ad} benim yasim ${lastname}`);


// todo taban ve us carpimi
const taban =2;
const us=5;
console.log(taban**us);


// ! mod alma %

const sayi=123;
const yuzler=123%100;
console.log(yuzler);


// todo karsilastirma operatorleri

const a1=4;
const a2="4";
console.log(a1==a2);
console.log(a1===a2); // uc tane gelirse tipinide inceler ve dogru karar verir

//! Tip degisimleri

const para ="55";
console.log(Number(para)+20); // para olarak atanan degeri 20 ile degistirdik
const sayi5=58;
console.log(String(sayi5)+sayi5);
console.log(typeof sayi5); // Stringe cevirdik
