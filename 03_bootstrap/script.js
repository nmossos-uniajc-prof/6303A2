let estudiantes = []

function registrar(params) {
    const nombre = document.getElementById("nombre").value;
    const edad = parseInt(document.getElementById("edad").value);
    const programa = document.getElementById("programa").value;
    const nota = parseFloat(document.getElementById("nota").value);

    const est = {nombre,edad,programa,nota}

    estudiantes.push(est);
    limpiar();
    actualizarInfo();
    actualizarPromedio();

    const mensajeHTML = new bootstrap.Toast(document.getElementById("mensaje"));
    mensajeHTML.show();
}

function limpiar(params) {
    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("programa").value = "";
    document.getElementById("nota").value = "";
}

function actualizarInfo() {
    let listaHtml=document.getElementById("lista");

    let cadena = "";
    for (let i = 0; i < estudiantes.length; i++) {
        cadena +=`<div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 p-2">
                <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">${estudiantes[i].nombre}</h5>
                      <h6 class="card-subtitle mb-2 text-body-secondary">${estudiantes[i].programa}</h6>
                      <p class="card-text">Edad: ${estudiantes[i].edad}</p>
                      <p class="card-text">Nota: ${estudiantes[i].nota}</p>
                      <a href="#" class="btn btn-danger" onclick="eliminar(${i})"><i class="bi bi-person-dash"></i> Eliminar</a>
                    </div>
                </div>    
            </div>`      
    }
    listaHtml.innerHTML = cadena;
}

function actualizarPromedio(params) {
    let total=0;
    let promedio = 0;
    if (estudiantes.length>0) {
        for (let i = 0; i < estudiantes.length; i++) {
            total += estudiantes[i].nota;
            
        }
        promedio = total/estudiantes.length;
    }

    document.getElementById("promedio").textContent = promedio.toFixed(2);
}

function eliminar(index) {
    if (confirm("Esta seguro que desea eliminar el usuario?")) {
        estudiantes.splice(index,1);
        actualizarInfo();
        actualizarPromedio();
    }
}