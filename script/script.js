//------------------------------------------------------------------------------------------
//--------------------------------------CODIGO DEL JUEGO------------------------------------
//------------------------------------------------------------------------------------------
let resultado = 0;
//--------------------------------------------------------------
//------------Creación del personaje del Usuario----------------
//--------------------------------------------------------------
class Personaje{

    constructor(nombre,elemento,vida,ataque){
        this.nombre     =   nombre;
        this.elemento   =   elemento;
        this.vida       =   vida;
        this.ataque     =   ataque;
    }
    //--------------------------------------------------------------
    //Creación de ataques por cada elemento, elegido por el usuario.
    //--------------------------------------------------------------
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
                resultado = (npcJefe["vidaj"]) - ((Personaje1["ataque"]) += 1);
                alert("A "+ npcJefe.nombrej  + " le queda " + resultado + " de vida") ;
                break;
            case "oscuro":
                alert(Personaje1.nombre + " lanzo ¡bola sombría!");
                resultado = (npcJefe["vidaj"]) - ((Personaje1["ataque"]) -= 1);
                alert("A "+ npcJefe.nombrej + " le queda " + resultado + " de vida") ;
                break;        
            default:
                alert(Personaje1.nombre + " ¡golpeó a " + (npcJefe.nombrej)+ "con un puñetazo!");
                resultado = (npcJefe["vidaj"]) - ((Personaje1["ataque"]) -= 1);
                alert("A "+ npcJefe.nombrej + " le queda "+ resultado + " de vida") ;
                break;
        }
    }
    defender(){
        alert(Personaje1.nombre + " Utilizo Poción revitalizadora y ganó 2 puntos de vida");
        Personaje1.vida = (Personaje1.vida)+=2;
        return Personaje1.vida;
    }
}
//--------------------------------------------------------------
//------------Creación de NPC Jefe para combatir----------------
//--------------------------------------------------------------
class NpcJefe{

    constructor(nombrej, elementoj, vidaj, ataquej){
        this.nombrej    = nombrej;
        this.elementoj  = elementoj;
        this.vidaj      = vidaj;
        this.ataquej    = ataquej;
    }
    atacar(){
        if (npcJefe["vidaJ"]>0) {
            alert(npcJefe.nombrej + " lanzó ¡Bola sombría!");
        let resultado = (Personaje1["vida"]) - (npcJefe["ataquej"]);
        alert("A " + (Personaje1.nombre) + " le queda "+ resultado + " de vida") ;
        return resultado;
        } else if(npcJefe["vidaj"] <=0){
            alert(`Me las pagarás ${Personaje1.nombre}...`)
        }
        
    }
    defender(){
        npcJefe["vidaj"] = npcJefe["vidaj"] + 1;
        alert((npcJefe.nombrej) + " se escondio y recupero 1 punto de vida");
    }
}
//--------------------------------------------------------------
//----------Creación de los objetos del juego-------------------
//--------------------------------------------------------------
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
//---------------------------------------------------------------------------------
//--------------------------Array de elementos-------------------------------------
//--------------------------------------------------------------------------------
const Elementos = ["normal", "fuego", "agua", "viento", "tierra", "luz", "oscuro"];
//---------------------------------------------------------------------------------
//--------------------------Creación de la mochila---------------------------------
//---------------------------------------------------------------------------------
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
localStorage.setItem('inventario', JSON.stringify(mochila.inventario));
let divLaMochila = document.getElementById("laMochila");
let btnMochila = document.getElementById("btnMochila");
btnMochila.addEventListener('click', abrirMochila);

//---------------------------------------------------------------------------------
//----------------------FUNCION PARA ABRIR LA MOCHILA------------------------------
//---------------------------------------------------------------------------------
let mochilaJson = localStorage.getItem('inventario');
let arrayMochila = JSON.parse(mochilaJson);
function abrirMochila() {
    mochilaJson = localStorage.getItem('inventario');
    arrayMochila = JSON.parse(mochilaJson);
    const inventarioNombres = arrayMochila.forEach( laMochila =>{
        let button = document.createElement("button");
        button.innerText = laMochila.nombre;
        button.value = laMochila.nombre;
        button.classList.add("mochila")
        divLaMochila.append(button);
    }
    )
    alert("Mochila en progreso(Más funciones próximamente)")
    btnMochila.removeEventListener('click', abrirMochila);
    btnMochila.addEventListener('click', cerrarMochila);
}
//---------------------------------------------------------------------------------
//----------------------FUNCION PARA CERRAR LA MOCHILA------------------------------
//---------------------------------------------------------------------------------
function cerrarMochila() {
    for (let i = 0; i < arrayMochila.length; i++) {
        divLaMochila.removeChild(divLaMochila.lastChild)
    }
    btnMochila.removeEventListener('click', cerrarMochila);
    btnMochila.addEventListener("click", abrirMochila);
}

