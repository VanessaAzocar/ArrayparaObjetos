window.onload = function (){

/* /*CREAR ARRAY 2D*/
/*var car = [["brand", "Ford"], ["model", "Mustang"], ["year",1964]]; /*ARRAY*/
            /* (0,0)    (0,1)      (1,0)   (1,1)        (2,0) (2,1) estos son los valores del array*/

¨/*var student = [["name","lulu"], ["age",25],["hobbie","cantar"]];

/*asi se podria incluir los objetos
var object ={};
object[car[0][0]] = car[0][1];
object[car[1][0]] = car[1][1];
object[car[2][0]] = car[2][1];*/

/*Crear ARRAY 2d*/
/*var arrayToObject = function (array2d){
    var newObject = {};
    for (var i = 0; i <array2d.length; i++){
        /*newObject [propiedades] = valores;*/
      /*  newObject [array2d[i][0]] = array2d[i][1];
    }
    return newObject;
};

console.log (arrayToObject(car));
console.log (arrayToObject(student));

/*Crear una funcion que  reciba como parametro un objeto y nos retorne un array 2D
var car es un objeto*/

/*var car = {
    brand: "Ford",
    model: "Mustang",
    year: 1964,
    color: "red",
};
/*FOrma de hacer un array usando las propiedades y valores de un objeto (de manera manual)
var newArray2d = [["brand","Ford"], ["model","Mustang"],["year",1964],["color","red"]];*/

/*var properties = Object.keys(car);

var newArray2d = [
                    [properties[0],car[properties[0]]],   
                    [properties[1],car[properties[1]]],
                    [properties[2],car[properties[2]]],
                    [properties[3],car[properties[3]]],
                ]

console.log(newArray2d)/*"brand","model","year","color"]

/*crear la funcion object.array llamando esta funcion podremos ver los resultados en consola */

var car = {
    brand: "Ford",
    model: "Mustang",
    year: 1964,
    color: "red",
}
var objectToArray = function (object){
    var array2d = [];
    var properties = Object.keys(object);
    for(var i = 0; i<properties.length; i++) {
        array2d.push([properties[i],object[properties[i]]]);
    }
    return array2d;
}
    console.log (objectToArray(car));

}
