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

//secciones


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
        suma = 0;
        //mostrar siguiente sección
        let s1 = document.getElementById("s1");
        s1.style.display ="none"
        let s2 = document.getElementById("s2");
        s2.style.display="block";
    } else{
        suma = 0;
        alert("La suma de las puntuaciones debe ser igual a 10!");
    }
}


let resultado2 = () => {
    let p20 = document.getElementById("p20");
    let p21 = document.getElementById("p21");
    let p22 = document.getElementById("p22");
    let p23 = document.getElementById("p23");
    let p24 = document.getElementById("p24");
    let p25 = document.getElementById("p25");
    let p26 = document.getElementById("p26");
    let p27 = document.getElementById("p27");

    p20 = parseInt(p20.value);
    p21 = parseInt(p21.value);
    p22 = parseInt(p22.value);
    p23 = parseInt(p23.value);
    p24 = parseInt(p24.value);
    p25 = parseInt(p25.value);
    p26 = parseInt(p26.value);
    p27 = parseInt(p27.value);

    suma = p20 + p21 + p22 + p23 + p24 + p25 + p26 + p27;
    
    if (suma == 10) {
        t1 = t1 + p26;
        t2 = t2 + p23;
        t3 = t3 + p25;
        t4 = t4 + p22;
        t5 = t5 + p20;
        t6 = t6 + p27;
        t7 = t7 + p21;
        t8 = t8 + p24;
        console.log(suma)
        //mostrar siguiente sección
        let s2 = document.getElementById("s2");
        s1.style.display ="none"
        let s3 = document.getElementById("s3");
        s3.style.display="block";
    } else{
        alert("La suma de las puntuaciones debe ser igual a 10!")
    }
}



let resultado3 = () => {
    let p30 = document.getElementById("p30");
    let p31 = document.getElementById("p31");
    let p32 = document.getElementById("p32");
    let p33 = document.getElementById("p33");
    let p34 = document.getElementById("p34");
    let p35 = document.getElementById("p35");
    let p36 = document.getElementById("p36");
    let p37 = document.getElementById("p37");

    p30 = parseInt(p30.value);
    p31 = parseInt(p31.value);
    p32 = parseInt(p32.value);
    p33 = parseInt(p33.value);
    p34 = parseInt(p34.value);
    p35 = parseInt(p35.value);
    p36 = parseInt(p36.value);
    p37 = parseInt(p37.value);

    suma = p30 + p31 + p32 + p33 + p34 + p35 + p36 + p37;
    
    if (suma == 10) {
        t1 = t1 + p36;
        t2 = t2 + p33;
        t3 = t3 + p35;
        t4 = t4 + p32;
        t5 = t5 + p30;
        t6 = t6 + p37;
        t7 = t7 + p31;
        t8 = t8 + p34;
        console.log(suma)
        //mostrar siguiente sección
        let s3 = document.getElementById("s3");
        s1.style.display ="none"
        let s4 = document.getElementById("s4");
        s3.style.display="block";
    } else{
        alert("La suma de las puntuaciones debe ser igual a 10!")
    }
}


//4!!!!
let resultado2 = () => {
    let p20 = document.getElementById("p20");
    let p21 = document.getElementById("p21");
    let p22 = document.getElementById("p22");
    let p23 = document.getElementById("p23");
    let p24 = document.getElementById("p24");
    let p25 = document.getElementById("p25");
    let p26 = document.getElementById("p26");
    let p27 = document.getElementById("p27");

    p20 = parseInt(p20.value);
    p21 = parseInt(p21.value);
    p22 = parseInt(p22.value);
    p23 = parseInt(p23.value);
    p24 = parseInt(p24.value);
    p25 = parseInt(p25.value);
    p26 = parseInt(p26.value);
    p27 = parseInt(p27.value);

    suma = p20 + p21 + p22 + p23 + p24 + p25 + p26 + p27;
    
    if (suma == 10) {
        t1 = t1 + p26;
        t2 = t2 + p23;
        t3 = t3 + p25;
        t4 = t4 + p22;
        t5 = t5 + p20;
        t6 = t6 + p27;
        t7 = t7 + p21;
        t8 = t8 + p24;
        console.log(suma)
        //mostrar siguiente sección
        let s2 = document.getElementById("s2");
        s1.style.display ="none"
        let s3 = document.getElementById("s3");
        s3.style.display="block";
    } else{
        alert("La suma de las puntuaciones debe ser igual a 10!")
    }
}