//---------------------------------------------------------------------------------
//--------------------------Creacion de Objetos --Monedas--------------------------
//---------------------------------------------------------------------------------
class Moneda extends Objeto{
    constructor(id,nombre,valor,cantidad){
        super(id,nombre,valor,cantidad)
    }
}
const penique = new Moneda(1,"peñique de bronce", 1, 1);
const chelin = new Moneda(2,"chelin de plata",((penique.valor)*12), 1);
const corona = new Moneda(3, "corona de oro", ((chelin.valor)*20), 1);
//---------------------------------------------------------------------------------
//Declaracion de las variables para crear las caracteristicas del personaje
//---------------------------------------------------------------------------------
let nombre = "";
let elemento = [];
let Personaje1 = [];
//---------------------------------------------------------------------------------
//-------------------inputs para Creación del Persdonaje---------------------------
//---------------------------------------------------------------------------------
let inputText = document.getElementById("inputJugable");
let inputBtn = document.getElementById("botonJugable");
let textoModificable = document.getElementById("textoModificable");
let inputElemento = document.getElementById("InputElemento");
let seleccionElemento = document.createElement("option");
let titulo = document.getElementById("titulo");
seleccionElemento.innerText = "Seleccionar un elemento";
seleccionElemento.value= "";
inputElemento.append(seleccionElemento);

//--------------------------------------------
//Agregamos los elementos a un select a través de un ForEach
//--------------------------------------------
Elementos.forEach( (elemento, iElemento) => {
    let option = document.createElement("option");
    option.innerText = elemento;
    option.value = iElemento;
    inputElemento.append(option)
});
//-----------------------------------------------
//Obteniendo el arma y colocandola en la mochila
//-------------------------------------------------
function Arma() {
    switch (inputElemento.value) {
        case '0':
            mochila.inventario.push(espada);
            break;
        default:
            mochila.inventario.push(baculo);
            break;
    }
    localStorage.setItem('inventario', JSON.stringify(mochila.inventario));
}
//------------------------------------------------------------------
//------------------Funcion de Primer CLICK-------------------------
//------------------------------------------------------------------
function primerClick() {
    //Eleccion del Nombre
    let nombreJ1 = inputText.value;
    titulo.innerText = `Bienvenido ${nombreJ1}`;
    nombre = nombreJ1;
    //Eleccion del elemento
    elemento = Elementos[inputElemento.value];
    //Creacion del personaje jugador
    Personaje1 = new Personaje(nombre, elemento, 5, 2);
    //Obtener Arma
    Arma();
    //Comienza la aventura
    Inicio();
    inputBtn.removeEventListener('click', primerClick);
}
inputBtn.addEventListener('click', primerClick);
//------------------------------------------------------
//--------------------Creación Del NPC------------------
//------------------------------------------------------
const npcJefe = new NpcJefe('Lotor el Jefe Oscuro', 'Oscuro', 5, 1);
//---------------------------------------------------------------------------------
//----------------------funcion para ataque aleatorio del NPC----------------------
//---------------------------------------------------------------------------------
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
//---------------------------------------------------------------------------------
//-----------------------funcion random para el puente-----------------------------
//---------------------------------------------------------------------------------
function random2(min, max) {
    let resultado = Math.floor((Math.random() * (max - min + 1)) + min);
    if(resultado >30){
        textoModificable.innerText = "El puente se derrumbó y caiste al Rio, lamenteblamente no sabias nadar y te ahogaste...";
        Personaje1.vida = 0;
        inputBtn.removeEventListener('click', decidir);
        volver.removeEventListener('click', combate);
        inputBtn.value = "Continuara...";
        volver.value = "Fin...";
    }else if(resultado <=30) {
        textoModificable.innerText = "Mientras te diriges al otro extremo del puente, este comienza a derrumbarse. Pero con tus hábiles reflejos logras correr y cruzarlo con un salto. ¡Felicidades!";
        Personaje1.vida = 0;
        inputBtn.removeEventListener('click', decidir);
        volver.removeEventListener('click', combate);
        inputBtn.value = "Continuara...";
        volver.value = "Fin...";
        }
}
//---------------------------------------------------------------------------------
//------------------Función de combate utilizando While----------------------------
//---------------------------------------------------------------------------------
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
                textoModificable.innerText = `Lotor a caído...  ¡Felicitaciones lo lograste!`;
                inputBtn.removeEventListener('click',combate);
                volver.removeEventListener('click', combate);
                inputBtn.removeEventListener('click', decidir)
                inputBtn.value = "Continuara...";
                volver.value = "Fin...";
                break;
            }
        }else if(accion == defender){
            Personaje1.defender();
        }
        random(1,2)
        if (Personaje1.vida <=0){
            textoModificable.innerText = `${nombre} Ha caído en combate guerrero`;
            inputBtn.removeEventListener('click',combate);
            break;
        }
    }
    inputBtn.removeEventListener('click',combate);
    inputBtn.removeEventListener('click', continuarCamino)
    inputBtn.value = "Continuara...";
    volver.value = "Fin...";
}

