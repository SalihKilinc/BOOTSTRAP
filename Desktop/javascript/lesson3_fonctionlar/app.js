// Fonksiyonlar


// Function tanimi
function writeCity() 
{
    console.log("Genéve");
}
// todo function cagirilmasi
writeCity();

// Tek mi cift mi sayi ornegi 

//const number =prompt("Please enter number");

//console.log(  tekCift  (number));

//function tekCift(number) {
  //return number%2==0? `${number} cifttir`:`${number}tektir `

//} 


// 2. yontem :function exprestion (en yaygin olani)

const ciftTek=function (number) {
    return number%2==0? "Cift":"Tek"
}
console.log(ciftTek(5));

//Examle 2 En buyuk sayi tespiti

let findNumbergrand=function (x,y,z) {
let bigNumber;
if (x>y&&x>z) {
    bigNumber=x;
  
}
else if (y>x && y<z){ bigNumber=y;}
else{
    bigNumber=z;
} return bigNumber;
}
 console.log(findNumbergrand(8,3,7));


 // todo 3. Yontem Arrow ile (arrow ok demek)
 const doubleNumber=(number)=>(number%2==0? "double": "odd") ;
 
 console.log("Number"+""+ doubleNumber (99))


 //! Ornek us alma

 const taban=prompt("tabangir");
 const us =prompt("us");
 const ustAl=(taban,us)=> taban**us;

 console.log( ustAl(taban,us));

