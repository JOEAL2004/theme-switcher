const greenbtn=document.querySelector('#green');
const bluebtn=document.querySelector('#blue');
const purplebtn=document.querySelector('#purple');
const darkbtn=document.querySelector('#dark');
const lightbtn=document.querySelector('#light');
const header=document.querySelector('#heading');
const btns=document.querySelectorAll('button');

greenbtn.addEventListener('click',function(){
  document.body.style.backgroundColor='green';
  header.textContent='Green theme';

});

bluebtn.addEventListener('click',function(){
  document.body.style.backgroundColor='blue';
  header.textContent='Blue theme';

});

purplebtn.addEventListener('click',function(){
  document.body.style.backgroundColor='purple';
  header.textContent='Purple theme';

});

darkbtn.addEventListener('click',function(){
  document.body.style.backgroundColor='black';
  header.textContent='Dark theme';
  header.style.color='black';
  btns.style.backgroundColor='dark gray';
  btns.style.color='white';


});

lightbtn.addEventListener('click',function(){
  document.body.style.backgroundColor='white';
  header.textContent='Light theme';

});

