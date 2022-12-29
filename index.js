// function miClosure () {
//     var x = 10;
//     return x;
// }

// var x = miClosure();
// console.log(x);

class TicketManager{
    enventos;
    #precioBaseDeGanacia = 0.2;
    constructor(eventos){
        enventos ? this.enventos = eventos : this.enventos = []
    }
    get eventos(){
        return this.#eventos;
    }
}

const ticketManager = new TicketManager();