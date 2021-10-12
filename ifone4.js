
const days=document.querySelector(".ifone4-section_select-form");
days.addEventListener("click", function(event){
  if(days.value=='day'){
     days.setCustomValidity("Пожалуйста, выберите дату рождения");
  }  else{
    days.setCustomValidity(" ");
  }
});

const mounth=document.getElementById("month");
mounth.addEventListener("click", function(event){
  if(mounth.value=='month0'){
     mounth.setCustomValidity("Пожалуйста, выберите месяц");
  }  else{
    mounth.setCustomValidity(" ");
  }
});

const years=document.getElementById("years");
years.addEventListener("click", function(event){
  if(years.value=='year'){
     years.setCustomValidity("Пожалуйста, выберите год"); 
  } else if(years.value=='year1985'){
	  console.log('36 лет');
	  years.setCustomValidity(" ");
	  
  }	  else if(years.value=='year1976'){
	  years.setCustomValidity(" ");
	 
  }else if(years.value=='year1975'){
	  years.setCustomValidity(" ");
	 
  }else {
    years.setCustomValidity(" ");
  }
  return console.log(years.value);
});

const btn_next=document.getElementById("btn_next");


btn_next.addEventListener('click', ClickNewHTML);

function ClickNewHTML(event){
	
	const yearsnum=[1985,1976,1975];
	let timeYearNow=new Date();
	let timeFullYear=timeYearNow.getFullYear();
	if(years.value=='year1985'&&days.value!='day'&&mounth.value!='month0'){
		yearUser=timeFullYear-yearsnum[0];
		 if(18<=yearUser<=35){
		window.open('./index5.html');
		 window.open('./index7.html');
		
	 }
	}
	if(years.value=='year1976'&&days.value!='day'&&mounth.value!='month0'){
		 yearUser=timeFullYear-yearsnum[1];
		 if(36<=yearUser<=45){
			 window.open('./index5.html');
		 window.open('./index8.html');
	 }
	 else{
		 	btn_next.setAttribute(disabled, true);
	 }
	 }
	 if(years.value=='year1975'&&days.value!='day'&&mounth.value!='month0'){
		 yearUser=timeFullYear-yearsnum[2];
		 if(46<=yearUser){
			 window.open('./index5.html');
		 window.open('./index9.html');
	 }
	 else{
		 btn_next.setAttribute(disabled, true);
	 }
	}
	if(years.value=='year'||days.value=='day'||mounth.value=='month0'){
		btn_next.setAttribute(disabled, true);
	}
}




