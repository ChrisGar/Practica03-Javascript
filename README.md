# Practica03-Javascript

INSTRUCCIONES  	A partir de los siguientes problemas se pide implementar soluciones basadas en el lenguaje de programación de JavaScript usando funciones y eventos. 
 
1.	Se pide construir una calculadora en el lenguaje de programación de JavaScript con base a un formulario HTML usando botones y una caja de texto. Además, para que permita realizar operaciones aritméticas de complejidad básica, como: suma, resta, multiplicación, división, raíz cuadrada, entre otros.
 

                                                                 







Index.html

<!DOCTYPE html>
    <html>
        <head>
        <title>Calculadora basica</title>
        <link href="CSS/index.css" rel="stylesheet" />
        <script type="text/javascript" src="funciones.js"></script> 
        </head>
        <body>

        <form name="f1"><br>
        <input type="text" id="txtcaja1" name="txtcaja1">
        <br>
        <input type="text" id="txtcaja2" name="txtcaja2" value="0">
        <br>
        <input type="button"  class="arit" onClick="arit('%')" value="%">
    <input type="button"  onClick="raiz()" value="√">
    <input type="button"  onClick="cuadrado()" value="x²">
    <input type="button"  onClick="unoSobrex()" value="¹/×">
    <br>
    <input type="button" class="clear" onClick="document.f1.txtcaja2.value='0'" value="CE">
    <input type="button" class="clear" onClick="document.f1.reset(); blocdel = false;" value="C">
    <input type="button" class="clear" onClick="eliminaNumero()" value="◄">
 
    <input type="button" class="arit" onClick="arit('/')" value="÷">
    <br>
    <input type="button" onclick="escribir(this.value)" value="7">
    <input type="button" onclick="escribir(this.value)" value="8">
    <input type="button" onclick="escribir(this.value)" value="9">
    <input type="button" class="arit" onClick="arit('*')" value="×">
    <br>
    <input type="button" onclick="escribir(this.value)" value="4">
    <input type="button" onclick="escribir(this.value)" value="5">  
    <input type="button" onclick="escribir(this.value)" value="6"> 
    <input type="button" class="arit" onClick="arit('-')" value="-">        
    <br>
    <input type="button" onclick="escribir(this.value)" value="1">
    <input type="button" onclick="escribir(this.value)" value="2">
    <input type="button" onclick="escribir(this.value)" value="3">
    <input type="button" class="arit" onClick="arit('+')" value="+">
    <br>
    <input type="button" class="arit" onClick="masmenos()" value="±">
    <input type="button" onclick="escribir(this.value)" value="0">
    <input type="button" onClick="escribir('.')" value=".">
    <input type="button" class="igual" onClick="calcular()" value="=">
    <br>
    </form>

    </body>
</html>

Funciones.js

