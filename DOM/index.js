// console.log("Hello World");
// const div=document.getElementsByTagName('div');

// div[0].innerText="ABES Engineering College";
// div[0].style.color='brown';
// div[0].style.backgroundColor='cyan';



const button=document.getElementById('btn');
console.log(button);
const loading=document.getElementById('disp');

function displayData() {
    setTimeout(()=>{
        const img=document.createElement('img');
        const h2=document.createElement('h2');
h2.innerText="Legendary AP";
h2.style.backgroundColor='cadetblue';
console.log(h2);
div[0].appendChild(h2);


img.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6xuefiBGUB-epGJf50kyzrnCBPTN9slFNaw&s';
img.setAttribute('height',200);
img.setAttribute('width',200);
console.log(img);
div[0].appendChild(img);


    },2000);
    const div=document.getElementsByClassName('container');
console.dir(div);
loading.innerHTML='<h2>Data is loading...</h2>'
div[0].innerHTML=`<h2 style=color:purple> Data is loading...</h2>`;
div[0].style.backgroundColor='Yellow';

    loading.innerHTML='';
}
button.addEventListener('click',displayData);
