localStorage.clear();
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
        if(npcJefe.vidaj >0 && Personaje1.vida >0){
            switch (Personaje1.elemento) {
                case "fuego":
                    npcJefe.vidaj -=(Personaje1.ataque);
                    resultado = npcJefe["vidaj"];
                    textoModificable.innerText = Personaje1.nombre +" lanzó ¡Llamarada!"+ "A "+ npcJefe.nombrej + " le queda "    +    resultado   + " de vida. ";
                    console.log(resultado);
                    movimientoJefe();
                    break;
                case "normal":
                    npcJefe.vidaj -=(Personaje1.ataque);
                    resultado = npcJefe["vidaj"];
                    textoModificable.innerText = Personaje1.nombre +" ¡Blandió su espada!"+ "A "+ npcJefe.nombrej + " le queda "    +    resultado   + " de vida. ";
                    movimientoJefe();
                    break;
                case "agua":
                    npcJefe.vidaj = (npcJefe.vidaj) - (Personaje1.ataque);
                    resultado = npcJefe["vidaj"];
                    textoModificable.innerText = Personaje1.nombre +" Utilizó un Latigo de Agua!"+ "A "+ npcJefe.nombrej + " le queda "    +    resultado   + " de vida-. ";
                    movimientoJefe();
                    break;
                case "viento":
                    npcJefe.vidaj = (npcJefe.vidaj) - (Personaje1.ataque);
                    resultado = npcJefe["vidaj"];
                    textoModificable.innerText = Personaje1.nombre +" Convocó un remolino!"+ "A "+ npcJefe.nombrej + " le queda "    +    resultado   + " de vida. ";
                    movimientoJefe();
                    break;
                case "tierra":
                    npcJefe.vidaj = (npcJefe.vidaj) - (Personaje1.ataque);
                    resultado = npcJefe["vidaj"];
                    textoModificable.innerText = Personaje1.nombre +" Invocó una Estalactita!"+ "A "+ npcJefe.nombrej + " le queda "    +    resultado   + " de vida. ";
                    movimientoJefe();
                    break;
                case "luz":
                    npcJefe.vidaj = (npcJefe.vidaj) - ((Personaje1["ataque"]) += 1);
                    resultado = npcJefe["vidaj"];
                    textoModificable.innerText = Personaje1.nombre +" utilizó el hechizo: ¡Luz resplandeciente!"+ "A "+ npcJefe.nombrej + " le queda "    +    resultado   + " de vida. ";
                    movimientoJefe();
                    break;
                case "oscuro":
                    npcJefe.vidaj = (npcJefe["vidaj"]) - ((Personaje1["ataque"]) -= 1);
                    resultado = npcJefe["vidaj"];
                    textoModificable.innerText = Personaje1.nombre +" lanzo ¡bola sombría!"+ "A "+ npcJefe.nombrej + " le queda "    +    resultado   + " de vida. ";
                    movimientoJefe();
                    break;        
                default:
                    npcJefe.vidaj = (npcJefe.vidaj) - (Personaje1.ataque);
                    resultado = npcJefe["vidaj"];
                    textoModificable.innerText = Personaje1.nombre +" ¡golpeó con un puñetazo!"+ "A "+ npcJefe.nombrej + " le queda "    +    resultado   + " de vida. ";
                    movimientoJefe();
                    break;
            }
            inputBtn.removeEventListener('click', ()=> Personaje1.atacar());
            volver.removeEventListener('click', ()=> Personaje1.defender());
        }
    }  
    //Utilización de operador Avanzado 
    defender(){
        textoModificable.innerText = Personaje1.nombre + " Utilizo Poción revitalizadora y ganó 2 puntos de vida";
        npcJefe.vidaj > 0 ? random(1,2): textoModificable.innerText = 'Hemos vencido!'; 
        inputBtn.removeEventListener('click', Personaje1.atacar);
        volver.removeEventListener('click', Personaje1.defender);
        Personaje1.vida += 2;
    }
}
function movimientoJefe() {
    npcJefe.vidaj > 0 ? random(1,2) : muerteJefe();
    // if(npcJefe.vidaj <= 0){
    //     muerteJefe();
    // } else if(npcJefe.vidaj >0){
    //     random(1,2);
    // }
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
        let resultado = (Personaje1["vida"]) - (npcJefe["ataquej"]);
        textoModificable.innerText += ` ${npcJefe.nombrej} lanzó ¡Bola sombría!, a ${nombre} le queda ${resultado} de vida`;
    }
    // operador avanzado para aumentar vidaj
    defender(){
            npcJefe["vidaj"] ++;
            textoModificable.innerText += ` ${npcJefe.nombrej} se cubrio con su capa y recupero 1 punto de vida`;
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
    //funcion temporalmente no disponible
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
const mochila        = new Mochila(1, "mochila", 20, 1, 9);;
fetch("/json/object.json").then(
    (Response) =>{
        return Response.json();
    }).then((objetosJson) =>{
        objetosJson.forEach((objetos) => {
        mochila.inventario.push(   new Objeto( objetos.id, objetos.nombre, objetos.valor, objetos.cantidad)   )    
        }

        )
        console.log(objetosJson);
    })
    
const baculo         = new Objeto(1, "báculo", 15, 1);
// const bolsaDeMonedas = new Objeto(2, "bolsa de monedas", 1, 1);
// const capa           = new Objeto(3, "capa", 25, 1);
const espada         = new Objeto(4, "espada", 15, 1);
// const jarro          = new Objeto(5, "jarro", 5, 1);
// const manta          = new Objeto(6, "manta", 20, 1);
// const pedernal       = new Objeto(7, "pedernal", 5, 1);
const pocionHp       = new Objeto(8, "poción revitalizadora", 5, 1);
// const soga           = new Objeto(9, "soga", 5, 1);
// const yesca          = new Objeto(10, "yesca", 5, 1);
//-------------------------------------------------------------------------
mochila.inventario =[];
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
    toastyMochila();
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
//--------------------------------------------------------------------------------------------------------------
//--------------------------Creacion de Objetos --Monedas-(TEMPORALMENTE-NO-DISPONIBLE)-SPREAD DE OBJETOS-------
//--------------------------------------------------------------------------------------------------------------
const penique ={
    ...baculo,
    nombre: "penique de bronce",
    valor: 1,
}
const chelin ={
    ...penique,
    nombre:"chelin de plata",
    id: 2,
    valor: penique.valor*12
}
const corona ={
    ...chelin,
    nombre:"corona de oro",
    id:3,
    valor: chelin.valor*20
}
//---------------------------------------------------------------------------------
//Declaracion de las variables para crear las caracteristicas del personaje
//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
//----------------------DESESTRUCTURACION-OBJETO-PERSONAJE-------------------------
//---------------------------------------------------------------------------------
let Personaje1 = [];
let {nombre, elemento, vida, ataque} = Personaje1;

//---------------------------------------------------------------------------------
//-------------------inputs para Creación del Persdonaje---------------------------
//---------------------------------------------------------------------------------
let inputText = document.getElementById("inputJugable");
inputText.setAttribute('minlength','4');
let inputBtn = document.getElementById("botonJugable");
let textoModificable = document.getElementById("textoModificable");
let inputElemento = document.getElementById("InputElemento");
let seleccionElemento = document.createElement("option");
let titulo = document.getElementById("titulo");
seleccionElemento.innerText = "Seleccionar un elemento";
seleccionElemento.value= -1;
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
//---------------------------------------------------------------------------
//------------Obteniendo el arma y colocandola en la mochila-----------------
//---------------------------------------------------------------------------
function Arma() {
    //-----------------------------------------------------------------------
    //------------------APLICANDO-OPERADOR-TERNARIO--------------------------
    //-----------------------------------------------------------------------
    inputElemento.value == 0 ? mochila.inventario.push(espada) : mochila.inventario.push(baculo);
    // switch (inputElemento.value) {
    //     case '0':
    //         mochila.inventario.push(espada);
    //         break;
    //     default:
    //         mochila.inventario.push(baculo);
    //         break;
    // }
    localStorage.setItem('inventario', JSON.stringify(mochila.inventario));
}
//------------------------------------------------------------------
//------------------Funcion de Primer CLICK-------------------------
//------------------------------------------------------------------
function primerClick() {
    inputText.value !== "" && inputElemento.value != -1 ? primerPaso() : alertaInput() ;
    
}
function toastyMochila() {
    Toastify({
        text: "Mochila en progreso (Más funciones próximamente)",
        duration: 2000
        }).showToast();
}
function alertaInput(){
    swal({
        title: "Un Momento!",
        text: "Tu personaje merece un nombre y elegir un elemento para seguir!",
        icon: "warning",
        button: "ok, entendí",
    });
}    
function primerPaso() {
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
const npcJefe = new NpcJefe('Lotor el Jefe Oscuro', 'Oscuro', 10, 1);
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
    inputBtn.removeEventListener('click', continuarCamino)
    inputBtn.removeEventListener('click',combate);
    inputBtn.removeEventListener('click', decidir);
    textoModificable.innerText = `¡Lotor el Señor Oscuro apareció!`;
    inputBtn.addEventListener('click',()=> Personaje1.atacar())
    volver.addEventListener('click', ()=> Personaje1.defender())
    inputBtn.value = "Atacar";
    volver.value = "Defender";
}
//-----------------------------------------------------------------------------------------------------------------
//--------------------Se añade la muerte del Jege y jugador a una funcion para ahorrar codigo----------------------
//-----------------------------------------------------------------------------------------------------------------
function muerte() {
    inputBtn.removeEventListener('click',combate);
    volver.removeEventListener('click', combate);
    inputBtn.removeEventListener('click', decidir);
    inputBtn.removeEventListener('click', ()=> Personaje1.atacar());
    volver.removeEventListener('click', ()=> Personaje1.defender());
    inputBtn.value = "Continuara...";
    volver.value = "Fin...";
}
function muertePj() {
    muerte();
    textoModificable.innerText =  `${nombre} Has caído en combate noble guerrero`;
}
function muerteJefe() {
    muerte();
    textoModificable.innerText = `Lotor a caído...  ¡Felicitaciones lo lograste!`;
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
function continuarCamino() {
    textoModificable.innerText = "El puente se observa en mal estado, presiona continuar para seguir o volver para regresar a la cueva";
    inputBtn.removeEventListener('click', continuarCamino);
    inputBtn.addEventListener('click', decidir);
    alertaEncontrado();
    mochila.inventario.push(pocionHp);
    pocionHp.cantidad = 5;
    localStorage.setItem('inventario', JSON.stringify(mochila.inventario));
}
function decidir() {
            random2(0,100);
}
function alertaEncontrado() {
    swal("Has encontrado Pociones revitalizadoras en el piso", "Se han agregado a tú Mochila!","success",);
}

