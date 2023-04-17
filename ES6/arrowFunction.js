window.onload = function(){

// var greeting = (name) => console.log(`${name} says hiiiya`);

// greeting("khant");

var khant = {
    name : "Khant",
    chop(x){

        var _this = this;

        window.setInterval(()=>{
            
            if (x > 0){
                console.log(_this.name + "chopped the enemy");
                x--;
            }
           

        },1000);

    }

};

khant.chop(5);



}