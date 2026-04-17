const boton = document.getElementById('ir_registro');
const register = document.getElementById('register');
const login = document.getElementById('login');
const atras = document.getElementById('atras');

boton.addEventListener('click', ()=>{
    register.style.display='grid';
    login.style.display='none'
})

atras.addEventListener('click', ()=>{
    register.style.display='none';
    login.style.display='grid'
})