const carrito = [];

function comprarFrutas(){
    let terminado = false;
    if(confirm("DESEA COMPRAR FRUTAS?")){
        while(confirm("¿Desea agregar otro Fruta?")){
            const fruta = prompt("Que fruta desea adquirir?");
            if(fruta != null) carrito.push(fruta);
        }
    }
    else prompt("Bueno gato entonces curtite");
}

comprarFrutas();
console.log(carrito);
