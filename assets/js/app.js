var input = document.querySelector("input");
//funcion que limpia el valor del input al clickear sobre el mismo
function limpiar(){
        input.value = "";            
    }
input.onclick = limpiar;
//Esta función captura el estring del input y lo transforma a array
function stringToArr(){
    let ingresado = input.value;
    let arrCon = Array.from(ingresado);
        return arrCon;
    }
//Esta función toma un array, itera cada posición buscando una vocal para reemplazandola y devuelve el array encriptado
function encriptador(arr){
        for(let i=0; i<arr.length; i++){
            if(arr[i] == 'a'){
                arr[i] = 'ai'
            }
            if(arr[i] == 'e'){
                arr[i] = 'enter'
            }
            if(arr[i] == 'i'){
                arr[i] = 'imes'
            }
            if(arr[i] == 'o'){
                arr[i] = 'ober'
            }
            if(arr[i] == 'u'){
                arr[i] = 'ufat'
            }
        }
        return arr;
    }
//Esta función toma un array, busca en cada posición del array una vocal. 
//Si existe, agrega dicha vocal a un nuevo array y recorre el iterador n posiciones segun el tamaño de la palabra encriptada (a - ai => 2 posiciones)  también agrega otros caracteres conferme los va encontrando
function desencriptador(arr){
    let posicion = 0;
    let arrNew=[];
    let caracter;
    while(posicion < arr.length){
        if(arr[posicion] != 'a' && arr[posicion] != 'e' && arr[posicion] != 'i' && arr[posicion] != 'o' && arr[posicion] != 'u'){
            arrNew.push(arr[posicion]);
            console.log(arrNew);
        }else{
            caracter = arr[posicion];
            console.log(caracter); 
            switch(caracter){
                case 'a': 
                    arrNew.push('a');
                    posicion = posicion+1;
                    //console.log(posicion);
                    break;
                case 'e': 
                    arrNew.push('e');
                    posicion = posicion+4;
                    break;
                case 'i': 
                    arrNew.push('i');
                    posicion = posicion+3;
                    break;
                case 'o': 
                    arrNew.push('o');
                    posicion = posicion+3;
                    break;
                case 'u': 
                    arrNew.push('u');
                    posicion = posicion+3;
                default:
                    break;    
            }
        }
    
    posicion ++;
    }

    return arrNew;
}
//Convierte a string el arreglo procesado 
function arrToString(arrEncrip){
    var cadena = arrEncrip.join("");
    return cadena;
}
// Muestra el resultado de encriptar un texto en una etiqueta p de html
function mostrar(){
    var objetivo = document.getElementById('texto_navi');
//comprueba que se este ingresando algo en el input
    if(input.value == "Ingrese texto aquí" || input.value == ""){
        alert("Por favor ingrese mensaje a procesar");
    }else{
        var cadenaValidar = input.value;
        //var val = /^[A-Z\u00C0-\u017F]+$/
        var validado = /[A-Z\u00C0-\u017F]/.test(cadenaValidar);
//        console.log(validado)

        if(validado == true){
            alert('No se aceptan mayusculas ni caracteres especiales')
        }else{

            var arrConvertido = stringToArr();
            var arrEncriptado = encriptador(arrConvertido);
            var cadenaEncriptada = arrToString(arrEncriptado);
            objetivo.value = cadenaEncriptada;
        }
    }
    limpiar();
    input.value = "Ingrese texto aquí";
}
// Muestra el resultado de desencriptar un texto en una etiqueta p de html
function mostrarDecifrado(){
    var objetivo = document.getElementById('texto_navi');
//comprueba que se este ingresando algo en el input 
    if(input.value == "Ingrese texto aquí" || input.value == ""){
        alert("Por favor ingrese mensaje a procesar");
    }else{
        var cadenaValidar = input.value;
        //var val = /^[A-Z\u00C0-\u017F]+$/
        var validado = /[A-Z\u00C0-\u017F]/.test(cadenaValidar);
//        console.log(validado)

        if(validado == true){
            alert('No se aceptan mayusculas ni caracteres especiales')
        }else{

            var arrAConv = stringToArr();
            var arrDesencriptado = desencriptador(arrAConv);
            var cadenaDesencriptada = arrToString(arrDesencriptado);
            objetivo.value = cadenaDesencriptada;
        }
    }
    limpiar();
    input.value = "Ingrese texto aquí";
}

function copiarAlPortapapeles(){
    let textRes = document.getElementById('texto_navi');
    textRes.focus();
    document.execCommand('selectAll');
    document.execCommand('copy');
}


var buttonEncriptar = document.getElementById('encrip_btn');
buttonEncriptar.onclick = mostrar;

var buttonDesencriptar = document.getElementById('desencrip_btn');
buttonDesencriptar.onclick = mostrarDecifrado;

var buttonCopiar = document.getElementById('copy_btn');
buttonCopiar.onclick = copiarAlPortapapeles;
