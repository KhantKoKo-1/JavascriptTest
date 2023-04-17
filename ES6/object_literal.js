window.onload = function(){

    var names = "Khant";
    var belt = "Black";

    var k = {
      names,belt ,
      chop(x){
          
          console.log(`You chopped the enemy ${x} times`);
      
        }
    };
    
    console.log(k.belt);
    console.log(k.chop(5));

}