// Codigo del Cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
};

function areaCuadrado(lado) {
    return lado * lado;
};

// Codigo del Triangulo
function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;
};

function areaTriangulo (base, altura) {
    return (base * altura) / 2;
};

// Codigo del Circulo
//Diametro
    function diametroCirculo(radio){
    return radio * 2;
};

//Pi
const PI = Math.PI;

//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo (radio);
    return diametro * PI;
};

//Area
function areaCirculo (radio) {
    return (radio * radio) * PI;
};


//Aqui interactuamos con HTML 
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//HTML del Triangulo
function calcularPerimetroTriangulo () {
    const input = document.getElementById("InputTriangulo");
    const value = input.value;

    const perimetro = perimetroTriangulo(value);
    alert(perimetro);
}

