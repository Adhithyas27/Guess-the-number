document.querySelector("#span3").innerHTML=0;
var temp=document.querySelector("#span3").innerHTML
var number=Math.floor(Math.random()*20)+1
document.querySelector("#bt1").addEventListener("click",function(){
    number=Math.floor(Math.random()*20)+1
    n1=20;
    document.querySelector("input").value='';
    document.querySelector("#span1").innerHTML='starting.....'
    document.querySelector("#span2").innerHTML="20";
    document.querySelector(".container").classList.remove("gameover")
    document.querySelector("#bt2").classList.remove("invisible")
    document.querySelector('#id2').innerHTML='Guess the number';
    document.querySelector(".container").classList.remove("win")
    document.querySelector(".qmark").innerHTML="?";
    

})
var n1=20;

document.querySelector("#bt2").addEventListener("click",function(){
    var input=document.querySelector("input").value;
    if(input>number){
        document.querySelector("#span1").innerHTML='Too high.';
        n1--;
        document.querySelector("#span2").innerHTML=n1;
        if(n1==0){
            document.querySelector(".container").classList.add("gameover")
        }
     

    }
    else if(input<number){
        document.querySelector("#span1").innerHTML='Too low.'
        n1--;
        document.querySelector("#span2").innerHTML=n1;
        
        if(n1==0){
            document.querySelector(".container").classList.add("gameover")
            document.querySelector("#bt2").classList.add("invisible")
            

            
        }
   }
   else if(input==number){
    document.querySelector("#span1").innerHTML='Correct value....'
    document.querySelector('#id2').innerHTML="Number found";
    document.querySelector(".container").classList.add("win")
    document.querySelector(".qmark").innerHTML=" "+number+" ";
    var temp=n1;
       if(temp<n1){
       document.querySelector("#span3").innerHTML=n1;
       temp=n1;
       }
    
   }
})

