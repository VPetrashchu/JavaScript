// Import stylesheets
import './style.css';


// Write Javascript code!
const appDiv = document.getElementById('app');
const btn = document.getElementById('btn');
const inpt = document.getElementById('inpt');

btn.addEventListener("click", function(){
  let n = parseInt(inpt.value);

  if (isNaN(n)) {
    let tmp = btn.innerText;
    btn.innerText = 'Только число!';
    setTimeout(function() {
      btn.innerText = tmp;
      inpt.value = '';
    }, 1000)
  } else {
    inpt.value = '';
    appDiv.innerHTML = `<div>${crow(n)}</div>` + appDiv.innerHTML;
  }
});


 function crow(n) {
   let plural = 
     (n%10==1 && n%100!=11 
         ? 0 
         : n%10>=2 && n%10<=4 
       && (n%100<10 || n%100>=20) 
         ? 1 
         : 2
     );
   if (plural === 2) {
     return `${n} ворон`;
   } else if (plural === 0){
     return `${n} ворона`;
   } else if (plural === 1) {
     return `${n} вороны`;
   }
 }