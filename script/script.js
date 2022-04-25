let resultado = 0;
alert("Bienvenido a Bentania");
alert("Crea un Personaje para tu próxima aventura");
//Creación del personaje del Usuario.
class Personaje{

    constructor(nombre,elemento,vida,ataque){
        this.nombre     =   nombre;
        this.elemento   =   elemento;
        this.vida       =   vida;
        this.ataque     =   ataque;
    }
    //Creación de ataques por cada elemento, elegido por el usuario.
    atacar(){
        switch (Personaje1.elemento) {
            case "fuego":
                alert(Personaje1.nombre + " lanzo ¡Llamarada!");
                resultado = (npcJefe["vidaj"])   -   (Personaje1["ataque"]);
                alert("A "+ npcJefe.nombrej + " le queda "    +    resultado   + " de vida") ;
                break;
            case "normal":
                alert(Personaje1.nombre + " Blandió su espada!");
                resultado = (npcJefe["vidaj"]) - (Personaje1["ataque"]);
                alert("A "+ npcJefe.nombrej + " le queda "+ resultado + " de vida") ;
                break;
            case "agua":
                alert(Personaje1.nombre + " Utilizó un Latigo de Agua!");
                resultado = (npcJefe["vidaj"]) - (Personaje1["ataque"]);
                alert("A "+ npcJefe.nombrej +" le queda "+ resultado + " de vida") ;
                break;
            case "viento":
                alert(Personaje1.nombre + " Convocó un remolino!");
                resultado = (npcJefe["vidaj"]) - (Personaje1["ataque"]);
                alert("A "+ npcJefe.nombrej + " le queda "+ resultado + " de vida") ;
                break;
            case "tierra":
                alert(Personaje1.nombre + " Lanzó una Estalactita!");
                resultado = (npcJefe["vidaj"]) - (Personaje1["ataque"]);
                alert("A "+ npcJefe.nombrej + " le queda " + resultado + " de vida") ;
                break;
            case "luz":
                alert(Personaje1.nombre + " utilizó el hechizo: ¡Luz resplandeciente!");
                resultado = (npcJefe["vidaj"]) - ((Personaje1["ataque"]) + 1);
                alert("A "+ npcJefe.nombrej  + " le queda " + resultado + " de vida") ;
                break;
            case "oscuro":
                alert(Personaje1.nombre + " lanzo ¡bola sombría!");
                resultado = (npcJefe["vidaj"]) - ((Personaje1["ataque"]) - 1);
                alert("A "+ npcJefe.nombrej + " le queda " + resultado + " de vida") ;
                break;        
            default:
                alert(Personaje1.nombre + " ¡golpeó a " + (npcJefe.nombrej)+ "con un puñetazo!");
                resultado = (npcJefe["vidaj"]) - ((Personaje1["ataque"]) - 1);
                alert("A "+ npcJefe.nombrej + " le queda "+ resultado + " de vida") ;
                break;
        }
    }
    defender(){
        alert(Personaje1.nombre + " Utilizo Poción revitalizadora y ganó 2 puntos de vida");
        Personaje1.vida = Personaje1.vida+2;
        return Personaje1.vida;
    }
}
//Creación de NPC Jefe para combatir
class NpcJefe{

    constructor(nombrej, elementoj, vidaj, ataquej){
        this.nombrej    = nombrej;
        this.elementoj  = elementoj;
        this.vidaj       = vidaj;
        this.ataquej    = ataquej;
    }
    atacar(){
        alert(npcJefe.nombrej + " lanzó ¡Bola sombría!");
        let resultado = (Personaje1["vida"]) - (npcJefe["ataquej"]);
        alert("A " + (Personaje1.nombre) + " le queda "+ resultado + " de vida") ;
        return resultado;
    }
    defender(){
        npcJefe["vidaj"] = npcJefe["vidaj"] + 1;
        alert((npcJefe.nombrej) + " se escondio y recupero 1 punto de vida");
    }
}
//Solicitud prompt para crear las caracteristicas del personaje
const nombre = prompt("Ingrese un nombre");
let titulo = document.createElement("h2");
let div =document.getElementById("textoModificable");
titulo.innerHTML= `Bienvenido ${nombre}`;
div.append(titulo);
const eligeElemento = parseInt(prompt("Elegí un numero para tu elemento: 0: Normal, 1: Fuego, 2: Agua, 3: Viento, 4: Tierra, 5: Luz, 6: Oscuro.")) ;

