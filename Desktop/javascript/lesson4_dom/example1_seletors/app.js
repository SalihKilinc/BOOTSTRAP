// GETELEMENTEDBYID

const write =document.getElementById('money').style; // document.getElementById ile money elemanini htmlden cagirip const write atyip islem yaptik
write.backgroundColor="yellowgreen";
write.color="blueviolet";
write.fontSize="23px";

const button=document.getElementById('btn');
button.style.width="120px";
button.style.color="yellow";
button.style.fontSize="20px";
button.style.backgroundColor="blueviolet";
button.textContent="Chércher"; // buton icinde olan yazi  degisti (tag icinde  olan yazilar degisti)

// GETELEMENTED BY TAGNAME

const picture= document.getElementsByTagName("img");
picture[0].style.width="250px"; //resmin genisligini verdik index deger 0 olani aldik
picture[0].style.height="199px";
picture[1].style.border="3px solid red";
picture[1].style.borderRadius="25%";
picture[0].style.borderRadius="25%";
picture[1].style.margin="55px";


// Getelementbyclasse

const title=document.getElementsByClassName("h1");
title[0].style.textAlign="center";


//querySelector
// en yaygin kullanim cagirma yolu

document.querySelector(".text1"). // title classi verdik html den sonra baslik degistirdik
textContent="Dom Selector item 😍";


document.querySelector("#item").style.backgroundImage="linear-gradient(green,red,pink)";
//  linear-gradient bu stille renklendirmeyi hep beraber yaptik body e class verdik ve renklendirme yaptik