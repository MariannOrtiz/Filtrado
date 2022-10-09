// array vinilos
const vinilos = [
    { id: 1, nombre: "Circles", autor: "Mac Miller", anio: "2020", precio: 2900, img: "" },
    { id: 2, nombre: "To Pimp A Butterfly", autor: "Kendrick Lamar", anio: "2015", precio: 3700, img: "" },
    { id: 3, nombre: "The Divine Feminine", autor: "Mac Miller", anio: "2016", precio: 4500, img: "" },
    { id: 4, nombre: "Graduation", autor: "Kanye West", anio: "2007", precio: 1500, img: "" },
    { id: 5, nombre: "DAMN", autor: "Kendrick Lamar", anio: "2017", precio: 7300, img: "" },
    { id: 6, nombre: "Madvillainy", autor: "MF DOOM", anio: "2004", precio: 2200, img: "" },
    { id: 7, nombre: "MM... FOOD", autor: "MF DOOM", anio: "2004", precio: 2900, img: "" },
    { id: 8, nombre: "IGOR", autor: "Tyler, The Creator", anio: "2019", precio: 1800, img: "" },
];

function Vinilo(id, nombre, autor, anio, precio, img) {
    this.id = id;
    this.nombre = nombre;
    this.autor = autor;
    this.anio = anio;
    this.precio = precio;
    this.img = img;
}

function filtrar(arr, filtro, param) {
    return arr.filter((el) => {
        if (param == "precio") {
            return el[param] <= parseFloat(filtro);
        } else {
            return el[param].includes(filtro);
        }
    });
}

let tipoFiltro = prompt("escriba si quiere filtrar por PRECIO o por NOMBRE");
let filtro = prompt("escriba lo que quiera filtrar");

console.log(filtrar(vinilos, filtro, tipoFiltro));