//Array de elementos
const Elementos = ["normal", "fuego", "agua", "viento", "tierra", "luz", "oscuro"];
let elemento = Elementos[eligeElemento];

//Creación de los objetos(PERSONAJES)
const npcJefe = new NpcJefe('Lotor el Jefe Oscuro', 'Oscuro', 5, 1);
const Personaje1 = new Personaje(nombre, elemento, 5, 2);

//funcion para ataque aleatorio del NPC
function random(min, max) {
    let resultado = Math.floor((Math.random() * (max - min + 1)) + min);
    if(resultado == 1){
        npcJefe.atacar();
        Personaje1.vida = (Personaje1.vida) - (npcJefe.ataquej);
    }else if(resultado == 2) {
        npcJefe.defender();
    }
    return resultado
}

//funcion random para el puente
function random2(min, max) {
    let resultado = Math.floor((Math.random() * (max - min + 1)) + min);
    if(resultado >30){
        alert("El puente se derrumbó y caiste al Rio, lamenteblamente no sabias nadar y te ahogaste...");
        Personaje1.vida = 0;
    }else if(resultado <=30) {
        alert("Mientras te diriges al otro extremo del puente, este comienza a derrumbarse. Pero con tus hábiles reflejos logras correr y cruzarlo con un salto. ¡Felicidades!")
    }
}

//Función de combate utilizando While
function combate(){
    alert("¡"+ (npcJefe.nombrej) + " ha aparecido!")
    while((npcJefe.vidaj) > 0 && (Personaje1.vida) > 0){
        let accion = prompt("Ingresa 1 para atacar o 2 defender");
        let atacar = 1;
        let defender = 2
        if(accion == atacar){
            Personaje1.atacar();
            npcJefe.vidaj = (npcJefe.vidaj) - (Personaje1.ataque);
            if(npcJefe.vidaj <= 0){
                alert( npcJefe.nombrej + " a caído...");
                alert("¡Felicitaciones lo lograste!");
                break;
            }
        }else if(accion == defender){
            Personaje1.defender();
        }
        random(1,2)
        if (Personaje1.vida <=0){
            alert((Personaje1.nombre) + " Ha caído en combate guerrero");
            break;
        }
    }
}
//Creación de los objetos del juego
class Objeto{

    constructor(id, nombre, valor, cantidad ){
        this.id = id;
        this.nombre = nombre;
        this.valor = valor;
        this.cantidad = cantidad;
    }
}
class Mochila extends Objeto{

    constructor(id, nombre, valor, cantidad, capacidad, inventario){
        super(id, nombre, valor, cantidad);
        this.capacidad = capacidad;
        this.inventario = inventario;
    }
    eliminarObjeto(){
        
    }
}
const mochila = new Mochila(1, "mochila", 20, 1, 7);;

const baculo         = new Objeto(1, "báculo", 15, 1);
const bolsaDeMonedas = new Objeto(2, "bolsa de monedas", 1, 1);
const capa           = new Objeto(3, "capa", 25, 1);
const espada         = new Objeto(4, "espada", 15, 1);
const jarro          = new Objeto(5, "jarro", 5, 1);
const manta          = new Objeto(6, "manta", 20, 1);
const pedernal       = new Objeto(7, "pedernal", 5, 1);
const pocionHp       = new Objeto(8, "poción revitalizadora", 5, 1);
const soga           = new Objeto(9, "soga", 5, 1);
const yesca          = new Objeto(10, "yesca", 5, 1);

