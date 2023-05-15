// Función para dar de alta a un alumno
function darDeAlta() {
    var nombre = prompt("Ingrese el nombre del alumno:");
    var apellido = prompt("Ingrese el apellido del alumno:");
    var edad = prompt("Ingrese la edad del alumno:");
  
    // Crear un objeto con los datos del alumno
    var alumno = {
      nombre: nombre,
      apellido: apellido,
      edad: edad
    };
  
    // Obtener los datos almacenados en la memoria local
    var alumnos = localStorage.getItem("alumnos");
  
    // Verificar si hay datos almacenados
    if (alumnos) {
      // Convertir los datos a formato JSON y agregar el nuevo alumno
      alumnos = JSON.parse(alumnos);
      alumnos.push(alumno);
    } else {
      // Si no hay datos almacenados, crear un nuevo array con el alumno
      alumnos = [alumno];
    }
  
    // Guardar los datos actualizados en la memoria local
    localStorage.setItem("alumnos", JSON.stringify(alumnos));
  
    alert("Alumno dado de alta correctamente.");
  }
  
  // Función para redirigir a la página de mostrar todos los alumnos
  function mostrarTodosLosAlumnos() {
    location.href = "alumnos.html";
  }
  function verGrupos() {
    // Obtener los grupos almacenados en la memoria local
    var grupos = localStorage.getItem("grupos");
  
    // Verificar si hay grupos almacenados
    if (grupos) {
      // Convertir los grupos a formato JSON
      grupos = JSON.parse(grupos);
  
      // Verificar si hay al menos un grupo
      if (grupos.length > 0) {
        // Redirigir a la página de grupos
        location.href = "grupos.html";
      } else {
        // No hay grupos, preguntar si desea crear uno
        var crearGrupo = confirm("No hay grupos creados. ¿Desea crear uno?");
  
        if (crearGrupo) {
          // Pedir el nombre del grupo
          var nombreGrupo = prompt("Ingrese el nombre del grupo:");
  
          // Crear el nuevo grupo
          var nuevoGrupo = {
            nombre: nombreGrupo,
            alumnos: [],
          };
  
          // Agregar el nuevo grupo a la lista de grupos
          grupos.push(nuevoGrupo);
  
          // Guardar los grupos actualizados en la memoria local
          localStorage.setItem("grupos", JSON.stringify(grupos));
  
          // Redirigir a la página de grupos
          location.href = "grupos.html";
        }
      }
    } else {
      // No hay grupos, preguntar si desea crear uno
      var crearGrupo = confirm("No hay grupos creados. ¿Desea crear uno?");
  
      if (crearGrupo) {
        // Pedir el nombre del grupo
        var nombreGrupo = prompt("Ingrese el nombre del grupo:");
  
        // Crear el nuevo grupo
        var nuevoGrupo = {
          nombre: nombreGrupo,
          alumnos: [],
        };
  
        // Crear la lista de grupos
        grupos = [nuevoGrupo];
  
        // Guardar los grupos en la memoria local
        localStorage.setItem("grupos", JSON.stringify(grupos));
  
        // Redirigir a la página de grupos
        location.href = "grupos.html";
      }
    }
  }
  
  