var borrar = false;
    function eliminaNumero(){
        var caja2 = document.getElementById("txtcaja2").value
            if (caja2 == "" || caja2 == "0" || caja2.length == 1 && blocdel!=true){
                document.getElementById("txtcaja2").value = "0";
            }
            else if(blocdel!=true){
                 var res = caja2.substring(0,caja2.length-1);
                document.getElementById("txtcaja2").value = res
             
            }
    }
   function escribir(n){
    var caja2 = document.getElementById("txtcaja2").value
        if (borrar) {
            //alert("se borro");
            document.getElementById("txtcaja2").value = " "
            borrar = false;
            document.getElementById("txtcaja2").value = n
        }
        else if (caja2 == "0" && n != "."){
            cajao = caja2.replace("0", "")
            document.getElementById("txtcaja2").value =  cajao + n;
        }
        else{
            document.getElementById("txtcaja2").value = caja2 + n;
        }
    }
    function raiz(){
        var caja1 = document.getElementById("txtcaja1").value
        var caja2 = document.getElementById("txtcaja2").value
        document.getElementById("txtcaja1").value = "Math.sqrt("+ caja2 + caja1 +")";
        document.getElementById("txtcaja2").value = ""
    }

    function cuadrado(){
        var caja1 = document.getElementById("txtcaja1").value
        var caja2 = document.getElementById("txtcaja2").value
        document.getElementById("txtcaja1").value = "Math.pow("+ caja2 + caja1 +",2)";
        document.getElementById("txtcaja2").value = ""
    }

    function unoSobrex(){
        var caja1 = document.getElementById("txtcaja1").value
        var caja2 = document.getElementById("txtcaja2").value
        document.getElementById("txtcaja1").value = "1/("+ caja2 + caja1+")";
        document.getElementById("txtcaja2").value = ""
    }

    
    function arit(o){
        var caja1 = document.getElementById("txtcaja1").value
        var caja2 = document.getElementById("txtcaja2").value
        var unum = caja1.substring(caja1.length-1);
        calcular()
        if (unum == "+" || unum == "-" || unum=="*" || unum=="/" || unum=="x²") {
            unum = unum.replace(unum,o);
            var res = caja1.substring(0,caja1.length-1);
            document.getElementById("txtcaja1").value = res+unum;
        }
        if (caja1 == "" && caja2 != ""){
            document.getElementById("txtcaja1").value = caja2 + o;
        }
        else{
            document.getElementById("txtcaja1").value = caja1 + caja2 + o;
        }
        borrar = true;
    }
    function calcular(){
        var caja1 = document.getElementById("txtcaja1").value
        var caja2 = document.getElementById("txtcaja2").value
        document.getElementById("txtcaja2").value = eval(caja1 + caja2);
        document.getElementById("txtcaja1").value = "";
        borrar = true;
        blocdel = true;
    }
    function masmenos(){
        var caja2 = document.getElementById("txtcaja2").value
        if (caja2 > 0){
            document.getElementById("txtcaja2").value = "(-" + caja2 + ")";
        }
        else{
            cajaplus = caja2.replace(/[-|(|)]/g, "");
            document.getElementById("txtcaja2").value = cajaplus;
        }
    }

Index.css

input[type="button"]:hover{
    background-color:slategray;
    cursor: pointer;
}
input[type="button"].arit{
    background-color:silver;
}
input[type="button"].igual{
    background-color: grey;
}
input[type="button"].clear{
    background-color:silver;
}
form{
    background-color:black;
    font-weight: bolder;
}
input[type="text"]{
    background-color:grey;
    border:0px;
    width:250px;
    height: 40px;
    font-size: 20px;
    font-weight: bolder;
    color: black;
    text-align: right;
    pointer-events: none;
}
input[name="txtcaja1"]{
    height: 20px;
    font-size: 16px;
    
}
input[name="txtcaja2"]{
    margin-bottom: 5px;
    font-size: 26px;
}
input[type="button"]{
    font-size: 18px;
    font-weight:lighter;
    font-family:Segoe, "Segoe UI", "DejaVu Sans", "Trebuchet MS", Verdana, "sans-serif";
    width:60px;border:0px;
    height: 60px;
    color: black;
    background-color:white;
    margin-bottom: 5px;
    }
body{
    background-color:black;
}










 









2.	Diseñar una interfaz en HTML que permita ingresar los siguientes campos en un formulario: cedula, nombres, apellidos, dirección, teléfono, fecha de nacimiento y correo electrónico. Luego, usando funciones de JavaScript se debe validar que todos los campos han sido ingresados, además; que los valores ingresados en cada campo del formulario sean correctos teniendo en cuenta las siguientes condiciones: 
a.	Se debe validar qué, en el campo de la cedula, se ingrese sólo número y que la misma sea correcta, en base, al último dígito verificador. 
b.	Se debe validar qué, en el campo del nombres, ingrese únicamente dos nombres y que permita ingresar sólo letras. 

