/*
Crear una funcion que reciba como parametro un array y retorne una cadena
-> retorne quack! sneeze! boom!
*/
var arr = ["quack","sneeze","boom"];
var words = ["quack","sneeze","boom" ];

/*var addingWord = words.push("");
var newWords = words.join("! ");*/

//invocando funcion
changeToString(words);

//changeToString  ---> nombre de la función
function changeToString(words){
// Se esta agregando un nuevo elemento vacio al array, dado que se planea emplear el metodo JOIN para agregar un tercer punto de exclamación (Dado que es reemplaza las comas)
words.push("");
// se agrego el metodo "join" para que convierta el array a string y el reemplazo de las comas sea el punto de exclamación (!)
var newWords = words.join("! ");
// resultado
return newWords;
}
