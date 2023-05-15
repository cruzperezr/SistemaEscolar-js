function limpiarMemoriaLocal() {
    // Limpiar la memoria local
    localStorage.clear();
  
    // Mensaje de confirmación
    alert("La memoria local se ha limpiado correctamente.");
  }
  
  // Función para regresar al menú principal (index.html)
  function regresarAlMenu() {
    location.href = "index.html";
  }
  
  // Cargar los datos de los alumnos al cargar la página
  cargarDatosAlumnos();
  
  // Función para cargar los datos de los alumnos en la tabla
  function cargarDatosAlumnos() {
    // Obtener los datos almacenados en la memoria local
    var alumnos = localStorage.getItem("alumnos");
  
    // Verificar si hay datos almacenados
    if (alumnos) {
      // Convertir los datos a formato JSON
      alumnos = JSON.parse(alumnos);
  
      // Obtener la referencia al cuerpo de la tabla
      var tablaBody = document.getElementById("tabla-alumnos-body");
  
      // Recorrer los alumnos y agregar cada uno a la tabla
      for (var i = 0; i < alumnos.length; i++) {
        var alumno = alumnos[i];
  
        // Crear una nueva fila en la tabla
        var fila = document.createElement("tr");
  
        // Crear celdas para cada dato del alumno
        var celdaNombre = document.createElement("td");
        celdaNombre.textContent = alumno.nombre;
        fila.appendChild(celdaNombre);
  
        var celdaApellido = document.createElement("td");
        celdaApellido.textContent = alumno.apellido;
        fila.appendChild(celdaApellido);
  
        var celdaEdad = document.createElement("td");
        celdaEdad.textContent = alumno.edad;
        fila.appendChild(celdaEdad);
  
        var celdaMateria = document.createElement("td");
        celdaMateria.textContent = alumno.materia;
        fila.appendChild(celdaMateria);
  
        var celdaCalificacion = document.createElement("td");
        celdaCalificacion.textContent = alumno.calificacion;
        fila.appendChild(celdaCalificacion);
  
        var celdaPromedio = document.createElement("td");
        celdaPromedio.textContent = "-";
        fila.appendChild(celdaPromedio);
  
        var celdaAcciones = document.createElement("td");
  
        // Select de Calificaciones
        var selectCalificaciones = document.createElement("select");
        selectCalificaciones.addEventListener("change", function (e) {
          var nuevaCalificacion = e.target.value;
          celdaCalificacion.textContent = nuevaCalificacion;
  
          // Actualizar la calificación en los datos del alumno
          alumnos[alumnoIndex].calificacion = nuevaCalificacion;
  
          // Calcular el promedio y mostrarlo en la celda correspondiente
          var promedio = calcularPromedio(alumnos[alumnoIndex]);
          celdaPromedio.textContent = promedio.toFixed(2);
  
          // Guardar los datos actualizados en la memoria local
          localStorage.setItem("alumnos", JSON.stringify(alumnos));
        });
  
        var opcionesCalificaciones = [
          "Calificación",
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
        ];
  
        for (var j = 0; j < opcionesCalificaciones.length; j++) {
          var opcionCalificacion = document.createElement("option");
          opcionCalificacion.value = opcionesCalificaciones[j];
          opcionCalificacion.textContent = opcionesCalificaciones[j];
          selectCalificaciones.appendChild(opcionCalificacion);
        }
  
        celdaAcciones.appendChild(selectCalificaciones);
  
        // Select de Materias
        var selectMaterias = document.createElement ("select");
        selectMaterias.addEventListener("change", function (e) {
        var nuevaMateria = e.target.value;
        var celdaMateria =
        e.target.parentElement.previousSibling.previousSibling;
        celdaMateria.textContent = nuevaMateria;
            // Actualizar la materia en los datos del alumno
    alumnos[alumnoIndex].materia = nuevaMateria;

    // Guardar los datos actualizados en la memoria local
    localStorage.setItem("alumnos", JSON.stringify(alumnos));
  });

  var opcionesMaterias = [
    "Materia",
    "Español",
    "Inglés",
    "Matemáticas",
  ];

  for (var j = 0; j < opcionesMaterias.length; j++) {
    var opcionMateria = document.createElement("option");
    opcionMateria.value = opcionesMaterias[j];
    opcionMateria.textContent = opcionesMaterias[j];
    selectMaterias.appendChild(opcionMateria);
  }

  celdaAcciones.appendChild(selectMaterias);

  // Botón Eliminar
  var botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.addEventListener("click", function (e) {
    // Eliminar al alumno de la lista
    alumnos.splice(alumnoIndex, 1);

    // Guardar los datos actualizados en la memoria local
    localStorage.setItem("alumnos", JSON.stringify(alumnos));

    // Eliminar la fila de la tabla
    fila.remove();
  });

  celdaAcciones.appendChild(botonEliminar);

  fila.appendChild(celdaAcciones);

  // Agregar la fila a la tabla
  tablaBody.appendChild(fila);
}
}
}

// Función para calcular el promedio de un alumno
function calcularPromedio(alumno) {
var calificaciones = alumno.calificacion;

// Calcular la suma de las calificaciones
var sumaCalificaciones = 0;
for (var i = 0; i < calificaciones.length; i++) {
sumaCalificaciones += parseFloat(calificaciones[i]);
}

// Calcular el promedio
var promedio = sumaCalificaciones / calificaciones.length;

return promedio;
}