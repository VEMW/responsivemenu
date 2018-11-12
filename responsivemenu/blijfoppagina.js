let heeftSub = document.querySelectorAll('.een-submenu > a');
console.log(heeftSub);

for(let i=0; i<heeftSub.length; i++) {
  heeftSub[i].addEventListener('click', (e)=> e.preventDefault());
}
