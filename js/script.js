// script.js
const products = [
{name:'Arduino UNO R3',price:45000,category:'electronica',img:'https://i.imgur.com/d8KQYvS.jpeg'},
{name:'Cable Tipo C Reforzado',price:15000,category:'electronica',img:'https://i.imgur.com/MHv4uQc.jpeg'},
{name:'BD Empresarial Premium',price:250000,category:'datos',img:'https://i.imgur.com/fbhA2lx.jpeg'},
{name:'GTAV Premium',price:60000,category:'juegos',img:'https://i.imgur.com/jLbRoSB.jpeg'}
];


function renderProducts(){
const list=document.querySelector('.productos');
list.innerHTML="";
products.forEach(p=>{
list.innerHTML+=`
<div class="producto" onclick="openModal('${p.name}','${p.img}',${p.price})">
<img src="${p.img}" style="width:100%;border-radius:10px;">
<h3>${p.name}</h3>
<p><b>$${p.price.toLocaleString('es-CO')} COP</b></p>
</div>`;
});
}
renderProducts();


function openModal(name,img,price){
document.getElementById('modal-title').innerText=name;
document.getElementById('modal-img').src=img;
document.getElementById('modal-price').innerHTML='$'+price.toLocaleString('es-CO')+' COP';
document.getElementById('modal').style.display='flex';
}
function closeModal(){document.getElementById('modal').style.display='none'}
