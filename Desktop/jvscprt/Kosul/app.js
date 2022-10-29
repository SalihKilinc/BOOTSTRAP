 /* var marka="Volvo";
var model ="CX90";
var automatic ="yes";

if (automatic == "yes"){
console.log("La voiture est automatic");
  
}else{
    console.log("La voiture n'est pas automatic");
}

automatic=true;

if (automatic){
    console.log(marka + " " + model + " otomatik" );
}

if (automatic=="true") {
    console.log("true");
    
}
if (10==="10") {     // uc tane cift cizgi string mi yoksa integer mi oldugunu 
                      //kontrol eder ve ona gore sonuc verir bir integer bir string varsa sonuc bos doner
    console.log("sayilar esittir");
    
}*/
/*
const vites= "3";

if(vites=="1"){
    console.log("La voiture est automatic");
}else if (vites =="2"){
    console.log("arac automatic");

}else{
    console.log("yanlis deger grildi");
}

const vites1= "2";

if(vites1=="1"){
    console.log("La voiture est automatic");
}else if (vites1 =="2"){
    console.log("arac automatic");

}else{
    console.log("yanlis deger grildi");
}


;
switch(vites1){
    case "1": console.log("La voiture est automatic");
    break;
    case "2": console.log("La voiture est automatic");
    break;
    default: console.log("Yanlis deger girildi");
}
*/



//=============Practice

        /* UYGULAMA 1:  
        Dogum yilina gore ehliyet kontrolu yap
         ve sonuc ver eger 18 yas altinda ise kac yili kalmis onu hessapla

         UYGULAMA 2:
          Girilen ay bilgisine gore mevsim hesapla 
        */  /*
const dogum=prompt("Please your enter born:");
const years=2022;
const yas=years-dogum;
console.log(yas);

if (yas<18){
    console.log("Ehliyet almazsiniz");
    console.log("Vous pouvez attendre " +(18-yas)+ " " +"l'anné pour permis de counduire");
}else if (yas>=18){
 console.log("Ehliyet alabilirsiniz")
} else{
    console.log("yanlis deger girdiniz");
}*/

var ay =prompt("Ay  giriniz :");
switch (ay) {
    case   "1":
    case "2":
    console.log("Kis mevsimi");
break;
case "3":
case "4":
case "5":
console.log("ilkbahar mevsimi");
break;
case "6":
case "7":
case "8":
console.log("Yaz mevsimi");
break;
case "9":
case "10":
case "11":
console.log("Sonbahar");
break;
case "12":
console.log("kis mevsimi");
break;

default:



}
