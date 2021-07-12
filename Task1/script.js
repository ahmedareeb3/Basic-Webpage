var e=document.querySelector(".v1");
var i=document.querySelector(".v2");
var j=document.querySelector(".v3");
var k=document.querySelector(".v4");

var slides=document.querySelector('#slider').children;
var prevSlide=document.querySelector(".left-slide");
var nextSlide=document.querySelector(".right-slide");

var totalSlides=slides.length;
var index=0;
prevSlide.onclick=function (){next("prev");}
nextSlide.onclick=function (){next("next");}




function next(direction){

if(direction=="next"){
 index++;
 
  if(index==totalSlides){
   index=0;
  }
} 
else{
      if(index==0){
       index=totalSlides-1;
      }
      else{
       index--;
      }
}
if(index == 0){
   e.style.transform = "translateX(0px)";
  i.style.transform = "translateX(0px)";
  j.style.transform = "translateX(0px)";
  k.style.transform = "translateX(0px)";
}
if(index == 1){
  e.style.transform = "translateX(-75%)";
  i.style.transform = "translateX(-75%)";
  j.style.transform = "translateX(-75%)";
  k.style.transform = "translateX(-75%)";
 }
 if(index == 2){
  e.style.transform = "translateX(-150%)";
  i.style.transform = "translateX(-150%)";
  j.style.transform = "translateX(-150%)";
  k.style.transform = "translateX(-150%)";
 }
 if(index == 3){
  e.style.transform = "translateX(-250%)";
  i.style.transform = "translateX(-250%)";
  j.style.transform = "translateX(-250%)";
  k.style.transform = "translateX(-250%)";
 }
 if(index == 4){
  e.style.transform = "translateX(-300%)";
  i.style.transform = "translateX(-300%)";
  j.style.transform = "translateX(-300%)";
  k.style.transform = "translateX(-300%)";
 }
}
function imageSliderPage(){
  
let thumbnail = document.getElementsByClassName('thumbnail')
let activeImages = document.getElementsByClassName('active')
for(var i=0; i < thumbnail.length; i++){
    thumbnail[i].addEventListener('mouseover',function(){
        if(activeImages.length > 0){
            activeImages[0].classList.remove('active')
        }
        this.classList.add('active')
        document.getElementById('featured').src = this.src
    })
}


var sl=document.getElementById('imslid');
var ls=document.querySelector(".left");
var r=document.querySelector(".right");
r.onclick= function(){l("next");}
ls.onclick= function(){l("prev");}

function l(s){
if(s == "next"){
sl.style.transform= "translateX(-53%)";
console.log('hi');
}
if(s == "prev"){
sl.style.transform= "translateX(-1%)";
console.log('hi');
}
}

}


function popupth(){
  var sup = document.querySelector('.signup');
  var th= document.querySelector('.thank');
  sup.onclick = function(){
      aat();
  }
function aat(){
   th.classList.add('tha');
}
}