console.log("Inicia Programa BFCalderon");

//Asignacion
var initialNumber = 10;
var disminucion = initialNumber--
var disminucionDos = initialNumber
console.log(disminucion)
console.log(disminucionDos)

//Concatenacion
var brayan = "Brayan"
var calderon = "Calderon"
console.log("Variables concatenadas: " + brayan + " " + calderon)

//Condicion
var valor1 = 15
var valor2 = 20
var valorAleatorio = 5
var array = Array(1,2,3,4,5)
var iterador = 0
if(valor1 < valor2){
    document.write(valor1 + " es menor que " + valor2)
    console.log(valor1 + " es menor que " + valor2)
} else {
    document.write(valor1 + " es mayor que " + valor2)
    console.log(valor1 + " es mayor que " + valor2)
}

//Case
switch (valorAleatorio){
    case 1:
        console.log("Switch: Monday")
    break
    case 2:
        console.log("Switch: Twesday")
    break
    case 3:
        console.log("Switch: Wednesday")
    break
    case 4:
        console.log("Switch: Thursday")
    break
    case 5:
        console.log("Switch: Freeday")
    break
    default:
        console.log("Switch: No pertenece a un dia valor validado")
    break
}

//For
document.write("    Ciclo for: <br />")
for(i=0; i<5; i++){
    document.write("Iteracion " + i + "<br />")
}

//While
document.write("    Ciclo while: <br />")
while(iterador<3){
    document.write("Iteracion " + iterador + "<br />")
    iterador++
}

//Do - While
iterador = 0
document.write("    Ciclo Do - While: <br />")
do{
    document.write("Iteracion " + iterador + "<br />")
    iterador++
}while(iterador < 4)

//For - break
document.write("    Ciclo for - break: <br />")
for(i=0; i<15; i++){
    if(i==2) {
        document.write("Iteracion de finalizacion " + i + "<br \n/>")
        break
    }
    document.write("Iteracion " + i + "<br />")
}

//For - continue
document.write("Ciclo for - continue: <br />")
for(i=0; i<3; i++){
    if(i==1) {
        document.write("____continue " + i + "<br \n/>")
        continue
    }
    document.write("Iteracion " + i + "<br />")
}

function funtionOne(){
    document.write("Linea Escrita en una funcion sin parametros <br />")
}
funtionOne()

function functionWithParams(nombre, apellido){
    document.write("Nombre concatenado en funcion que recibe parametros: " + nombre + " " + apellido + " " + "<br />")
}
functionWithParams("Fabian", "Bastilla")

function funcionConRetorno(numberOne, numberTwo){
    return numberOne*numberTwo
}
document.write("Funcion con Retorno - Multiplicacion: " + funcionConRetorno(5, 2)+ "<br />")

/*var nombre = prompt("Ingrese su nombre:")
if(nombre != null)
    alert(nombre)
else
    alert("No ha ingresa su nombre")*/

