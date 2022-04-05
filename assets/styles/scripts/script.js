let cajas = document.querySelectorAll('.caja')
console.log(cajas);

cajas.forEach(caja => {
    caja.addEventListener('click', cajaclick => {
        cajaclick.stopPropagation()
        console.log(caja.innerHTML.trim())
    })
});

let contenedor = document.getElementById('miID');


contenedor.addEventListener('click', miFuncion)

function miFuncion(){
    console.log('Me dieron click')
}