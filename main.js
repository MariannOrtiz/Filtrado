// array vinilos
const vinilos = [
    { id: 1, nombre: "circles", autor: "mac miller", anio: "2020", precio: 2900, img: "" },
    { id: 2, nombre: "to pimp a butterfly", autor: "kendrick lamar", anio: "2015", precio: 3700, img: "" },
    { id: 3, nombre: "the divine feminine", autor: "mac miller", anio: "2016", precio: 500, img: "" },
    { id: 4, nombre: "graduation", autor: "kanye west", anio: "2007", precio: 1500, img: "" },
    { id: 5, nombre: "damn.", autor: "kendrick lamar", anio: "2017", precio: 7300, img: "" },
    { id: 6, nombre: "madvillainy", autor: "mf doom", anio: "2004", precio: 2200, img: "" },
    { id: 7, nombre: "mm... food", autor: "mf doom", anio: "2004", precio: 2900, img: "" },
    { id: 8, nombre: "igor", autor: "tyler, the creator", anio: "2019", precio: 800, img: "" },
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

let tipoFiltro = prompt("filtre por PRECIO, NOMBRE, AUTOR o ANIO");
let filtro = prompt("escriba lo que quiera filtrar");

console.log(filtrar(vinilos, filtro.toLowerCase(), tipoFiltro));
