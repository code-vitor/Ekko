// 
function changeSrc(src){
    let img = document.querySelector("#bg-image")

    img.src = src
}



// Se o nome da class foor "navbar" vc adiciona a class "responsive"
// Senao ele volta a class para a "navbar"
function navResponsive(){
    let nav = document.querySelector("#topNav");

    if (nav.className === "navbar") {

        nav.className += "responsive"; 
    } else {
        nav.className = "navbar";
    }
}