//Crea una función que tome dos parámetros (número, longitud) y devuelva un array de longitud que contenga los múltiplos del número.
function arrayOfMultiples(number, length) {
    let result = [];
    for (let i = 1; i <= length; i++) {
      result.push(number * i);
    }
    return result;
  }
  console.log (arrayOfMultiples (8,10));


  //Escribe una función para determinar si un array es positivamente dominante. Un array es positivamente dominante cuando la mayoría de sus elementos son positivos.
  function positiveDominanceinArray(array) {
    let positiveCounter = 0;
    let negativeCounter = 0;

    for (let i = 0; i < array.length; i++) {
      if (array[i] > 0) {
        positiveCounter++;
      } else if (array[i] < 0) {
        negativeCounter++;
      }
    }
    return positiveCounter > negativeCounter;
  }
  let array1 = [-1, -3, -5, 4, 6767];
  let array2 = [1, -1, 0, 2, 3];

  console.log (positiveDominanceinArray(array1));
  console.log (positiveDominanceinArray(array2));

  //Promedio antipodal
  function shorterArray(a1) {
    const mitadLongitud = Math.floor(a1.length / 2);
  
    if (a1.length % 2 !== 0) {
      a1.splice(mitadLongitud, 1);
    }
    const primeraParte = a1.slice(0, mitadLongitud);
    const segundaParte = a1.slice(mitadLongitud);
  
    const arraySumado = primeraParte.map((num, index) => num + (1 / segundaParte[index]));
  
    const arrayResultado = arraySumado.map(num => num / 2);
  
    return arrayResultado;
  }
  
  const inputArray = [1, 2, 3, 5, 22, 6];
  const result = shorterArray(inputArray);
  console.log(result);  
  
