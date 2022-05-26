const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
        const lucas = document.getElementById('initid');
        lucas.classList.toggle('active');
        const active = lucas.classList.contains('active');
        event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Cerrar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

var inputs = document.getElementsByClassName('form-input');
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1) {
            this.nextElementSibling.classList.add('fijar');
        } else {
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}

var inputs = document.getElementsByName('mensaje');
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1) {
            this.nextElementSibling.classList.add('fijarmsg');
        } else {
            this.nextElementSibling.classList.remove('fijarmsg');
        }
    });
}




//funciones para validar el formulario

const btnEnviartodo = document.getElementById('btn-enviar');

btnEnviartodo.addEventListener('click', validacion);

var regtel = /^[\+]?[(]?[0-9]{3,}[)]?[-\s\.]?[0-9]{3,}[-\s\.]?[0-9]{2,}$/;
var regemail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


function validacion(e) {
    e.preventDefault()
    //valido el nombre 
    if (document.formulario.nombre.value.length == 0) {
        alert("Por favor introduzca un nombre")
        document.formulario.nombre.focus()
        return 0;
    }
    if (document.formulario.nombre.value.match(/^[a-zA-Z]+$/)){}
    else {
        alert("Tiene que escribir un Nombre/s valido/s con letras mayusculas o minusculas")
        document.formulario.nombre.focus()
        return 0;
    }

    //valido el apellido
    if (document.formulario.apellido.value.length == 0) {
        alert("Por favor introduzca el Apellido correspondiente.")
        document.formulario.apellido.focus()
        return 0;
    }
    if (document.formulario.apellido.value.match(/^[a-zA-Z]+$/)){}
    else {
        alert("Tiene que escribir un Apellido/s valido/s con letras mayusculas o minusculas")
        document.formulario.apellido.focus()
        return 0;
    }

    //validando el telefono
    if (document.formulario.telefono.value.length == 0) {
        alert("Por favor introduzca un Numero de Telefono")
        document.formulario.telefono.focus()
        return 0;
    }
    if (document.formulario.telefono.value.match(regtel)){}
    else {
        alert("el numero que ingresó es invalido. Por favor introduzca un numero de telefono valido para continuar.")
        document.formulario.telefono.focus()
        return 0;
    }

    //validando email

    if (document.formulario.email.value.length == 0) {
        alert("por favor introduzca un correo electronico de contacto para poder comunicarnos con usted")
        document.formulario.email.focus()
        return 0;
    }
    if (document.formulario.email.value.match(regemail)){}
    else {
        alert("el correo electronico de contacto que ingresó es invalido. Por favor introduzca uno valido para poder continuar.")
        document.formulario.email.focus()
        return 0;
    }
    
    //validando mensaje
    if (document.formulario.mensaje.value.length == 0) {
        alert("por favor introduzca el mensaje que desea enviarnos")
        document.formulario.email.focus()
        return 0;
    }

    //fin de funcion
    alert("Muchas gracias por enviar el formulario");
    document.fvalida.submit();
}
    

    

// if (document.formulario.telefono.value.length ==0)

//     //valido la edad. tiene que ser entero mayor que 18
//     edad = document.fvalida.edad.value
//     edad = validarEntero(edad)
//     document.fvalida.edad.value = edad
//     if (edad == "") {
//         alert("Tiene que introducir un número entero en su edad.")
//         document.fvalida.edad.focus()
//         return 0;
//     } else {
//         if (edad < 18) {
//             alert("Debe ser mayor de 18 años.")
//             document.fvalida.edad.focus()
//             return 0;
//         }
//     }

//     //valido el interés
//     if (document.fvalida.interes.selectedIndex == 0) {
//         alert("Debe seleccionar un motivo de su contacto.")
//         document.fvalida.interes.focus()
//         return 0;
//     }

//     //el formulario se envia
//     alert("Muchas gracias por enviar el formulario");
//     document.fvalida.submit();
// }

// var regtel = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

// 

// function validarEntero(valor) {
//     //intento convertir a entero.
//     //si era un entero no le afecta, si no lo era lo intenta convertir
//     valor = parseInt(valor)

//     //Compruebo si es un valor numérico
//     if (isNaN(valor)) {
//         //entonces (no es numero) devuelvo el valor cadena vacia
//         return ""
//     } else {
//         //En caso contrario (Si era un número) devuelvo el valor
//         return valor
//     }
// }
// btnEnviartodo.addEventListener('click', validacion);