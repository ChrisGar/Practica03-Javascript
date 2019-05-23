function validar(){

    var bandera = false;

    for (var i = 0; i<document.forms[0].length; i++){
        var elemento = document.forms[0].elements[i];
        if (elemento.value.trim() == ''){
            bandera = true;
            elemento.classList.add('error');
            break;
        }
    }

    if (bandera == true){

        alert('Llenar todos los campos');
        document.getElementById('p').classList.add('p');
        return false;

    } else {
        var cedula = validarCedula();
        var correo = validarCorreo();
        if (cedula || correo) {
            return false;
        } else {
            return true;
        }

    }
}


function ingresa(elemento) {
    elemento.classList.remove('error');
    document.getElementById('p').classList.remove('p');
}

function solo_numeros(string){
    var out = '';
    var filtro = '1234567890';//Caracteres validos
    
    //Recorre el value y verifica si el caracter se encuentra en la lista de validos 
    for (var i = 0; i < string.length; i++)
        if (filtro.indexOf(string.charAt(i)) != -1) 
        //Se añaden a la salida los caracteres validos
        out += string.charAt(i);
    
    //Retornar el valor filtrado
    return out;
} 


function solo_letras(string){
    var out = '';
    var filtro = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ ';//Caracteres validos
    
    //Recorre el value y verifica si el caracter se encuentra en la lista de validos 
    for (var i = 0; i < string.length; i++)
        if (filtro.indexOf(string.charAt(i)) != -1) 
        //Se añaden a la salida los caracteres validos
        out += string.charAt(i);
   
    return out;
} 


function dos_palabras(string) {
    var out = '';
    var array = string.split(' ');
    if (array.length == 1){
        out += array[0];
    } else {
        out += array[0] + ' ' + array[1];
    }
    
    return out;
}

function validarFecha() {
    var array = document.getElementById('fechaNacimiento').value.split('/');
    var fecha = new Date(array[2], array[1], array[0]);
    if (array.length == 3 && fecha 
        && array[0] == fecha.getDate() 
        && array[1] == fecha.getMonth() 
        && array[2] == fecha.getFullYear()) {
        return false;
    } else {
        document.getElementById('fechaNacimiento').classList.add('error');
        document.getElementById('mensajeFecha').classList.add('p');
        alert('Fecha mal ingresada, usar formato dd/mm/yyyy');
        return true; 
    }
}

function validarCedula() {
    var cedula = document.getElementById('cedula').value.trim();
    if (cedula.substring(0, 2) > 24) {
        document.getElementById('cedula').classList.add('error');
        document.getElementById('mensajeCedula').classList.add('p');
        alert('Cédula no válida');
        return true;
    } else {
        return false;
    }
}

function validarCorreo() {
    var array = document.getElementById('correo').value.split('@');

    if(array[0].length < 3) {
        document.getElementById('correo').classList.add('error');
        alert('Correo no válido')
        return true;
    } else {
        if (!(array[1] == 'ups.edu.ec') && !(array[1] == 'est.ups.edu.ec') && !(array[1] == 'hotmail.com') && !(array[1] == 'gmail.com')) {
            document.getElementById('correo').classList.add('error');
            document.getElementById('mensajeCorreo').classList.add('p');
            alert('Extensión no válida')
            return true;
        } else {
            return false;
        }
        
    } 
}