let empleados = [];

function registroEmpleado{

let id_Empleado = document.getElementById("idEmpleado").value.trim();
let nombre_Empleado = document.getElementById("idEmpleado").value.trim();
let id_Sucursal = document.getElementById("idSucursal").value.trim();
let cargo_Empleado = document.getElementById("cargoEmpleado").value.trim();
let telefono_Empleado = document.getElementById("telefonoEmpleado").value.trim();
let mensajeAlerta = document.getElementById("mensajeAlerta");

if (!id_Empleado || !nombre_Empleado || !id_Sucursal || !cargo_Empleado || !telefono_Empleado){
    alert("¡No debe dejar campos vacíos!");
    return;
}

let empleado = {

id_empleado: parseInt(id_Empleado),
nombre_empleado: nombre_Empleado,
id_sucursal: parseInt(id_Sucursal),
cargo_empleado: cargo_Empleado,
tel_empleado: parseInt(telefono_Empleado),

};

empleados.push(empleado);
messageBox.innerText = "¡Se ha creado el empleado con exito!";
messageBox.style.color = "green";
mostrarEmpleados();
}

function mostrarEmpleados() {
    // Obtener el contenedor donde se mostrará la tabla
    let container = document.getElementById("datosEmpleados");

    // Crear la tabla y su encabezado
    let table = "<table border='1'><tr><th>ID</th><th>Nombre</th><th>Sucursal</th><th>Cargo Empleado</th><th>Telefono</th></tr>";

    // Recorrer el array de estudiantes y añadir filas a la tabla
    for (let i = 0; i < empleados.length; i++) {
        table += "<tr><td>" + empleados[i].id_Empleado + "</td><td>" + empleados[i].nombre_Empleado + "</td><td>" + empleados[i].id_Sucursal + "</td><td>" + empleados[i].cargo_Empleado + "</td><td>" + empleados[i].telefono_Empleado + "</td></tr>";
    }

    // Cerrar la tabla
    table += "</table>";

    // Insertar la tabla en el contenedor
    container.innerHTML = table;
}

function validarEmail(emailCliente){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailCliente);
}
