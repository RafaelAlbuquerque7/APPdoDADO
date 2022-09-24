window.onload = () => {
    "use strict";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};



function dado(){


    var sorteio = Math.floor(Math.random() * 4 + 1);

    switch(sorteio){
        case 1:
            document.getElementById("face").src = "images/face1.png";
            break;
        case 2:
            document.getElementById("face").src = "images/face2.png";
            break;
        case 3:
            document.getElementById("face").src = "images/face3.png";
            break;
        case 4:
            document.getElementById("face").src = "images/face4.png";
            break;
        default:
            //caso contrário
            break;
    }

}