mochila.inventario =[capa, jarro, manta, pedernal, soga, yesca];
class Moneda extends Objeto{
    constructor(id,nombre,valor,cantidad){
        super(id,nombre,valor,cantidad)
    }
}
const penique = new Moneda(1,"peñique de bronce", 1, 1);
const chelin = new Moneda(2,"chelin de plata",((penique.valor)*12), 1);
const corona = new Moneda(3, "corona de oro", ((chelin.valor)*20), 1);

//Creación de la mochila
//let mochila = [capa,yesca,pedernal,soga,bolsaDeMonedas,manta,jarro];
switch (eligeElemento) {
    case 0:
        mochila.inventario.push(espada);
        break;
    default:
        mochila.inventario.push(baculo);
        break;
}
let mochiText = document.getElementById("textoModificable");
//Comienza la aventura
alert("Nos encontramos en la ruta al castillo de Bentania, se visibiliza una cueva, y a continuación del sendero un puente colgante")
let camino = parseInt(prompt("Escoge tu Camino: 1 para entrar a la cueva, 2 para seguir por el sendero")) ;
switch (camino) {
    case 1:
        combate();
        break;
    case 2:
        alert("El puente se observa en mal estado");
        break;
    default:
        alert("fuiste asesinado por la espalda");
        break;
}
if (camino == 2) {
    alert("Has encontrado Pociones revitalizadoras en el piso, se han agregado a tú Mochila")
    mochila.inventario.push(pocionHp);
    pocionHp.cantidad = 5;
    alert("Tu mochila esta llena! debes elegir un elemento para tirar")
    const verMochila = confirm("¿Deseas ver dentro de la mochila?");
    mochila['inventario'].sort(( a, b) => a - b);
    if (verMochila == true){
        const dentroMochila = mochila.inventario.forEach(laMochila => {
            alert(laMochila.nombre);
        });
        let elegirDescarte = (prompt("Elegí un elemento a descartar"));
        //capa,yesca,pedernal
        switch (elegirDescarte) {
            case "manta":
                let descarte =mochila['inventario'].indexOf(manta);
                mochila['inventario'].splice(descarte, 1);
                break;
            case "soga":
                let descarte2 =mochila['inventario'].indexOf(soga);
                mochila['inventario'].splice(descarte2, 1);
                break;
            case "jarro":
                let descarte3 =mochila['inventario'].indexOf(jarro);
                mochila['inventario'].splice(descarte3, 1);
                break;
            case "capa":
                let descarte4 =mochila['inventario'].indexOf(capa);
                mochila['inventario'].splice(descarte4, 1);
                break;
            case "yesca":
                let descarte5 =mochila['inventario'].indexOf(yesca);
                mochila['inventario'].splice(descarte5, 1);
                break;
            case "pedernal":
                let descarte6 =mochila['inventario'].indexOf(pedernal);
                mochila['inventario'].splice(descarte6, 1);
                break;
            default:
                alert("La mochila estaba demasiado cargada y se ha roto, has perdido tus objetos");
                mochila["inventario"]= [];
                break;
        }    
    }else{
        alert("La mochila estaba demasiado cargada y se ha roto, has perdido tus objetos");
        mochila= [];
    }
    
    let decision = parseInt(prompt("Escoge 1 para cruzar el puente de todos modos o 2 para volver y entrar en la cueva"));
    switch (decision) {
        case 1:
            random2(0,100);
            break;
        case 2:
            alert("regresas por el camino y entras a la cueva");
            combate();
            break;
        default:
            break;
    } 
}
let resultado2 = [];
let mochilaHtml = mochila.inventario.forEach(laMochila => {
    resultado2= resultado2+=laMochila.nombre;
    if (resultado2!="") {
        resultado2+=" ";
    }
});
let div2 =  document.createElement("p");
div2.innerHTML =`Inventario: ${resultado2}`;
div.append(div2);
// let titulo = document.createElement("h2");
// let div =document.getElementById("textoModificable");
// titulo.innerHTML= `<h2>Bienvenido ${nombre} </h2>`;
// div.append(titulo);