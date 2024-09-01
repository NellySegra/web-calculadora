// script.js
document.getElementById('converterForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const value = parseFloat(document.getElementById('value').value);
    const resultDiv = document.getElementById('result');

    // Verificar que no sean la misma unidad
    if (from === to) {
        resultDiv.textContent = 'Por favor, seleccione unidades diferentes para convertir.';
        return;
    }

    // Verificar si el valor es un número válido
    if (isNaN(value)) {
        resultDiv.textContent = 'Por favor, ingrese un valor numérico válido.';
        return;
    }

    // Realizar la conversión
    let result;
    if (from === 'celsius') {
        if (to === 'fahrenheit') {
            result = (value * 9/5) + 32;
        } else if (to === 'kelvin') {
            result = value + 273.15;
        }
    } else if (from === 'fahrenheit') {
        if (to === 'celsius') {
            result = (value - 32) * 5/9;
        } else if (to === 'kelvin') {
            result = ((value - 32) * 5/9) + 273.15;
        }
    } else if (from === 'kelvin') {
        if (to === 'celsius') {
            result = value - 273.15;
        } else if (to === 'fahrenheit') {
            result = ((value - 273.15) * 9/5) + 32;
        }
    }

    resultDiv.textContent = `El resultado es: ${result.toFixed(2)} ${to.charAt(0).toUpperCase() + to.slice(1)}`;

});

// Evitar que se puedan seleccionar la misma opción en los dos selects
document.getElementById('from').addEventListener('change', function() {
    const from = document.getElementById('from').value;
    const toSelect = document.getElementById('to');
    
    Array.from(toSelect.options).forEach(option => {
        option.disabled = option.value === from;
    });
    

    if (toSelect.value === from) {
        toSelect.value = '';
    }
   
        fetch('save_result.php', {
            method: 'POST',
        })
});
