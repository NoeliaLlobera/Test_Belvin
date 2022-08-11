// Variables tipos de personas
let t1 = 0; //impulsor
let t2 = 0; //coordinador
let t3 = 0; //implementador
let t4 = 0; //cerebro
let t5 = 0; //inv. recursos
let t6 = 0; //monitor
let t7 = 0; //cohesionador
let t8 = 0; //finalizador

//otras variables
let suma; 
let arrayFinal = [];


// Funciones botones
let empezar = () => {
    let cont_inici = document.getElementById("intro");
    cont_inici.style.display ="none";
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
        console.log(suma);
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
        t1 = t1 + p20;
        t2 = t2 + p21;
        t3 = t3 + p24;
        t4 = t4 + p26;
        t5 = t5 + p22;
        t6 = t6 + p23;
        t7 = t7 + p25;
        t8 = t8 + p27;
        console.log(suma);
        //mostrar siguiente sección
        let s2 = document.getElementById("s2");
        s2.style.display ="none"
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
        t1 = t1 + p37;
        t2 = t2 + p30;
        t3 = t3 + p32;
        t4 = t4 + p33;
        t5 = t5 + p35;
        t6 = t6 + p36;
        t7 = t7 + p34;
        t8 = t8 + p31;
        console.log(suma);
        //mostrar siguiente sección
        let s3 = document.getElementById("s3");
        s3.style.display ="none"
        let s4 = document.getElementById("s4");
        s4.style.display="block";
    } else{
        alert("La suma de las puntuaciones debe ser igual a 10!")
    }
}


let resultado4 = () => {
    let p40 = document.getElementById("p40");
    let p41 = document.getElementById("p41");
    let p42 = document.getElementById("p42");
    let p43 = document.getElementById("p43");
    let p44 = document.getElementById("p44");
    let p45 = document.getElementById("p45");
    let p46 = document.getElementById("p46");
    let p47 = document.getElementById("p47");

    p40 = parseInt(p40.value);
    p41 = parseInt(p41.value);
    p42 = parseInt(p42.value);
    p43 = parseInt(p43.value);
    p44 = parseInt(p44.value);
    p45 = parseInt(p45.value);
    p46 = parseInt(p46.value);
    p47 = parseInt(p47.value);

    suma = p40 + p41 + p42 + p43 + p44 + p45 + p46 + p47;
    
    if (suma == 10) {
        t1 = t1 + p43;
        t2 = t2 + p47;
        t3 = t3 + p41;
        t4 = t4 + p44;
        t5 = t5 + p46;
        t6 = t6 + p42;
        t7 = t7 + p40;
        t8 = t8 + p45;
        console.log(suma);
        //mostrar siguiente sección
        let s4 = document.getElementById("s4");
        s4.style.display ="none"
        let s5 = document.getElementById("s5");
        s5.style.display="block";
    } else{
        alert("La suma de las puntuaciones debe ser igual a 10!")
    }
}




let resultado5 = () => {
    let p50 = document.getElementById("p50");
    let p51 = document.getElementById("p51");
    let p52 = document.getElementById("p52");
    let p53 = document.getElementById("p53");
    let p54 = document.getElementById("p54");
    let p55 = document.getElementById("p55");
    let p56 = document.getElementById("p56");
    let p57 = document.getElementById("p57");

    p50 = parseInt(p50.value);
    p51 = parseInt(p51.value);
    p52 = parseInt(p52.value);
    p53 = parseInt(p53.value);
    p54 = parseInt(p54.value);
    p55 = parseInt(p55.value);
    p56 = parseInt(p56.value);
    p57 = parseInt(p57.value);

    suma = p50 + p51 + p52 + p53 + p54 + p55 + p56 + p57;
    
    if (suma == 10) {
        t1 = t1 + p51;
        t2 = t2 + p55;
        t3 = t3 + p53;
        t4 = t4 + p57;
        t5 = t5 + p54;
        t6 = t6 + p50;
        t7 = t7 + p52;
        t8 = t8 + p56;
        console.log(suma);
        //mostrar siguiente sección
        let s5 = document.getElementById("s5");
        s5.style.display ="none"
        let s6 = document.getElementById("s6");
        s6.style.display="block";
    } else{
        alert("La suma de las puntuaciones debe ser igual a 10!")
    }
}