/*var confirmDialog = confirm("Confirma que esta correcto el dialogo")
if(confirmDialog == true)
    alert("Dialogo Confirmado")
else 
    alert("Dialogo Cancelado")*/

    function varTest(){
        var x = 1;
        let xx = 10;
        if(true){
            var x = 2;
            let xx = 20;
            document.write("var inside: "+x+" - Let inside: "+xx+ "<br />");
        }
        document.write("var outside: "+x+" - Let outside: "+xx+ "<br />")
    }
    varTest()

    for(let i = 0; i < 3; i++){
        document.write("Bucle let: "+i+ "<br />");
    }

    let name = 'Brayan Calderon';
    let numberOne = 3;
    let numberTwo = 7;
    let msg = `Concatenando literales. Hola ${name}, la suma de los numeros es ${numberOne + numberTwo} "<br />"`;
    document.write(msg);

    let listNames = [ "Elsa", "Brayan", "Niko", "Sofi"]
    document.write("Listando nombres de una lista: <br />")
    for(let name of listNames){
        document.write(name + "<br />")
    }

    const suma = (x, y) => {
        let sum = x + y;
        console.log(sum);
    }
    suma(15, 1)
    const defultParamsTest = (a, b = 6, c = 14) => {
        return a+b+c;
    }
    document.write("Funcion con variables receptoras con valor por defecto asignado: "+defultParamsTest(7, 4)+"<br />");

    var param = 'size'
    var consig = {
        [param]: 12,
        [param.charAt(0).toUpperCase() +
        param.slice(1)]: 4
    }
    console.log(consig)

    let person = {
        name: 'Brayan',
        age: 25,
        sex: 'Masculino'
    };
    let student = {
        name: 'Bob',
        age: 20,
        xp: '2'
    };
    let newStudent = Object.assign(person,student)
    document.write( "Signando objetos: " +newStudent.name + "<br />");
    let newStudentTwo = Object.assign({},person, {name: 'Fabian'});
    document.write( "Creando y reemplazando valores de objetos: " +newStudentTwo.name + "<br />");
    
    let arrayApellidos = ['Calderon', 'Bastilla', 'Parada'];
    let [appellidoUno, apellidoDos, apellidoTres] = arrayApellidos;
    console.log("Desestructuración de arrays: " +appellidoUno + " : " + apellidoDos + " : " + apellidoTres)

    let numeros = () => {
        return ['uno', 'dos', 'tres']
    }
    let[one, ,two] = numeros();

    var obj = {id: 42, name: "Brayan"};
    let {id = 10, age = 20} = obj;
    console.log(id);
    console.log(age);

    function constrainAll(arr, ...nums) {
        for(let num of nums){
            if(arr.indexOf(num) === -1)
            {
                return false
            }
        }
        return true
    }

    var dataFields = [1995, 2, 15];
    var date = new Date(...dataFields)
    document.write(date)

    const obj1 = {foo: 'bar', x: 42};
    const obj2 = {foo: 'baz', y: 5};
    const merge = (...objects) => ({...objects});
    let mergeObj = merge(obj1, obj2);
    let mergeObj2 = merge({}, obj1, obj2);

    class Rectangle {
        constructor(height, width){
            this.height = height;
            this.width = width;
        }
    }
    const square = new Rectangle(5, 5);
    const poster = new Rectangle(5, 4);

    var Square = class {
        constructor(height, width){
            this.height = height;
            this.width = width;
        }
    };

    class RectangleTwo {
        constructor(height, width){
            this.height = height;
            this.width = width;
        }
        get area(){
            return this.calcArea();
        }
        calcArea(){
            return this.height*this.width;
        }
    }
    const squareArea = new RectangleTwo(5, 5);
    console.log("Calculando area mediante un get dentro de una clase: "+squareArea.area+" mts^2");

    class Point {
        constructor (x, y){
            this.x = x;
            this.y = y;
        }
        static distance(a, b){
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            return Math.hypot(dx, dy);
        }
    }
    const p1 = new Point(7, 2);
    const p2 = new Point(3, 8);
    console.log("Hipotenuza calculada en un metodo statico: "+Point.distance(p1, p2));

    class Animal {
        constructor(nombre){
            this.nombre = nombre
        }
        habla(){
            console.log("Clase abstracta que habla: Guaww, Guaww")
        }
    }
    class Dog extends Animal {
        habla(){
            super.habla();//Habla desde el padre
            console.log("Clase heredada: "+this.nombre+" Apellido");
        }
    }
    let dog = new Dog('Rex');
    dog.habla();

    let map = new Map([['k1', 'v1'], ['k2', 'v2']]);
    console.log("Tamaño de un map: "+map.size);

    let set = new Set();
    set.add(5).add(9).add(59).add(9);
    console.log("Existe 9:" +set.has(9));
    for(let v of set.values()) console.log("Iterando valores de tipo Set(): "+v);

    function asyncFunc(work){
        return new Promise(function(resolve, reject){
            if(work === "")
                reject(Error("Nothing"));
            setTimeout(function(){
                resolve(work);
            }, 1000);
        });
    }
    asyncFunc("Work 1")
    .then(function(result){
        console.log(result);
        return asyncFunc("Work 2");
    }, function(error){
        console.log(error)
    })
    .then(function(result){
        console.log(result);
    }, function(error){
        console.log(console.log(error));
    });
    console.log("End");

    const arr = ['0', '1', '4', 'a','9','c','16'];
    const my_obj = {
        [Symbol.iterator]: function*(){
            for(let index of arr){
                yield `${index}`;
            }
        }
    }
    const all = [...my_obj]
    .map(i => parseInt(i, 10))
    .map(Math.sqrt)
    .filter((i) => i<5)
    .reduce((i, d) => i+d)
    console.log(all);

    "SoloLearn".indexOf("Solo") === 0;
    "SoloLearn".indexOf("Solo") === (4-"Solo".length);
    "SoloLearn".indexOf("loLe") !== -1;
    "SoloLearn".indexOf("olo", 1) !== -1;
    "SoloLearn".indexOf("olo", 2) !== -1;

    "SoloLearn".startsWith("Solo",0);
    "SoloLearn".endsWith("Solo",4);
    "SoloLearn".includes("loLe");
    "SoloLearn".includes("olo", 1);
    "SoloLearn".includes("olo", 2);