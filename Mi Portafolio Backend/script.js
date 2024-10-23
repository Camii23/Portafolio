// Alerta descarga cv
function descargarCV() {
    Swal.fire({
        icon: 'info',
        title: 'Gracias',
        text: 'Gracias por tu interés.',
        confirmButtonColor: '#F6C401'
    });
}

// Formulario
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensaje enviado correctamente');
});