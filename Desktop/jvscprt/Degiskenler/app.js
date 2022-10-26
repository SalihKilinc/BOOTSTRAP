/* 
Bir ogrencinin bilgilerini alip hesaplayan program yapalim
** Entre name
** your number
** F/M
**your lesson
**1. exama
** 2. exama
** your moyen
*/

var ad = prompt("Your name");
var ogrno = prompt("Enter your number");
var cinsiyet = prompt("cinsiyet");
var ders = prompt("Lesson");
var not1 = prompt("not 1:");
var not2= prompt("not 2:");

var ortalama = ( Number (not1 )+  Number(not2))/2;  // Number koymasak string olarak cikar consolda









console.log(ogrno + "numarali " + ad + " (" + cinsiyet + ")  " + "isimli ogrencinin "+ ders + "dersinden aldigi not ortalamasi" + ortalama);