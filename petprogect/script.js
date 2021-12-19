//data
let date = new Date();
let arr=['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря',];
let ar=Number(date.getMonth());console.log(ar);
console.log(arr[ar]);
function displayTime() {
    let date = new Date();
    let time =date.getHours()+": "+ date.getMinutes()+": "+ date.getSeconds()+ " " + 
    date.getDate()+" "+arr[ar];
    document.querySelector('.tim').innerHTML = time;
 }
  const createClock = setInterval(displayTime, 1000);
 window.onload=function()
 {	let secund=document.querySelector('.strelka');
     setInterval(fsec,1000);
     let now = new Date();
     var sec=(now.getSeconds()*Math.PI) / 180;
     function fsec()
     {	  
         secund.style.transform='rotate('+sec+'deg)';
         sec+=6;
     }
 }
//timer
let a;let b=1;n=1;
let tim=document.querySelector('.p2');
let tim1=document.querySelector('.p2_1');
let tim2=document.querySelector('.p2_2');
let prog=document.querySelector("#prog");
let h1=+0;
let m1=+0;
let s1=+0;
tim.innerHTML=0;
tim1.innerHTML=0;
tim2.innerHTML=0;

function timer(h1,m1,s1)
{ 
a=0; let hor=0;
    tim.innerHTML=s1;
    tim1.innerHTML=m1;
    tim2.innerHTML=h1;
    var start=s1;
    tim.innerHTML=s1;
      window.ti = setInterval(function(){
    tim.innerHTML++;
    prog.value=start;
    start++;
    hor++;
    if(prog.value===60)
    {
    start=0;
    tim.innerHTML=0;
    tim1.innerHTML=Number(tim1.innerHTML)+parseInt(b); 
    }
    if(tim1.innerHTML==60)
    {   tim2.innerHTML=Number(tim2.innerHTML)+parseInt(n);
        hor=0;
        tim1.innerHTML=0;
    }   
  }, 1000);	
};

const button_start = document.querySelector(".c-btn1");

document.addEventListener("click", show);
function show(event) {
    if (event.target.closest(".c-btn1 .sp1")) {
        button_start.classList.remove('_active');
        button_start.classList.toggle('_active');
        let hi=tim2.innerHTML;
        let mi=tim1.innerHTML;
        let si=tim.innerHTML;
        timer(hi,mi,si);

        for (var i = 0; i < u.length; i++) {
            u[i].addEventListener("click", anime);
        }
    }
    if (event.target.closest(".c-btn1 .sp2")) {
        button_start.classList.toggle('_active');
        button_start.classList.remove('_active');
        clearInterval(window.ti);
    }
    if (event.target.closest(".perv")) {
        button_start.classList.toggle('_active');
        button_start.classList.remove('_active');
        clearInterval(window.ti);
        tim.innerHTML=0;
        tim1.innerHTML=0;
        tim2.innerHTML=0;
        prog.value=0;

        if (event.target.closest(".c-btn1 .sp1")) {
            button_start.classList.remove('_active');
            button_start.classList.toggle('_active');
            }
        if (event.target.closest(".c-btn1 .sp2")) {
            button_start.classList.toggle('_active');
            button_start.classList.remove('_active');
        }
    }
}
   
//time
var d = document.querySelector(".timer");
var t = new Date();
var h = t.getHours();
var m = t.getMinutes();
var s = t.getSeconds();
var res = ""

var odlData = localStorage.getItem('p');
document.querySelector(".season").style.backgroundImage = odlData;
//document.querySelector(".season").style.backgroundImage="url('./image/ded.png')";