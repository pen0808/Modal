'use strict';
 const closedisplay = function(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
 }
 const openmodal = document.querySelectorAll('.show-modal');
 const modal = document.querySelector('.modal');
 const btnclose = document.querySelector('.close-modal');
 const overlay = document.querySelector('.overlay');
 console.log(openmodal);
 for(let i=0; i<openmodal.length; i++){
  openmodal[i].addEventListener('click', function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
 }
 btnclose.addEventListener('click', closedisplay);
 overlay.addEventListener('click', closedisplay);
 document.addEventListener('keydown', function(e){
  console.log(e.key);
  if(e.key === 'Escape'){
    if(!modal.classList.contains('hidden')){
      closedisplay();
    }
  } 
 })