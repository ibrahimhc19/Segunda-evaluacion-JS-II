
let articulo = {
    imagen: "https://images.pexels.com/photos/2560894/pexels-photo-2560894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    nombre: "Camiseta Pac-man",
    precio: parseInt(Math.floor(Math.random() * (70000 - 50000 + 1)) + 50000),
    descuento: parseInt(Math.random()*20),
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    categoria: 'camisas',
}
let articulo1 = {
    imagen: "https://images.pexels.com/photos/3026284/pexels-photo-3026284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    nombre: "Camiseta King",
    precio: parseInt(Math.floor(Math.random() * (70000 - 50000 + 1)) + 50000),
    descuento: parseInt(Math.random()*20),
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    categoria: 'camisas'
}
let articulo2 = {
    imagen: "https://images.pexels.com/photos/12113101/pexels-photo-12113101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    nombre: "Camiseta Oversize",
    precio: parseInt(Math.floor(Math.random() * (70000 - 50000 + 1)) + 50000),
    descuento: parseInt(Math.random()*20),
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    categoria: 'camisas'
}
let articulo3 = {
    imagen: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    nombre: "Jeans Básicos",
    precio: parseInt(Math.floor(Math.random() * (100000 - 70000 + 1)) + 70000),
    descuento: parseInt(Math.random()*20),
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    categoria: 'pantalones'
}
let articulo4 = {
    imagen: "https://images.pexels.com/photos/2343661/pexels-photo-2343661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    nombre: "Skinny Jeans Dama",
    precio: parseInt(Math.floor(Math.random() * (100000 - 70000 + 1)) + 70000),
    descuento: parseInt(Math.random()*20),
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    categoria: 'pantalones'
}
let articulo5 = {
    imagen: "https://images.pexels.com/photos/769730/pexels-photo-769730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    nombre: "Jogger",
    precio: parseInt(Math.floor(Math.random() * (100000 - 70000 + 1)) + 70000),
    descuento: parseInt(Math.random()*20),
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    categoria: 'pantalones'
}
let articulo6 = {
    imagen: "https://images.pexels.com/photos/5214139/pexels-photo-5214139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    nombre: "Botas Cuero",
    precio: parseInt(Math.floor(Math.random() * (200000 - 100000 + 1)) + 100000),
    descuento: parseInt(Math.random()*20),
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    categoria: 'calzado'
}
let articulo7 = {
    imagen: "https://images.pexels.com/photos/2929281/pexels-photo-2929281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    nombre: "Botas Cuero",
    precio: parseInt(Math.floor(Math.random() * (200000 - 100000 + 1)) + 100000),
    descuento: parseInt(Math.random()*20),
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    categoria: 'calzado'
}
let articulo8 = {
    imagen: "https://images.pexels.com/photos/5730956/pexels-photo-5730956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    nombre: "Tenis",
    precio: parseInt(Math.floor(Math.random() * (200000 - 100000 + 1)) + 100000),
    descuento: parseInt(Math.random()*20),
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    categoria: 'calzado'
}
let articulo9 = {
    imagen: "https://images.pexels.com/photos/1395306/pexels-photo-1395306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    nombre: "Anillos",
    precio: parseInt(Math.floor(Math.random() * (50000 - 20000 + 1)) + 20000),
    descuento: parseInt(Math.random()*20),
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    categoria: 'accesorios'
}
let articulo10 = {
    imagen: "https://images.pexels.com/photos/1493112/pexels-photo-1493112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    nombre: "Gafas para Dama",
    precio: parseInt(Math.floor(Math.random() * (50000 - 20000 + 1)) + 20000),
    descuento: parseInt(Math.random()*20),
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    categoria: 'accesorios'
}
let articulo11 = {
    imagen: "https://images.pexels.com/photos/354103/pexels-photo-354103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    nombre: "Gafas de sol para Dama",
    precio: parseInt(Math.floor(Math.random() * (50000 - 20000 + 1)) + 20000),
    descuento: parseInt(Math.random()*20),
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    categoria: 'accesorios'
}

let articulos = [
    articulo, 
    articulo1,
    articulo2,
    articulo3,
    articulo4,
    articulo5,
    articulo6,
    articulo7,
    articulo8,
    articulo9,
    articulo10,
    articulo11
]

let listaCamisas = document.querySelector('.camisas')
let listaPantalones = document.querySelector('.pantalones')
let listaCalzado = document.querySelector('.calzado')
let listaAccesorios = document.querySelector('.accesorios')
let arreglo = []
let montoFinal = document.getElementById("montoFinal")

let botonCarrito = document.querySelector(".comprar")
botonCarrito.addEventListener("click", function(){
    let sum = 0
    for(const elemento of arreglo){
        sum += parseInt(elemento)
    }
    if(arreglo == 0){
        alert("Su carrito esta vacío, puede agregar articulos al carrito")
    } else{
        let continuar= confirm(`El monto total de su compra es: ${sum}. \n ¿Desea continuar?`)
        if(continuar){
         window.location.href = './exito.html';
    }
   }
})

for ( const articulito of articulos){
    let contenedorArticulo = document.createElement('div')
    let imagenArticulo = document.createElement('img')
    let listaAtributos = document.createElement('ul')

    
    contenedorArticulo.classList.add('articulo')
    imagenArticulo.setAttribute('src', articulito.imagen)
    imagenArticulo.setAttribute('alt', articulo.nombre)
    
    for (const atributo in articulito){
        let elementoLista
        if ( atributo != 'imagen' && atributo != 'categoria'){
            if (articulito[atributo] != 0){
                elementoLista = document.createElement('li')
                elementoLista.innerText = articulito[atributo]
                listaAtributos.appendChild(elementoLista)
            }
        }
        if ( atributo == 'precio' && articulito.precio != 0){
            elementoLista.innerText = '$' + articulito[atributo]
        }
        if ( atributo == 'descuento' && articulito.descuento != 0){
            elementoLista.innerText = '-' + articulito[atributo] + '%'
            elementoLista.classList.add("TagDescuento")
        }
        let botonCompra = document.createElement('button')
        if(atributo == 'descuento'){
            botonCompra.innerHTML = "Comprar"
            botonCompra.addEventListener("click", confirmar)
            function confirmar(){
                let decision =  confirm(`El precio del articulo es: $${articulito["precio"]} \n ¿Desea continuar?`)
                if(decision){
                    arreglo.push(articulito["precio"])
                    alert(`EL artículo ${articulito["nombre"]} ha sido añadido al carrito de compra`)
                } else{
                    alert(`EL artículo ${articulito["nombre"]} no ha sido añadido al carrito de compra, puede continuar comprando`)
                }
                console.log(arreglo)
            }
            listaAtributos.appendChild(botonCompra)
        }

    }
    contenedorArticulo.appendChild(imagenArticulo)
    contenedorArticulo.appendChild(listaAtributos)
    

    switch(articulito.categoria){
        case 'camisas':
            listaCamisas.appendChild(contenedorArticulo)
            break
        case 'pantalones':
            listaPantalones.appendChild(contenedorArticulo)
            break
        case 'calzado':
            listaCalzado.appendChild(contenedorArticulo)
            break
        case 'accesorios':
            listaAccesorios.appendChild(contenedorArticulo)
    }
}