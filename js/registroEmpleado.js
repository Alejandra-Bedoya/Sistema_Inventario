let empleados = [];

function registroEmpleado(){

//Obtener datos del formulario empleado
let idEmpleado = document.getElementById("idEmpleado").value.trim();
let nombreEmpleado = document.getElementById("nombreEmpleado").value.trim();
let idSucursal = document.getElementById("idSucursal").value.trim();
let cargoEmpleado = document.getElementById("cargoEmpleado").value.trim();
let telefonoEmpleado = document.getElementById("telefonoEmpleado").value.trim();

//Validar que no se dejen campos vacios
if (!idEmpleado || !nombreEmpleado || !idSucursal || !cargoEmpleado || !telefonoEmpleado){
    mostrarAlerta("¡No debe dejar campos vacíos!","red");
    return;
}

// Convertir valores a números y validar
    let idEmpleadoNum = parseInt(idEmpleado,10);
    let idSucursalNum = parseInt(idSucursal,10);

   if (isNaN(idEmpleadoNum) || isNaN(idSucursalNum)) {
        mostrarAlerta("¡ID y Sucursal deben ser números enteros válidos!", "red");
        return;
    }

    // Validar formato del teléfono (mínimo 7 y máximo 15 caracteres)
    if (!/^\d{7,15}$/.test(telefonoEmpleado)) {
        mostrarAlerta("¡El número de teléfono debe tener entre 7 y 15 dígitos!", "red");
        return;
    }

    // Verificar que no se repita el ID del empleado
    let existeEmpleado = empleados.some(emp => emp.id_empleado === idEmpleadoNum);
    if (existeEmpleado) {
        mostrarAlerta("¡El ID del empleado ya existe! Intente con otro.", "red");
        return;
    }

//Crear objeto "empleado" y almacenar en vector "empleados"
let empleado = {

id_empleado: idEmpleadoNum,
nombre_empleado: nombreEmpleado,
id_sucursal: idSucursalNum,
cargo_empleado: cargoEmpleado,
tel_empleado: telefonoEmpleado,

};

empleados.push(empleado); // Guardar datos
    
 // Mostrar mensaje de éxito y limpiar formulario
    mostrarAlerta("¡Se ha creado el empleado con éxito!", "green");
    limpiarFormulario();
    mostrarEmpleados();
}

// Función para mostrar alertas con color
function mostrarAlerta(mensaje, color) {
    let mensajeAlerta = document.getElementById("mensajeAlerta");
    mensajeAlerta.innerText = mensaje;
    mensajeAlerta.style.color = color;

     setTimeout(() => {
        mensajeAlerta.innerText = "";
    }, 3000);
}

// Función para limpiar el formulario
function limpiarFormulario() {
    document.getElementById("idEmpleado").value = "";
    document.getElementById("nombreEmpleado").value = "";
    document.getElementById("idSucursal").value = "";
    document.getElementById("cargoEmpleado").value = "";
    document.getElementById("telefonoEmpleado").value = "";
}

// Mostrar datos empleados a través de una tabla
function mostrarEmpleados() {
    // Obtener el contenedor donde se mostrará la tabla
    let container = document.getElementById("datosEmpleados");

    if (empleados.length === 0) {
        container.innerHTML = "<p>No hay empleados registrados.</p>";
        return;
    }

    let table = `
        <table border='1' class='empleados-tabla'>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Sucursal</th>
                <th>Cargo</th>
                <th>Teléfono</th>
            </tr>`;

    empleados.forEach((empleado) => {
        table += `
            <tr>
                <td>${empleado.id_empleado}</td>
                <td>${empleado.nombre_empleado}</td>
                <td>${empleado.id_sucursal}</td>
                <td>${empleado.cargo_empleado}</td>
                <td>${empleado.tel_empleado}</td>
            </tr>`;
    });

    table += "</table>";
    container.innerHTML = table;
}

/*
//Validar formato de email
function validarEmail(emailCliente){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailCliente);
}
*/
