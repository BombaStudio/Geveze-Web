function build(ty, id){
    
    if (ty == "circle"){
        playground.innerHTML += "<div class='circle' id='"+id+"'></div>";
    }
    if (ty == "rect"){
        playground.innerHTML += "<div class='rect' id='"+id+"'></div>";
    }
    if (ty == "axis2"){
        playground.innerHTML += "<div class='ax'></div>";
        playground.innerHTML += "<div class='ay'></div>";
    }
    if (ty == "axis3"){
        playground.innerHTML += "<div class='ax'></div>";
        playground.innerHTML += "<div class='ay'></div>";
        playground.innerHTML += "<div class='az'></div>";
    }
    eval("var "+id+" = document.getElementById("+id+")");
}
function del(obj){
    eval(obj+".remove()");
}
function design(obj, sty){
    eval(obj+".style."+sty);
}

function transform(obj){
    function translate3d(x,y,z){
        eval(obj."style.transform: translate3d("+x+","+y+","+z+")");
    }
    function rotateX(deg){
        eval(obj."style.transform: rotateX("+deg+")");
    }
    function rotateY(deg){
        eval(obj."style.transform: rotateX("+deg+")");
    }
    function rotateZ(deg){
        eval(obj."style.transform: rotateX("+deg+")");
    }
}
function run(){
    var playground = document.getElementById("playground");
    var code = document.getElementById("code").value;
    eval(code);
}
