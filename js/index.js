

// FIXED MENU
const nav = document.querySelector('.nav');
const text = document.querySelector('.info-header-container');

window.addEventListener('scroll', function(){
    nav.classList.toggle('scrolling', window.scrollY > 0);
    text.classList.toggle('text-scroll', window.scrollY > 40);
})


// FIXED MENU BOTON
const responsiveMenu = document.getElementById('boton');

window.addEventListener('scroll', function(){
    responsiveMenu.classList.toggle('fixed-menu-boton', window.scrollY > 0);
})


// RESPONSIVE MENU
const boton = document.getElementById('boton');
const navShow = document.querySelector('.nav');
const fondoNav = document.getElementById('background-nav');

boton.addEventListener('click', function(){
    navShow.classList.add('nav-show');
    fondoNav.style.display = "block";
})
fondoNav.addEventListener('click', function(){
    navShow.classList.remove('nav-show');
    fondoNav.style.display = "none";
})



// SHOW IMAGES
const images = document.querySelectorAll('.img');
const contenedorImage = document.querySelector('.contenedor-img');
const imageContenedor = document.querySelector('.img-show');
const cerrar = document.querySelector('.bx.bxs-x-circle');

images.forEach(image =>{
    image.addEventListener('click', ()=>{
        addImage(image.getAttribute('src'));
    })
})
const addImage = (srcImage)=>{
    contenedorImage.classList.toggle('move');
    imageContenedor.src = srcImage;
}

cerrar.addEventListener('click', ()=>{
    contenedorImage.classList.toggle('move');
})







