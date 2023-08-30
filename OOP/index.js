//Curso: Object-oriented Programming in JavaScript: Made Super Simple | Moshs
//1. Haciendo un objeto - Object Literal Syntax {OLS}
const circle = {
    radius:1,
    location : {
        x:1,
        y:1
    },
    draw: function(){
        console.log("draw")
    }
}; //Collection of key-value pairs
circle.draw()
//2. If we have 1 or more methods in an object, it has a Behavior - so, its not that good as a duplication method {OLS}
//En ese caso, es mejor crar una Factory Function (intentar pornerle create al inicio)
function createCircle(radius) {
    return {
        radius, //Nueva implementación de ES6
        draw: function(){
            console.log("draw")
        }
    }
}
//3. Constructor Function - Se pone la primera letra Mayus
function Circle(radius){
    // this is a reference to the object that's executing this code
    this.radius = radius;
    this.draw = function(){
        console.log("draw")
    }
}
//Crear - {new} crea un empty object, luego {this} se refiere a al {global object}. No es necesario return, porque new lo hace automático.
const anotherCircle = new Circle(2);
//Si quito el new, referenciara el global del entorno, Window a Navegador, y global en NodeJS
// Diferencia entre ambos: return vs. this and new combo

//4. Constructor - los objetos en JS tienen el método incluido de constructor -> let x = {} = let x = new Object()

//5. Circle pese a que es una función, se comporta como un objeto. "In JS functions are objects" -
const another = new Circle(3)
Circle.call({},1) //Equivalente a lo primero, el primero es el objeto que se utilizará como this, y el resto son argumentos
Circle.apply({},[1,2,3,4]) // Lo mismo, pero los argumentos son una array

//Primitives son los tipos básicos de tipos, y Objects son los Obj-Funct-Array
//Como se copian los datos en primitivos -> Se copia el contenido {value}
let x=20
let y = x;
x=10
//En los Objects, el valor no se copia, sino el Adress the la localización en memoria - ambos se referirían a lo mismo, no pasa como lo anterior {reference}
let a = {value:10}
let b = a
a.value = 20;
//Las variables que se modifican dentro de un objecto, son independientes del valor original. En cambio cuando se modifica a un objeto, SÏ se modifica ya que es una referencia.
//6. Si se quiere agregar una propiedad, es tan simple como colocarla ya sea con . o []
circle.location = {x:1} // es menos verboso
const location = "arruyo"
circle[location] = {x:2} // Se puede ocupar para asignar una variable y su contenido, o si se quiere ocupar special symbols (-,_)
//eliminar propiedades
delete circle.location

//7. Enumerar propiedades 1) for in loop. E.g. for(let key in circle) 2) Object.keys. E.g. const keys = Object.keys(circle) 3) if-in. E.g. if('radius' in circle){console...}

//8. Abstraction práctico - Hide details, only show essentials
function Circle(radius) {
    this.radius = radius;
    this.defaultLocation = { x: 0, y: 0};
    this. computeOptimumLocation = function(factor){}
    this.draw = function() {
        this. computeoptimumlocation(0.1) ; //Al colocar el factor dentro, me evito que el usuario meta mano, bajando complejidad
        console.log('draw') ;
        }
    }  

    const circle = new circle(10);
    circle.draw( );

//9. Private properties and methods -> 
//scope - las cosas quedan dentro, y solo se pueden acceder ahi [temporary, it dies]
// closure -> acceso a los elementos desde donde se está [stays there]
//pasando de this a let, ya no se pueden acceder desde afuera al quedarse circunscrito (serían locales - privadas desde OOP)
function Circle(radius) {
    this.radius = radius;
    let defaultLocation = { x: 0, y: 0};
    let  computeOptimumLocation = function(factor){}
    this.draw = function() {
        computeoptimumlocation(0.1) ; //Al colocar el factor dentro, me evito que el usuario meta mano, bajando complejidad
        console.log('draw') ;
        }
    }  

//10. Si lo privado quiero leerlo, ni siquiera modificarlo se deben poner Getters y/o Setters
Object.defineProperty(this, 'defaultlocation', { //Properties cuando es más de uno
    get: function() {
        return defaultlocation;
    },
    set: function(value) {
        if (!value.x | !value.y){
            throw new Error('invalid location.')};
        defaultlocation = value;
    }
});

