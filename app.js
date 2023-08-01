document.getElementById('send').addEventListener('click', function (event) {
    event.preventDefault(); // Detener el envio
    event.stopPropagation(); // Detener la propagación 

    const formInputs = document.querySelectorAll('#myForm input, #myForm select, #myForm textarea');
    const errorMsg = document.getElementById('error-msg');
    let isValid = true;

    formInputs.forEach(input => {
        if (input.value.trim() === '') {
            isValid = false;
            errorMsg.innerText = 'Por favor, complete todos los campos';
            input.style.borderColor = 'red';
        } else {
            input.style.borderColor = ''; // Restaurar el borde normal sin borde rojo
        }
    });

    if (isValid) {
        // Si todos los campos son válidos, limpiar el mensaje de error y enviar el formulario
        // errorMsg.innerText = 'Todo en orden';
        MessageEvent.innerText = 'Todo en orden';
        document.getElementById('myForm').submit();
    }
});