// script.js


// Fondo animado estilo "matrix" con canvas
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const letters = "01ABCDEF";
const size = 14;
const columns = canvas.width / size;
const drops = Array(Math.floor(columns)).fill(1);


function draw() {
ctx.fillStyle = "rgba(0,0,0,0.1)";
ctx.fillRect(0, 0, canvas.width, canvas.height);


ctx.fillStyle = "#00eaff";
ctx.font = size + "px monospace";


drops.forEach((y, i) => {
const text = letters[Math.floor(Math.random() * letters.length)];
ctx.fillText(text, i * size, y * size);


if (y * size > canvas.height && Math.random() > 0.95) drops[i] = 0;
drops[i]++;
});
}


setInterval(draw, 40);


// PRODUCTOS
const products = [
{name:'Arduino UNO R3',price:45000,category:'electronica',img:'https://i.imgur.com/d8KQYvS.jpeg'},
{name:'Cable Tipo C Reforzado',price:15000,category:'electronica',img:'https://i.imgur.com/MHv4uQc.jpeg'},
{name:'Módulo Sensor Ultrasonido',price:22000,category:'electronica',img:'https://i.imgur.com/LkV9x1u.jpeg'},
{name:'BD Empresarial Premium',price:250000,category:'datos',img:'https://i.imgur.com/fbhA2lx.jpeg'},
{name:'Paquete BD Marketing 5M correos',price:120000,category:'datos',img:'https://i.imgur.com/lK8Ak09.jpeg'},
{name:'GTAV Premium Edition',price:60000,category:'juegos',img:'https://i.imgur.com/jLbRoSB.jpeg'},
{name:'Minecraft Java Edition',price:90000,category:'juegos',img:'https://i.imgur.com/AF2Gg8g.jpeg'}
];


function renderProducts(){
const search=document.getElementById('search').value.toLowerCase();
const category=document.getElementById('category').value;
const list=document.querySelector('.productos');


list.innerHTML="";


products.filter(p =>
p.name.toLowerCase().includes(search) &&
(category==='all' || p.category===category)
).forEach(p=>{
list.innerHTML+=`
<div class="producto" onclick="openModal('${p.name}','${p.img}',${p.price})">
<img src="${p.img}" />
<h3>${p.name}</h3>
<p><b>$${p.price.toLocaleString('es-CO')} COP</b></p>
</div>`;
});
}
renderProducts();


document.getElementById('search').addEventListener('keyup',renderProducts);
document.getElementById('category').addEventListener('change',renderProducts);


function openModal(name,img,price){
document.getElementById('modal-title').innerText=name;
document.getElementById('modal-img').src=img;
document.getElementById('modal-price').innerHTML='$'+price.toLocaleString('es-CO')+' COP';
document.getElementById('modal').style.display='flex';
}
function closeModal(){document.getElementById('modal').style.display='none'}
