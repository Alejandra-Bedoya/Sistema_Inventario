let clientes= []; 

function agregarCliente(){

    let id_cliente = document.getElementById("idCliente").value.trim();
    let nombre_cliente = document.getElementById("nombreCliente").value.trim();
    let direccion_cliente = document.getElementById("direccion").value.trim();
    let telefono_cliente = document.getElementById("telefonoCliente").value.trim();
    let email_cliente = document.getElementById("emailCliente").value.trim();
    let mensajeAlerta = document.getElementById("mensajeAlerta");

    if (id_cliente && nombre_cliente && direccion_cliente && telefono_cliente && email_cliente) {
        
        let nuevoCliente = {
            id_cliente: parseInt(id_cliente),
            nombre_cliente: parseInt(nombre_cliente),
            direccion_cliente: parseInt(direccion_cliente),
            telefono_cliente: parseInt(telefono_cliente),
            email_cliente: parseInt(email_cliente),
        };

        clientes.push(nuevoCliente);
        console.log(clientes);
    
        document.getElementById("idCliente").value = "";
        document.getElementById("nombreCliente").value = "";
        document.getElementById("direccionCliente").value = "";
        document.getElementById("telefonoCliente").value = "";
        document.getElementById("emailCliente").value = "";

        alert("Cliente agregado correctamente");
    } return {
        alert("Por favor, completa todos los campos");
    }

    
}