const ButtonYes=document.querySelector('.button-yes');
const ButtonNot=document.querySelector('.button-not');
const ButtonSometimes=document.querySelector('.button-sometimes');
ButtonYes.addEventListener('click', ()=>{
   console.log('Да') 
})

ButtonNot.addEventListener('click', ()=>{
   console.log('Нет') 
})

ButtonSometimes.addEventListener('click', ()=>{
   console.log('Иногда') 
})