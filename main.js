
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
function Creatcar(name,image,disc,price){
 return {name:name,
        image:image,
        disc:disc,
        price:price}
}
function makecarlist(){
    var obj={}
    obj.arr=[]
    obj.add=add
    return obj
}
var add=function(name,image,disc,price){
    this.arr.push(Creatcar(name,image,disc,price))
}
var car1=add("bmwporsche 911 gt3","https://i.ytimg.com/vi/5Tux80aw9lA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDUT0VOyixQkSrb39g5YAwi2SnEYA","Consommation combinée (l/100 km)(gamme): 13,7 – 13,8 l/100 km, Emissions de CO2 combinée (g/km)(gamme): 310 – 312 g/km",212000)
var car2=add("porsche taycan","https://www.largus.fr/images/styles/max_1300x1300/public/2024-03/porsche-taycan-turbo-gt-2024-violet-avd2-mk.jpg?itok=lghkMKs3","Le Taycan est une berline électrique commercialisée par le constructeur automobile allemand Porsche à partir de 2019. Il s'agit du premier modèle électrique du constructeur de Stuttgart. Elle est dérivée en version baroudeuse cinq portes nommée Cross Turismo en 2021, et break de chasse sportif Sport Turismo en 2022.",215300)
var car3=add("ferrari spider","https://cdn.ferrari.com/cms/dws/media/img/resize/610a6a0c81140d0031397110?width=1080","La vitesse maximale passe de 120 à 131,3 km/h, la vitesse moyenne est portée à 46,5 km/h et la durée totale du cycle est de 30 minutes, soit 10 minutes de plus que le précédent NEDC. La distance parcourue est multipliée par deux, passant de 11 à 23,25 kilomètres.",356989)
var car4=add("mercedes AMG 1","https://f1rst-motors.s3.me-central-1.amazonaws.com/cars/1709637962483-9%20%283%29.webp","Caractéristiques. La Mercedes AMG ONE est équipée d'un moteur longitudinal central six cylindres en V suralimenté et de quatre moteurs électriques développant une puissance maximum de 1064 ch à 9000 trs/min transmise aux quatres roues par le biais d'une boite de vitesse automatique à 7 rapports",300000000)
var car5=add("bmw i8","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThF2udAsDddGHhFgwhHDpiSKC_rwVKA1qXIw&s",disc,price)
var car6=add(name,image,disc,price)
//more cars
//creat div html  
.append