//--------------------------------------------
//Declarando el div Padre para modificar
//--------------------------------------------
let divPadre = document.getElementById("divPadre");
//------------------------------------------------------
//-------------Declaración para volver------------------
//------------------------------------------------------
let volver = document.getElementById("botonJugable2");
//------------------------------------------------------
//--------------INICIO DE LA AVENTURA-------------------
//------------------------------------------------------
let camino = 0;

function Inicio() {
    inputElemento.style.display = "none";
    inputText.style.display = "none";
    textoModificable.innerText = "Nos encontramos en la ruta al castillo de Bentania, se visibiliza una cueva, y a continuación del sendero un puente colgante";
    inputBtn.removeEventListener('click', primerClick);
    inputBtn.addEventListener('click', primeraEleccion);
}
//----------------------------------------------------
//------------------Primera Elección------------------
//----------------------------------------------------
function primeraEleccion() {
    volver.style.display = "block";
    textoModificable.innerText = "Escoge tu Camino: Volver para entrar a la cueva, Continuar para seguir por el sendero";
    inputBtn.addEventListener('click', continuarCamino);
    inputBtn.removeEventListener('click', Inicio);
    volver.addEventListener('click', combate);
    inputBtn.removeEventListener('click', primeraEleccion)
}
//---------------------------------------------------------------
//--------------------Continuando el Camino----------------------
//---------------------------------------------------------------
let decision = 0;
function continuarCamino() {
    textoModificable.innerText = "El puente se observa en mal estado, presiona continuar para seguir o volver para regresar a la cueva";
    inputBtn.removeEventListener('click', continuarCamino);
    inputBtn.addEventListener('click', decidir);
    alert("Has encontrado Pociones revitalizadoras en el piso, se han agregado a tú Mochila")
    mochila.inventario.push(pocionHp);
    pocionHp.cantidad = 5;
    alert("Tu mochila esta llena! debes elegir un elemento para tirar")
    const verMochila = confirm("¿Deseas ver dentro de la mochila?");
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
                localStorage.setItem('inventario', JSON.stringify(mochila.inventario));
                break;
            case "soga":
                let descarte2 =mochila['inventario'].indexOf(soga);
                mochila['inventario'].splice(descarte2, 1);
                localStorage.setItem('inventario', JSON.stringify(mochila.inventario));
                break;
            case "jarro":
                let descarte3 =mochila['inventario'].indexOf(jarro);
                mochila['inventario'].splice(descarte3, 1);
                localStorage.setItem('inventario', JSON.stringify(mochila.inventario));
                break;
            case "capa":
                let descarte4 =mochila['inventario'].indexOf(capa);
                mochila['inventario'].splice(descarte4, 1);
                localStorage.setItem('inventario', JSON.stringify(mochila.inventario));
                break;
            case "yesca":
                let descarte5 =mochila['inventario'].indexOf(yesca);
                mochila['inventario'].splice(descarte5, 1);
                localStorage.setItem('inventario', JSON.stringify(mochila.inventario));
                break;
            case "pedernal":
                let descarte6 =mochila['inventario'].indexOf(pedernal);
                mochila['inventario'].splice(descarte6, 1);
                localStorage.setItem('inventario', JSON.stringify(mochila.inventario));
                break;
            default:
                alert("La mochila estaba demasiado cargada y se ha roto, has perdido tus objetos");
                mochila["inventario"]= [];
                localStorage.setItem('inventario', JSON.stringify(mochila.inventario));
                break;
        }    
    }else{
        alert("La mochila estaba demasiado cargada y se ha roto, has perdido tus objetos");
        mochila= [];
        localStorage.setItem('inventario', JSON.stringify(mochila.inventario));
    }
    inputBtn.addEventListener('click', decidir);
}
function decidir() {
            random2(0,100);
}


