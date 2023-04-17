// window.onload = function(){

//     var x = 10;

//     if (x > 5){
//         let x = 5;
//         console.log("inside :" + x);
//     }
//     console.log("outside :" + x);
// }

window.onload = function(){

  var item = document.getElementsByTagName("li");
  for (let x = 0;x < item.length ; x++){
      item[x].onclick = function(){
        console.log(x);
      }

      
  }
//   console.log(x);

}