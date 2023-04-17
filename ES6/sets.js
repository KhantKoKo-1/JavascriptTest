window.onload = function(){

//    var names = new Set();

//    names.add("Khant").add("NyiNYI").add("KOKO");
   
//    names.delete("Khant");

//    names.clear();
  
//    console.log(names.has("KOKO"))
  
//    console.log(names.size);
  
//    console.log(names);

var array = ["Khant", "KOKO", "NyiNyi", "OoOo", "DawDaw"];


var refinedArray = new Set(array);

console.log(refinedArray);

array = [...refinedArray];

console.log(array);


}