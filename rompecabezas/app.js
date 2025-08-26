/*
Mover el nodo al soltar (drop)

Objetivo: al soltar sobre el destino, mover el 
elemento del origen al destino y restaurar opacidad/estilos.

Requisitos

Mismo HTML de antes, ahora sí mover.

No duplicar el elemento: mover (queda con un solo padre).

Pistas

Guardá una referencia al ítem en arrastre (ej.: variable global enArrastre) 
dentro de dragstart.

En dro appendChip: “pegar” con appendChild. Recordá queld ya lo saca de su 
padre anterior (no hace falta removeChild).

Cuando termines: restaurá opacidad y quitá la clase activa del destino.

Criterios de logro

El elemento aparece dentro del #destino tras el drop.

La UI queda “limpia” (sin estilos activos de arrastre).
*/

const body = document.querySelector("body")
const contenedor = document.createElement("div")
const div = document.createElement("div")
const img = document.createElement("img")
img.src = 'img1.jpeg'
div.appendChild(img)

div.draggable = true

contenedor.className = 'placeholder'



div.addEventListener("dragstart", e=>{
    
    img.style.opacity = '0.5'
})

contenedor.addEventListener("drop", () =>{
    contenedor.appendChild(div)
    console.log("destino");
    
})

contenedor.addEventListener("dragover", e =>{
    e.preventDefault()
    contenedor.style.backgroundColor = 'red'
})

contenedor.addEventListener("dragleave",()=>{
    contenedor.style.backgroundColor = 'white'
})

div.addEventListener("dragleave",()=>{
    img.style.opacity = ''
})

body.appendChild(contenedor)
body.appendChild(div)