c.	Se debe validar qué, en el campo del teléfono, permita ingresar sólo números. 
d.	Se debe validar que la fecha de nacimiento ingrese en el formato dd/mm/yyyy. 
e.	Se debe validar qué, en el campo correo electrónico, permita ingresar un correo válido. Se considera un correo válido, cuando comienza por tres o más valores alfanuméricos, luego un @, seguido por la extensión 
“ups.edu.ec” o “est.ups.edu.ec”. 














                                      

          

Index.html

!DOCTYPE html> 
<html> 
    <head>     
        <meta charset="UTF-8"> 
        <link href="estilo1.css" rel="stylesheet" />
        <script type="text/javascript" src="funcionValidacion.js"></script> 
        <style type="text/css">
            .error{
                color: blue;
                font-size: 15px;
            }
        </style>
        
    </head> 
    <body> 
 
    <form id="formulario01" method="POST" action="" onsubmit="return validar()">         
              
        <input type="text" id="cedula" name="cedula" value="" placeholder="Ingrese el número de cedula ..."onfocus="escribe(this)" onkeyup="this.value = solo_numeros(this.value)""/>
        <span id="mensajeCedula" class="error"> </span>         
        <br> 
 
          
        <input type="text" id="nombres" name="nombres" value="" placeholder="Ingrese sus dos nombres ..." onkeyup="this.value = solo_letras(this.value)" onchange="this.value = dos_palabras(this.value)"/>  
        <span id="mensajeNombres" class="error"> </span>
        <br> 
 
                
        <input type="text" id="apellidos" name="apellidos" value="" placeholder="Ingrese sus dos apellidos ..."onfocus="escribe(this)" onkeyup="this.value = solo_letras(this.value)" onchange="this.value = dos_palabras(this.value)"/>         
        <br> 
 
               
        <input type="text" id="direccion" name="direccion" value="" placeholder="Ingrese su dirección ... " onfocus="escribe(this)"/>         
        <br> 
 
       
        <input type="text" id="telefono" name="telefono" value="" placeholder="Ingrese su número telefónico ..."onfocus="escribe(this)" onkeyup="this.value = val_numero(this.value)"/>         
        <br>                 
 
        <label for="fecha" id="fecha">Fecha Nacimiento</label>         
        <input type="date" id="fechaNacimiento" name="fechaNacimiento" value="" placeholder="Ingrese su fecha de nacimiento ..."onfocus="escribe(this)"/>         
        <span id="mensajeFecha" class="error"> </span>
        <br> 
 
                 
        <input type="email" id="correo" name="correo" value="" placeholder="Ingrese su correo electrónico ..."onfocus="escribe(this)"/>         
        <span id="mensajeCorreo" class="error"> </span>   
        <br> 
 
        <input type="submit" id="crear" name="crear" value="Aceptar" />         
        <input type="reset" id="cancelar" name="cancelar" value="Cancelar" />     
    </form>   
    <spam id="p" style="display: none;">Error, Campos Incompletos!</spam>  
 
</body> 
</html> 




FuncionValidacion.js

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











Estilo1.css

html{
    background-color: black;
    background-image: url("fondo.jpg");
}

h1{
    margin-left: 41%; 
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-style: oblique;
}

#logo{
    margin-left: 39%;
}
form{
    background-color:silver;
    color:black;
    width: 40%; 
    margin-left: 30%;
    margin-top: 6%;
    height: 100%;
    padding-top: 5%;
    padding-bottom: 5%;
}

input{ 
    margin-left: 20%;
    margin-bottom: 1.5%;
    font-size: 20px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    width: 60%; 

}

#crear{
    margin-left: 18.5%;
    margin-top: 5%;
    width:25%;
    font-size: 17px;
    font-weight: bold;
    height: 50% ;
    margin-bottom: 4%;
}

#cancelar{

    width: 17%;
    font-size: 17px;
    font-weight: bold;
    height: 50% ;
}

