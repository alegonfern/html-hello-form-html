document.getElementById('send').addEventListener('click', function(event) {
    event.preventDefault(); // Detener el envío predeterminado del formulario
    event.stopPropagation(); // Detener la propagación del evento para evitar conflictos
  

    const cardNumber = document.getElementById('cardNumber').value;
    const cvc = document.getElementById('cvc').value;
    const amount = document.getElementById('amount').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const inputCity = document.getElementById('inputCity').value;
    const inputState = document.getElementById('inputState').value;
    const postalCode = document.getElementById('postalCode').value;
    const Messages = document.getElementById('Messages').value;
  
    const errorMsg = document.getElementById('error-msg');
    errorMsg.innerText = ''; // Limpiar el mensaje de error antes de realizar nuevas validaciones
  
    // Validación de campos vacíos
    if (!cardNumber || !cvc || !amount || !firstName || !lastName || !inputCity || !inputState || !postalCode || !Messages) {
      errorMsg.innerText = 'Por favor, complete todos los campos';
      return;
    }
  
    // Validación específica para el campo "Card Number"
    if (!/^[\d\s]+$/.test(cardNumber)) {
      errorMsg.innerText = 'Número de tarjeta inválido. Solo se permiten dígitos y espacios.';
      return;
    }
  
    // Validación específica para el campo "CVC"
    if (!/^\d{3}$/.test(cvc)) {
      errorMsg.innerText = 'CVC inválido. Debe contener 3 dígitos.';
      return;
    }
  
    // Validación específica para el campo "Amount"
    if (!/^\d+(\.\d{1,2})?$/.test(amount)) {
      errorMsg.innerText = 'Monto inválido. Debe ser un número decimal con máximo 2 decimales.';
      return;
    }
  
    // Puedes agregar más validaciones para otros campos según tus necesidades
  
    // Si todas las validaciones son exitosas, se puede enviar el formulario o hacer algo con los datos
    alert('Formulario válido, se puede enviar o procesar los datos de alguna manera.');
  });
  
