var btn=document.getElementById("btn");
var rand = document.getElementById("rand");
var show=document.getElementById("show");
var show2=document.getElementById("show2");

var par=document.getElementById("para");
var par2=document.getElementById("para2");

const parent = document.getElementById('chessboard');

var ele = document.getElementById('timer');


function start(){

var numbers=[1,2,3,4,5,6,7,8];
var characters=["a","b","c","d","e","f","g","h"];






function getRandom(max) {
    return Math.floor(Math.random() * max);
  }


var random=`${characters[getRandom(8)]}${numbers[getRandom(8)]}`;
rand.innerHTML= `${random}`;

var score = 0;

var array1=[];
var array2=[];
const touch = function (event) {

    if(random == event.target.id){
     
        score++;
        document.getElementById("score").innerHTML = score;
        document.getElementById("random").innerHTML = random;
        // event.target.style.backgroundColor = "silver";
        array1=random; 
     random=`${characters[getRandom(8)]}${numbers[getRandom(8)]}`;
     rand.innerHTML= `${random}`;
     for(let i=0;i<array1.length;i++)
     {
par.innerHTML="Correct :";
    show.innerHTML+=`${array1[i]}`+" ";

     }
    }  

    
    else{
  
            // event.target.style.backgroundColor = "red";
            document.getElementById("random").innerHTML = random; 
            array2=random; 
            random=`${characters[getRandom(8)]}${numbers[getRandom(8)]}`;
            rand.innerHTML= `${random}`;
            for(let i=0;i<array2.length;i++)
     {
        par2.innerHTML="Not correct :";
     show2.innerHTML+=`${array2[i]}`+" ";
     }
}




};




var timer;
(function () {
    var sec = 1;
    timer = setInterval(() => {
        ele.innerHTML = '00:' + sec;

        if ('00:' + sec === "00:30") {
            clearInterval(timer);

            ele.innerHTML = '00:' + sec + " ";

            parent.removeEventListener('click', touch);
            clearInterval(clock);

        }
        else {
            sec++;
            parent.addEventListener('click', touch);
        }


    }, 1000)

})();




var clock = setInterval(setClock, 1000)

const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 30

  setRotation(secondHand, secondsRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock();

function reset(){
  let score = 0;
  let array1=[];
let array2=[];
  document.getElementById("score").innerHTML = score;
  par2.innerHTML=" ";
  par.innerHTML="";
  show.innerHTML=array1;
  show2.innerHTML=array2
 
};
reset();

};