let resultado2 = () => {
    let p20 = document.getElementById("p20");
    let p21 = document.getElementById("p21");
    let p22 = document.getElementById("p22");
    let p23 = document.getElementById("p23");
    let p24 = document.getElementById("p24");
    let p25 = document.getElementById("p25");
    let p26 = document.getElementById("p26");
    let p27 = document.getElementById("p27");

    p20 = parseInt(p20.value);
    p21 = parseInt(p21.value);
    p22 = parseInt(p22.value);
    p23 = parseInt(p23.value);
    p24 = parseInt(p24.value);
    p25 = parseInt(p25.value);
    p26 = parseInt(p26.value);
    p27 = parseInt(p27.value);

    suma = p20 + p21 + p22 + p23 + p24 + p25 + p26 + p27;
    
    if (suma == 10) {
        t1 = t1 + p26;
        t2 = t2 + p23;
        t3 = t3 + p25;
        t4 = t4 + p22;
        t5 = t5 + p20;
        t6 = t6 + p27;
        t7 = t7 + p21;
        t8 = t8 + p24;
        console.log(suma)
        //mostrar siguiente sección
        let s2 = document.getElementById("s2");
        s1.style.display ="none"
        let s3 = document.getElementById("s3");
        s3.style.display="block";
    } else{
        alert("La suma de las puntuaciones debe ser igual a 10!")
    }
}


let resultado2 = () => {
    let p20 = document.getElementById("p20");
    let p21 = document.getElementById("p21");
    let p22 = document.getElementById("p22");
    let p23 = document.getElementById("p23");
    let p24 = document.getElementById("p24");
    let p25 = document.getElementById("p25");
    let p26 = document.getElementById("p26");
    let p27 = document.getElementById("p27");

    p20 = parseInt(p20.value);
    p21 = parseInt(p21.value);
    p22 = parseInt(p22.value);
    p23 = parseInt(p23.value);
    p24 = parseInt(p24.value);
    p25 = parseInt(p25.value);
    p26 = parseInt(p26.value);
    p27 = parseInt(p27.value);

    suma = p20 + p21 + p22 + p23 + p24 + p25 + p26 + p27;
    
    if (suma == 10) {
        t1 = t1 + p26;
        t2 = t2 + p23;
        t3 = t3 + p25;
        t4 = t4 + p22;
        t5 = t5 + p20;
        t6 = t6 + p27;
        t7 = t7 + p21;
        t8 = t8 + p24;
        console.log(suma)
        //mostrar siguiente sección
        let s2 = document.getElementById("s2");
        s1.style.display ="none"
        let s3 = document.getElementById("s3");
        s3.style.display="block";
    } else{
        alert("La suma de las puntuaciones debe ser igual a 10!")
    }
}


let resultado2 = () => {
    let p20 = document.getElementById("p20");
    let p21 = document.getElementById("p21");
    let p22 = document.getElementById("p22");
    let p23 = document.getElementById("p23");
    let p24 = document.getElementById("p24");
    let p25 = document.getElementById("p25");
    let p26 = document.getElementById("p26");
    let p27 = document.getElementById("p27");

    p20 = parseInt(p20.value);
    p21 = parseInt(p21.value);
    p22 = parseInt(p22.value);
    p23 = parseInt(p23.value);
    p24 = parseInt(p24.value);
    p25 = parseInt(p25.value);
    p26 = parseInt(p26.value);
    p27 = parseInt(p27.value);

    suma = p20 + p21 + p22 + p23 + p24 + p25 + p26 + p27;
    
    if (suma == 10) {
        t1 = t1 + p26;
        t2 = t2 + p23;
        t3 = t3 + p25;
        t4 = t4 + p22;
        t5 = t5 + p20;
        t6 = t6 + p27;
        t7 = t7 + p21;
        t8 = t8 + p24;
        console.log(suma)
        //mostrar siguiente sección
        let s2 = document.getElementById("s2");
        s1.style.display ="none"
        let s3 = document.getElementById("s3");
        s3.style.display="block";
    } else{
        alert("La suma de las puntuaciones debe ser igual a 10!")
    }
}