let resultado6 = () => {
    let p60 = document.getElementById("p60");
    let p61 = document.getElementById("p61");
    let p62 = document.getElementById("p62");
    let p63 = document.getElementById("p63");
    let p64 = document.getElementById("p64");
    let p65 = document.getElementById("p65");
    let p66 = document.getElementById("p66");
    let p67 = document.getElementById("p67");

    p60 = parseInt(p60.value);
    p61 = parseInt(p61.value);
    p62 = parseInt(p62.value);
    p63 = parseInt(p63.value);
    p64 = parseInt(p64.value);
    p65 = parseInt(p65.value);
    p66 = parseInt(p66.value);
    p67 = parseInt(p67.value);

    suma = p60 + p61 + p62 + p63 + p64 + p65 + p66 + p67;
    
    if (suma == 10) {
        t1 = t1 + p65;
        t2 = t2 + p62;
        t3 = t3 + p66;
        t4 = t4 + p60;
        t5 = t5 + p67;
        t6 = t6 + p64;
        t7 = t7 + p61;
        t8 = t8 + p63;
        console.log(suma);
        //mostrar siguiente sección
        let s6 = document.getElementById("s6");
        s6.style.display ="none"
        let s7 = document.getElementById("s7");
        s7.style.display="block";
    } else{
        alert("La suma de las puntuaciones debe ser igual a 10!")
    }
}


let resultado7 = () => {
    let p70 = document.getElementById("p70");
    let p71 = document.getElementById("p71");
    let p72 = document.getElementById("p72");
    let p73 = document.getElementById("p73");
    let p74 = document.getElementById("p74");
    let p75 = document.getElementById("p75");
    let p76 = document.getElementById("p76");
    let p77 = document.getElementById("p77");

    p70 = parseInt(p70.value);
    p71 = parseInt(p71.value);
    p72 = parseInt(p72.value);
    p73 = parseInt(p73.value);
    p74 = parseInt(p74.value);
    p75 = parseInt(p75.value);
    p76 = parseInt(p76.value);
    p77 = parseInt(p77.value);

    suma = p70 + p71 + p72 + p73 + p74 + p75 + p76 + p77;
    
    if (suma == 10) {
        t1 = t1 + p74;
        t2 = t2 + p76;
        t3 = t3 + p70;
        t4 = t4 + p75;
        t5 = t5 + p73;
        t6 = t6 + p71;
        t7 = t7 + p77;
        t8 = t8 + p72;
        console.log(suma);
        //calcular final
        arrayFinal[0] = t1;
        arrayFinal[1] = t2;
        arrayFinal[2] = t3;
        arrayFinal[3] = t4;
        arrayFinal[4] = t5;
        arrayFinal[5] = t6;
        arrayFinal[6] = t7;
        arrayFinal[7] = t8;
        let mes_gran = 0;
        let rol = 1;
        for (let i=0; i<9; i++){
            if(arrayFinal[i] > mes_gran){
                mes_gran = arrayFinal[i];
                rol = i + 1;
            }
        }
        console.log(rol);
        let mostrar;
        switch(rol){
            case 1:
                mostrar = document.getElementById("d_impulsor");
                mostrar.style.display = "block"; 
                break;
            case 2:
                mostrar = document.getElementById("d_coordinador");
                mostrar.style.display = "block"; 
                break;
            case 3:
                mostrar = document.getElementById("d_implementador");
                mostrar.style.display = "block"; 
                break;
            case 4:
                mostrar = document.getElementById("d_cerebro");
                mostrar.style.display = "block"; 
                break;
            case 5:
                mostrar = document.getElementById("d_investigador");
                mostrar.style.display = "block"; 
                break;
            case 6:
                mostrar = document.getElementById("d_monitor");
                mostrar.style.display = "block"; 
                break;
            case 7:
                mostrar = document.getElementById("d_cohesionador");
                mostrar.style.display = "block"; 
                break;
            case 8:
                mostrar = document.getElementById("d_finalizador");
                mostrar.style.display = "block"; 
                break;
        }

        //mostrar siguiente sección
        let s7 = document.getElementById("s7");
        s7.style.display ="none";
        let s_rec = document.getElementById("s_rec");
        s_rec.style.display="block";



    } else{
        alert("La suma de las puntuaciones debe ser igual a 10!")
    }
}

let todos_roles = () =>{
    let y = document.getElementById("boton_roles").style.display = "none";
    for(let i=0; i<9; i++){
        let a = document.getElementsByClassName("rol")[i];
        a.style.display="block";
    }
}