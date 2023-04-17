window.onload = function(){

    // var meat = ["ham", "salami", "bacon"];
    
    // console.log(...meat);

    // var num1 = [1,2,3];
    // var num2 = [...num1,4,5,6];

    // console.log(num2)
    
    var nums = [3,4,5];
   
    function addNumbers(a,b,c){
        console.log(a+b+c);
    }
    addNumbers(...nums);
}