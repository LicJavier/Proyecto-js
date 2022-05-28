# Proyecto-js
Proyecto de un Juego de rol,
Se utilizó class para crear un personaje a través de un prompt.
Se utilizó class para crear un objeto NPC.
Se creo la función Math.random y condicional para que el NPC combata aleatoriamente.
Se creo un array de elementos y un promt para que el usuario elija el suyo.
Se utilizó switch y prompt para elegir el camino.
Se utilizó function con bucle while para interacción de combate.
Se utilizó switch y math.random para determinar aleatoriamente un destino.

                                    21/05/22
Se eliminaron constantes de objetos y se añadieron a traves de fetch de un archivo Json.
Se elimino un pequeño bug con removeEventListener donde al entrar en combate seguia caminando.
Se cambio el nombre de la rama a main.
Se añadieron las alertas para eliminar objetos de la mochila(la funcion esta pendiente).

//-----------------------CORRECCIONES DEL PROYECTO FINAL---------------------------------------------//
1- Se corrigió el Bug del elemento oscuro que le sumaba vida al NpcJefe.
2- No se pudo eliminar la propiedad del personaje "vida" ya que esta se utiliza para el combate y de ello depende derrotar o ser vencido. Linea 105.
3- Se le otorgó uso a la función muertePj que se había eliminado por error en una versión anterior. - Linea 375-
4- se eliminó la variable de la linea 175 que se utilizaba erroneamente para un forEach.
5- Se eliminó la propiedad elementoJ de la clase NpcJefe. No se pudo eliminar la propiedad vidaJ, ya que esta se utiliza en la interacción del combate y de esto depende de que el NpcJefe "Lotor" sea derrotado y finalice el bucle del combate, esta propiedad se utiliza en el metodo atacar del Personaje dentro del switch.
6-Se creo la función eventoObjeto y eventoPocion para eliminar los objetos de la mochila.