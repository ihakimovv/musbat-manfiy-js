var elForm = document.querySelector('.form')
var elInput = document.querySelector('.input')

elForm.addEventListener('submit', function(evn){
    evn.preventDefault()
   if(elInput.value<0){
    console.log('manfiy');
   }else if(elInput.value>0){
    console.log('musbat');
   }else{
    console.log('musbat ham manfiy ham emas');
   }



elInput.value= ""
})
