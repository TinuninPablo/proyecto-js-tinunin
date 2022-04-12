//         // const contador = (helado) => {
//         //     console.log(helado.precio === pedido1);
//         // };
//         const buscarGustoHelad = (idHelado) => {
//             //aqui iría la búsqueda
//         };

//         const sumarAlTotal = (idHelado) => {
//             //cree la variable global   --> sumaTotal linea 51 <--
//             //primero buscá el gusto del helado, tenes la función en la línea 95
//             suma += elegido.precio;
//         };

//         // como buscar en un array  con find()
//         //buscar por id
//         let elegido = helados.find((item) => {
//             return item.id === 1;
//         });
//         console.log(elegido); // devuelve el objeto entero
//         console.log(elegido.titulo); // devuelve el título
//         console.log(elegido.precio); // devuelve el precio

//         alert(helados.find(contador));
//     } else {
//         i = sabores();
//     }
// }

/*var pedido = parseInt(prompt("que desea pedir?"))
console.log(helados[pedido].precio);*/
//REPASO Tipo de datos
//let numero
// let numero = parseInt(prompt("que desea pedir?"));
// alert(numero);
//const numero
// const PI = 3.14;
// PI = parseInt(prompt("que desea pedir?"));
// console.log(PI);

//string
let palabra = "hola que tal";
//boolean
let banderas = true; //false
//Objetos
// const auto = {
//     ruedas: 4,
//     color: "rojo",
//     tieneVolante: true,
//     patente: "AA 122SH",
//     tieneMotor: true,
// };

// console.log(auto);

// if (auto.ruedas == 4) {
//     console.log("Cuatrimotor");
// }
// auto.ruedas = 3;

// if (auto.ruedas == 4||auto.ruedas == 8) {
//     console.log("Cuatrimotor");
// } else {
//     console.log("no es cuatrimotor");
// }
//Array
// console.log(helados.length);
// console.log(helados[0]);

// //agregar elemento --> push
// const gustoNuevo = {
//     id: 9,
//     titulo: "menta",
//     precio: 400,
// };
// helados.push(gustoNuevo);
// console.log(helados.length);
// console.table(helados);

//buscar elemento --> find(), filter(), map()
// let idHelado = parseInt(prompt("Ingrese id de helado"));
// let gustoElegido = helados.find((item) => {
//     return item.id === idHelado;
// });
// console.log(gustoElegido);
// alert(
//     `El gusto que eligió es ${gustoElegido.titulo} y el precio es $ ${gustoElegido.precio}`
// );//template string

//filter
// let gustosElegidos = helados.filter((item) => {
//     return item.precio < 400;
// });
// console.table(gustosElegidos);
// const INFLACION = 1.05;

// //forEach
// helados.forEach((elemento) => {
//     elemento.titulo = "Helado de " + elemento.titulo;
// });
// console.table(helados);

//for
alert("Cálculo de sumas, vamos a sumar 4 números");
let numeroPedido;
let sumaNumeros = 0;
let cantidadGustos = parseInt(prompt("Cuantos gustos vas a quere..?"));
for (let i = 1; i <= cantidadGustos; i++) {
    numeroPedido = parseInt(prompt("Give me a number!"));
    sumaNumeros = sumaNumeros + numeroPedido;
    console.log(
        `Valor de suma ${sumaNumeros}, valor del número nuevo ${numeroPedido}`
    );
}
//Repaso IF
// let i = parseInt(prompt("Ingrese número"));
// if (i < 4) {
//     console.log("Se puede");
// } else {
//     console.log("no se puede");
// }
