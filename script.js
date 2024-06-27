// JavaScript para manejar el cálculo del promedio y la interacción con el formulario
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el formulario
    var form = document.getElementById('promedioForm');
  
    // Escuchar el evento submit del formulario
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar el envío del formulario por defecto
  
      // Obtener los valores de las calificaciones
      var calificacion1 = parseFloat(document.getElementById('calificacion1').value);
      var calificacion2 = parseFloat(document.getElementById('calificacion2').value);
  
      // Validar que ambos campos sean números válidos
      if (!isNaN(calificacion1) && !isNaN(calificacion2)) {
        // Calcular el promedio
        var promedio = (calificacion1 + calificacion2) / 2;
  
        // Mostrar el resultado en el elemento con id 'resultadoPromedio'
        document.getElementById('resultadoPromedio').innerHTML = 'El promedio es: ' + promedio.toFixed(2);
      } else {
        // Mostrar un mensaje de error si las calificaciones no son válidas
        document.getElementById('resultadoPromedio').innerHTML = '<span class="text-danger">Por favor ingrese números válidos.</span>';
      }
    });
  });
  