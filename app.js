// Esperar a que DOM se cargue completamente antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function(){

    //Obtener los elementos HTML del formulario, el input y el message
    const ageForm = document.getElementById('ageForm');
    const ageInput = document.getElementById('ageInput');
    const ageMessage = document.getElementById('ageMessage');

    // Función para validar la edad ingresada
    function validateAge(age){
        //Verificar que la edad sea un número entero mayor o igual a 0
        if (isNaN(age) || age < 0){
            return false;
        }
        return true;
    }

    // Función para determinar el rango de edad y retornar el mensaje
    function getAgeCategory (age){
        if (age >= 0 && age <= 12){
            return 'Niño';
        } else if (age >= 13 && age <=17){
            return 'Adolescente';

        } else if (age >= 18 && age <= 59){
            return 'Adulto';
        } else if (age >= 60){
            return 'Adulto Contemporaneo';
        } else {
            return 'Edad no válida';
        }
    }

    //Manejar el evento de envío del formulario
    ageForm.addEventListener('submit', function(event){
        event.preventDefault();//Prevenir la recarga de la página al enviar el formulario

        // Obtener el valor de la edad ingresada y convertirla a número
        const ageValue = parseInt(ageInput.value);

        //Validamos la edad
        if ( validateAge(ageValue)) {
            // Obtener el mensaje correspondiente a la edad 
            const message = getAgeCategory(ageValue);

            //Mostrar el mensaje en el párrafo con id "ageMessage"
            ageMessage.textContent = `Categoría de edad: ${message}`;
        } else {
            //Mostrar un mensaje de error 
            ageMessage.textContent = `Por favor, ingrese una edad válida`;
        }

    });

});