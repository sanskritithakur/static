var red=document.querySelector('#red');
var green=document.querySelector('#green');
var blue=document.querySelector('#blue');
var place=document.querySelector('#mixer1');
var base2=document.querySelector('#base2');
var addcolour=document.querySelector('#addcolour')
var colourname=document.querySelector('#colourname');
var patch=document.querySelector('.circle');
var pallet=document.querySelector('#pallet');
var bg=document.querySelector('#cir9')
var arr =[];
var z=``;

place.addEventListener("click", function(){
if(red.value==''|| green.value=='' || blue.value==''){
       alert('you need to mention all the specified valus');
}else{
     z=`rgb( ${red.value}, ${green.value} ,${blue.value})`;
base2.style.background =`rgb( ${red.value}, ${green.value} ,${blue.value})`;

addcolour.style.display='initial';

}
})
;

var k;

addcolour.addEventListener('click', function() {
  

          for(let i=0;i<arr.length ; i++){
              
              k= arr[i].localeCompare(z);
          }
          if(k!=0){
               arr.push(z);

               pallet.innerHTML += `<div class="clr">
               <div class="circle" style="background : rgb( ${red.value}, ${green.value} ,${blue.value}) "></div>
               <h4>rgb( ${red.value}, ${green.value} ,${blue.value})</h4>
           </div>`;
          }else{
               alert("colour is alredy added");
          }
         
      
    

})
