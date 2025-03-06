const display= document.querySelector('.displaybox');

const innerbox= document.querySelector('.innerbox');
const AllBtn=innerbox.children;

const ac = innerbox.firstElementChild.firstChild;
ac.addEventListener('click', function(e){
    display.innerHTML="";
});

const del= innerbox.firstElementChild.children[1];
del.addEventListener('click', function(e){
    display.innerHTML= display.innerHTML.slice(0, -1);
});

btnline1= innerbox.children[1];
btnline2= innerbox.children[2];
btnline3= innerbox.children[3];         
btnline4= innerbox.children[4];

for(let i=2; i<btnline1.childre.length; i++){
    btnline1.children[i].addEventListener
}









