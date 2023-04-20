$(document).ready(function() {
  $('#example').DataTable({
    "responsive": true,
    "paging": true,
    "lengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "Todos"]], 
    "pageLength": 5, 
    "pagingType": "full_numbers"
  });
});

const formulario = document.querySelector('#mi-formulario');

formulario.addEventListener('submit', function(evento) {
  evento.preventDefault();

  const nombre = formulario.querySelector('#nombre');
  const email = formulario.querySelector('#email');
  const telefono = formulario.querySelector('#tel');

  // Verifica que el campo de nombre no esté vacío
  if (nombre.value === ''|| email.value === '' || telefono.value === '') {
    alert('Por favor, blablabla');
    return;
  } 
  formulario.submit();
});

