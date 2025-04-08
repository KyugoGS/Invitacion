let opciones;
let numero1;
let numero2;
let resultado;

do {
    opciones = Number(prompt("Elige una opción:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir \n5. Salir"));
}while (opciones < 1 || opciones > 5 || isNaN(opciones));

if (opciones == 1) {
    do{
        numero1 = Number(prompt("introduzca un valor numerico"));
    }while (isNaN(numero1));
    do{
        numero2 = Number(prompt("introduzca otro numero ñerito"));
    }while (isNaN(numero2));
    resultado = alert("uy ñerito, el resultado de la suma es: " + (numero1 + numero2));
}else if (opciones == 2) {
    do{
        numero1 = Number(prompt("introduzca un valor numerico"));
    }while (isNaN(numero1));
    do{
        numero2 = Number(prompt("introduzca otro numero ñerito"));
    }while (isNaN(numero2));
    resultado = alert("ay perrito, va fino, el resultado es : " + (numero1 - numero2));
}else if (opciones == 3) {
    do{
        numero1 = Number(prompt("introduzca un valor numerico"));
    }while (isNaN(numero1));
    do{
    numero2 = Number(prompt("introduzca otro numero ñerito"));
    }while (isNaN(numero2));
    resultado = alert("jai parce, vea, una chimbada de multiplicacion: " + (numero1 * numero2));
}else if (opciones == 4) {
    do{
    numero1 = Number(prompt("introduzca un valor numerico"));
    }while (isNaN(numero1));
    do {
        numero2 = Number(prompt("introduzca otro numero ñerito"));
    }while (isNaN(numero2));
        resultado = alert("ea ñero, un duro, resultado = " + (numero1 / numero2));
}else if (opciones == 5) {
    alert("Gracias por usar la calculadora ñerito, vuelva pronto");
}