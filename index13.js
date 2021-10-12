const ifone13Button=document.querySelector(".ifone13-button");
const MyResult=document.querySelector(".my_result");
 const AnswerFetch=document.querySelector('.answer-fetch');
ifone13Button.addEventListener('click', ()=>{
const options={
        method:'GET',
    mode:'cors',
    headers:{
           "Content-Type": "application/json"
        }
    }
          fetch('https://swapi.dev/api/people/1/', options)
    .then((response)=>{
           return   response.text()})
    .then ((myAnswer)=> {
        AnswerFetch.textContent=myAnswer
          })
     
    .catch(() => { console.log('error') });
    
    
})
