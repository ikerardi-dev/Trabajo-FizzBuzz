# ex-fizz-buzz
Imagina la escena: tienes once años y, en los últimos cinco minutos de clase, tu profesor de matemáticas decide “hacerlo divertido” con un juego. Cada alumno debe decir el siguiente número en la secuencia empezando por el uno. Pero hay reglas:

Si el número es divisible por 3, dices “Fizz”.

Si es divisible por 5, dices “Buzz”.

Si es divisible por 3 y 5, dices “FizzBuzz”.

Tu profesor va señalando a tus compañeros uno a uno: “uno”, “dos”, “Fizz”, “cuatro”, “Buzz”… hasta que te señala a ti con mirada desafiante. Tu boca se seca, el tiempo se detiene… y finalmente logras decir “Fizz”. Has sobrevivido. Para evitar el ridículo en la próxima clase, necesitas imprimir la secuencia completa.

Escribe un programa que imprima los números del 1 al 100, aplicando los siguientes criterios:

Scenario: Número divisible por 3
    Given que proporciono el número 3
    When ejecuto la función FizzBuzz
    Then el resultado debe ser "Fizz"

Scenario: Número divisible por 5
    Given que proporciono el número 5
    When ejecuto la función FizzBuzz
    Then el resultado debe ser "Buzz"

Scenario: Número divisible por 3 y 5
    Given que proporciono el número 15
    When ejecuto la función FizzBuzz
    Then el resultado debe ser "FizzBuzz"

Scenario: Número no divisible ni por 3 ni por 5
    Given que proporciono el número 7
    When ejecuto la función FizzBuzz
    Then el resultado debe ser "7"

Scenario: El dato proporcionado no es un número
    Given que proporciono el valor "hola"
    When ejecuto la función FizzBuzz
    Then debe lanzarse un error indicando que el dato no es un número
