// Variables tipos de personas
let t1 = 0; //impulsor
let t2 = 0; //coordinador
let t3 = 0; //implementador
let t4 = 0; //cerebro
let t5 = 0; //inv. recursos
let t6 = 0; //monitor
let t7 = 0; //cohesionador
let t8 = 0; //finalizador

let suma; 

// Funciones
let empezar = () => {
    let cont_inici = document.getElementById("intro");
    cont_inici.style.display ="none"
    let s1 = document.getElementById("s1");
    s1.style.display="block";
}

let resultado1 = () => {
    let p10 = document.getElementById("p10");
    let p11 = document.getElementById("p11");
    let p12 = document.getElementById("p12");
    let p13 = document.getElementById("p13");
    let p14 = document.getElementById("p14");
    let p15 = document.getElementById("p15");
    let p16 = document.getElementById("p16");
    let p17 = document.getElementById("p17");

    p10 = parseInt(p10.value);
    p11 = parseInt(p11.value);
    p12 = parseInt(p12.value);
    p13 = parseInt(p13.value);
    p14 = parseInt(p14.value);
    p15 = parseInt(p15.value);
    p16 = parseInt(p16.value);
    p17 = parseInt(p17.value);

    suma = p10 + p11 + p12 + p13 + p14 + p15 + p16 + p17;
    
    if (suma == 10) {
        t1 = t1 + p16;
        t2 = t2 + p13;
        t3 = t3 + p15;
        t4 = t4 + p12;
        t5 = t5 + p10;
        t6 = t6 + p17;
        t7 = t7 + p11;
        t8 = t8 + p14;
        console.log(suma)
    } else{
        alert("La suma de las puntuaciones debe ser igual a 10!")
    }
}