#fecha{
    margin-left: 20%;
    font-weight: bold;
}




	
Indicaciones: 
•	Para realizar las validaciones de solo letras, o sólo números. Se las debe realizar en tiempo real, es decir, a medida que el usuario escribe en el campo. 
•	Todos los campos de entrada dentro del formulario deben de ser de tipo “text”. • 	Las demás validaciones se realizarán al momento de “enviar” (submit) la información del formulario hacia una página php. Si no cumple las validaciones, se mostrará un mensaje debajo de cada campo con el error y se pintara el campo con un borde rojo que representará que el campo tiene un error. Si se cumple las validaciones, se enviará a una página php, en donde se mostrará únicamente un mensaje que diga “Bienvenido, pasaste las validaciones!”. 
 
3.	Diseñar una interfaz en html que tenga tres botones que diga “Anterior”, “Iniciar”, “Siguiente”, y una imagen. Luego, desde javascript se debe controlar para al hacer clic sobre uno de los botones realice una acción relacionada a una galería de imágenes (ver ejemplo, https://gihp4c.blog.ups.edu.ec/) 

   

       
Imágenes.html

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejemplo</title>
    <style type="text/css" media="screen">
        .carousel {
            max-width: 660px;
            
            margin-top: 5%;
            margin-left: 25%;
            display: flex;
            background-color: blue;
        }

        button{
            background-color: lightblue;
        }
        #imagen {
            
            width: 100%;
            height: 400px;
            background-size: cover;
        }

        html{
            background-color: black;
        }
    </style>
    <script>
        window.onload = function () {
            // Variables
            const IMAGENES = [
                'img/1.jpg',
                'img/2.jpg',
                'img/3.jpg',
                'img/4.jpg'
            ];
            const TIEMPO_INTERVALO_MILESIMAS_SEG = 1500;
            let posicionActual = 0;
            let $botonRetroceder = document.querySelector('#retroceder');
            let $botonAvanzar = document.querySelector('#avanzar');
            let $imagen = document.querySelector('#imagen');
            let $botonPlay = document.querySelector('#play');
            let $botonStop = document.querySelector('#stop');
            let intervalo;

            // Funciones

            /**
             * Funcion que cambia la foto en la siguiente posicion
             */
            function pasarFoto() {
                if(posicionActual >= IMAGENES.length - 1) {
                    posicionActual = 0;
                } else {
                    posicionActual++;
                }
                renderizarImagen();
            }

            /**
             * Funcion que cambia la foto en la anterior posicion
             */
            function retrocederFoto() {
                if(posicionActual <= 0) {
                    posicionActual = IMAGENES.length - 1;
                } else {
                    posicionActual--;
                }
                renderizarImagen();
            }

            /**
             * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
             */
            function renderizarImagen () {
                $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
            }

            /**
             * Activa el autoplay de la imagen
             */
            function playIntervalo() {
                intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
                // Desactivamos los botones de control
                $botonAvanzar.setAttribute('disabled', true);
                $botonRetroceder.setAttribute('disabled', true);
                $botonPlay.setAttribute('disabled', true);
                $botonStop.removeAttribute('disabled');

            }

            /**
             * Para el autoplay de la imagen
             */
            function stopIntervalo() {
                clearInterval(intervalo);
                // Activamos los botones de control
                $botonAvanzar.removeAttribute('disabled');
                $botonRetroceder.removeAttribute('disabled');
                $botonPlay.removeAttribute('disabled');
                $botonStop.setAttribute('disabled', true);
            }

            // Eventos
            $botonAvanzar.addEventListener('click', pasarFoto);
            $botonRetroceder.addEventListener('click', retrocederFoto);
            $botonPlay.addEventListener('click', playIntervalo);
            $botonStop.addEventListener('click', stopIntervalo);
            // Iniciar
            renderizarImagen();
        } 
    </script>
</head>
<body>
    <div class="carousel">
        <button id="retroceder">Anterior</button>
        <div id="imagen"></div>
        <button id="avanzar">Siguiente</button>
    </div>
    <div class="controles">
        <button id="play">Reproducir</button>
        <button id="stop" disabled>Parar</button>
    </div>
</body>
</html>
