const formulario = document.getElementById("form");
const nombreInput = document.getElementById("nombre");
const apellidosInput = document.getElementById("apellidos");
const telefonoInput = document.getElementById("telefono");
const emailInput = document.getElementById("email");
const mensajeInput = document.getElementById("mensaje");
const pagoInput = document.getElementById("pago");
const privacidadInput = document.getElementById("privacidad");

//Función para ocultar o hacer visible el bloque de Presupuesto
const btnPresupuesto = document.getElementById("btnPresupuesto");
const presuForm = document.querySelector(".presuForm-container");

btnPresupuesto.addEventListener("click", function(){
    if(presuForm.style.display === "block" || presuForm.style.display === ""){
        presuForm.style.display = "none"
    }else{
        presuForm.style.display = "block";
    }
})

//Funciones para validar formulario
function validarNombre(){
    const nombre = nombreInput.value;
    const nombreVal = /^[a-zA-Z ]{1,15}$/
    if(nombreVal.test(nombre)){
        nombreInput.classList.add('valido');
        nombreInput.classList.remove('invalido');
        document.getElementById('nombreError').textContent = "";
    }else{
        nombreInput.classList.add('invalido');
        nombreInput.classList.remove('valido');
        document.getElementById('nombreError').textContent = "El nombre solo puede contener letras y tener máximo 15 caracteres";
    }
}
function validarApellidos(){
    const apellidos = apellidosInput.value;
    const apellidosVal = /^[a-zA-Z ]{1,40}$/
    if(apellidosVal.test(apellidos)){
        apellidosInput.classList.add('valido');
        apellidosInput.classList.remove('invalido');
        document.getElementById('apellidosError').textContent = "";
    }else{
        apellidosInput.classList.add('invalido');
        apellidosInput.classList.remove('valido');
        document.getElementById('apellidosError').textContent = "Los apellidos solo puede contener letras y tener máximo 40 caracteres";
    }
}
function validarTelefono(){
    const telefono = telefonoInput.value;
    const telefonoVal = /^[0-9]{1,9}$/
    if(telefonoVal.test(telefono)){
        telefonoInput.classList.add('valido');
        telefonoInput.classList.remove('invalido');
        document.getElementById('telefonoError').textContent = "";
    }else{
        telefonoInput.classList.add('invalido');
        telefonoInput.classList.remove('valido');
        document.getElementById('telefonoError').textContent = "El teléfono solo puede contener números y tener como máximo 9 caracteres";
    }
}
function validarEmail(){
    const email = emailInput.value;
    const emailVal = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    if(emailVal.test(email)){
        emailInput.classList.add('valido');
        emailInput.classList.remove('invalido');
        document.getElementById('emailError').textContent = "";
    }else{
        emailInput.classList.add('invalido');
        emailInput.classList.remove('valido');
        document.getElementById('emailError').textContent = "Introduce un correo electrónico válido";
    }
}
function validarMensaje(){
    const mensaje = mensajeInput.value;
    const mensajeVal = /^[a-zA-Z ][a-zA-Z0-9]*$/
    if(mensajeVal.test(mensaje)){
        mensajeInput.classList.add('valido');
        mensajeInput.classList.remove('invalido');
        document.getElementById('mensajeError').textContent = "";
    }else{
        mensajeInput.classList.add('invalido');
        mensajeInput.classList.remove('valido');
        document.getElementById('mensajeError').textContent = "Introduce tu consulta";
    }
}
function validarPago(){
    const pago = pagoInput.value;
    const pagoVal = /^[0,1,3,6]$/
    if(pagoVal.test(pago)){
        pagoInput.classList.add('valido');
        pagoInput.classList.remove('invalido');
        document.getElementById('pagoError').textContent = "";
    }else{
        pagoInput.classList.add('invalido');
        pagoInput.classList.remove('valido');
        document.getElementById('pagoError').textContent = "Solo válidos los valores, 0, 1, 3 y 6";
    }
}
function validarPrivacidad(){
    if(privacidadInput.checked){
        privacidadInput.classList.add('valido');
        privacidadInput.classList.remove('invalido');
        document.getElementById('privacidadError').textContent = "";
    }else{
        privacidadInput.classList.add('invalido');
        privacidadInput.classList.remove('valido');
        document.getElementById('privacidadError').textContent = "Acepte la política de privacidad";
    }
}

function resetFormulario(){
    formulario.reset();
    nombreInput.classList.remove('valido');
    apellidosInput.classList.remove('valido');
    telefonoInput.classList.remove('valido');
    emailInput.classList.remove('valido');
    mensajeInput.classList.remove('valido');
    pagoInput.classList.remove('valido');
    privacidadInput.classList.remove('valido');
}

nombreInput.addEventListener("input", validarNombre);
apellidosInput.addEventListener("input", validarApellidos);
telefonoInput.addEventListener("input", validarTelefono);
emailInput.addEventListener("input", validarEmail);
mensajeInput.addEventListener("input", validarMensaje);
pagoInput.addEventListener("input", validarPago);
privacidadInput.addEventListener("input", validarPrivacidad);

//Calcular presupuesto
document.addEventListener('DOMContentLoaded', function(){
    const formacionSelect = document.getElementById("selectFormacion");
    const pagosSelect = document.getElementById("pago");
    const extraPrueba = document.querySelectorAll(".extra");
    const resultadoInput = document.getElementById("presupuesto");

    function calcularPresupuesto(){
        let totalFormacion = 0;

        const formacion = parseFloat(formacionSelect.value);
        if(!isNaN(formacion)){
            totalFormacion += formacion;
        }

        const pagos = parseFloat(pagosSelect.value);
        let pagoDescuento = 0;
        if(!isNaN(pagos)){
            switch(pagos){
                case 3:
                    pagoDescuento = 0.10;
                    break;
                case 6:
                    pagoDescuento = 0.15;
                    break;
                default:
                    pagoDescuento = 0;
            }
        }

        let extraResultado = 0;
        extraPrueba.forEach(function(extra){
            if(extra.checked){
                extraResultado += parseFloat(extra.value);
            }
        });

        let temporalSuma = totalFormacion + extraResultado;
        let temporalDescuento = temporalSuma * pagoDescuento;
        let presupuestoTotal = temporalSuma - temporalDescuento;
        if(pagos === 3){
            resultadoInput.value = presupuestoTotal*3 + "€ cada 3 meses";
        }else if(pagos === 6){
            resultadoInput.value = presupuestoTotal*6 + "€ cada 6 meses";
        }else{
            resultadoInput.value = presupuestoTotal + "€ cada mes";
        }
    };

    formacionSelect.addEventListener('change', calcularPresupuesto);
    pagosSelect.addEventListener('change', calcularPresupuesto);
    extraPrueba.forEach(function(extra){
        extra.addEventListener("change", calcularPresupuesto);
    })
})

//Envío formulario una vez que hayamos comprobado de nuevo.
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    validarNombre();
    validarApellidos();
    validarTelefono();
    validarEmail();
    validarMensaje();
    validarPago();
    validarPrivacidad();
     if(nombreInput.classList.contains('valido') && apellidosInput.classList.contains('valido') && telefonoInput.classList.contains('valido') && emailInput.classList.contains('valido') && mensajeInput.classList.contains('valido') && pagoInput.classList.contains('valido') && privacidadInput.classList.contains('valido')){
        alert("Formulario enviado correctamente");
        resetFormulario();
        formulario.submit();
     }else{
        alert("Por favor, corrija los errores en el formulario");
     }
})
