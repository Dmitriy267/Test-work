setTimeout(function(){
   let canvas = document.getElementById('slider');
let ctx = canvas.getContext('2d'); 
   ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineWidth=400;
    ctx.lineTo(20,0);
    ctx.fillStyle="#F6C866";
    ctx.strokeStyle ="#F6C866";
    ctx.stroke();   
},4000);

setTimeout(function(){
   let canvas = document.getElementById('slider');
let ctx = canvas.getContext('2d'); 
   ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineWidth=400;
    ctx.lineTo(80,0);
    ctx.fillStyle="#F6C866";
    ctx.strokeStyle ="#F6C866";
    ctx.stroke();   
},6000);

setTimeout(function(){
   let canvas = document.getElementById('slider');
let ctx = canvas.getContext('2d'); 
   ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineWidth=400;
    ctx.lineTo(180,0);
    ctx.fillStyle="#F6C866";
    ctx.strokeStyle ="#F6C866";
    ctx.stroke();   
},8000);

setTimeout(function(){
   let canvas = document.getElementById('slider');
let ctx = canvas.getContext('2d'); 
   ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineWidth=400;
    ctx.lineTo(240,0);
    ctx.fillStyle="#F6C866";
    ctx.strokeStyle ="#F6C866";
    ctx.stroke();   
},9000);

setTimeout(function(){
   let canvas = document.getElementById('slider');
let ctx = canvas.getContext('2d'); 
   ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineWidth=400;
    ctx.lineTo(300,0);
    ctx.fillStyle="#F6C866";
    ctx.strokeStyle ="#F6C866";
    ctx.stroke();   
},10000);

setTimeout(function(){
   let resultNumber0=document.querySelector('.result-number0');
    if( resultNumber0.style.display="none"){
        resultNumber0.style.display="block";
    }
},1000);

setTimeout(function(){
   let resultNumber0=document.querySelector('.result-number0');
     let resultNumber1=document.querySelector('.result-number1');
    if( resultNumber0.style.display="block"){
        resultNumber0.style.display="none";
        resultNumber1.style.display="block";
    }
},2000);

setTimeout(function(){
     let resultNumber1=document.querySelector('.result-number1');
    let resultNumber2=document.querySelector('.result-number2');
    if( resultNumber1.style.display="block"){
        resultNumber1.style.display="none";
        resultNumber2.style.display="block";
    }
},3000);

setTimeout(function(){
    let resultNumber2=document.querySelector('.result-number2');
     let resultNumber3=document.querySelector('.result-number3');
    if( resultNumber2.style.display="block"){
        resultNumber2.style.display="none";
        resultNumber3.style.display="block";
    }
},5000);


setTimeout(function(){
     let resultNumber3=document.querySelector('.result-number3');
    let resultNumber4=document.querySelector('.result-number4');
    if( resultNumber3.style.display="block"){
        resultNumber3.style.display="none";
        resultNumber4.style.display="block";
    }
},6000);

setTimeout(function(){
     let resultNumber4=document.querySelector('.result-number4');
    let resultNumber5=document.querySelector('.result-number5');
    if( resultNumber4.style.display="block"){
        resultNumber4.style.display="none";
        resultNumber5.style.display="block";
    }
},8000);

setTimeout(function(){
     let resultNumber5=document.querySelector('.result-number5');
    let resultNumber6=document.querySelector('.result-number6');
    if( resultNumber5.style.display="block"){
        resultNumber5.style.display="none";
        resultNumber6.style.display="block";
    }
},9000);

