var foobar = function (cb){
        cb()
    }

var a = 10
var print = function (){
    console.log(a)
    };


    foobar(print);

