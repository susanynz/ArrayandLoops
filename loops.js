//Sum of Resistors in Series
// Un resistor es un componente eléctrico diseñado para introducir resistencia eléctrica en un circuito.
//*La fórmula para la resistencia total (R_total) de resistores en serie es:
//*R total=R 1+R2+R3+…
//*Donde R1 + R2 +  R3 son las resistencias individuales en serie.
function sumaResistenciasEnSerie(resistencias) {
    const resistenciaTotal = resistencias.reduce((total, resistencia) => total + resistencia, 0);
  
    return resistenciaTotal;
  }
  
  const resistenciasEnSerie = [14, 3.5, 6];
  const resultado = sumaResistenciasEnSerie(resistenciasEnSerie);
  console.log(`La resistencia total en serie es: ${resultado} ohmios`);


//Secret society
//Encuentra el nombre de la sociedad secreta basado en la primera letra de cada miembro.
function encontrarSociedadSecreta(miembros) {
    let nombreSociedad = "";
  
    for (let i = 0; i < miembros.length; i++) {
      const primeraLetra = miembros[i][0];
  
      nombreSociedad += primeraLetra;
    }
  
    return nombreSociedad;
  }
  
  const miembrosSociedad = ['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'];
  const nombreSociedadSecreta = encontrarSociedadSecreta(miembrosSociedad);
  console.log(`El nombre de la sociedad secreta es: ${nombreSociedadSecreta}`);


  //Online Status
  //1. Cantidad total de usuarios
  //2. Calcular usuarios restantes eliminado el total de los primeros dos
  //3. Obtener los primeros 2
  //4. Imprimir mensaje

  const users = ["mocking99", "susanita", "bomboncito"]

  function getLength(x){
    return x.length;
  }

  function calcRemaining(todos){
    return todos - 2;
  }

  function getUsers(x){
    const users = x[0] + x[1];
    return users
  }

  function onlineStatus(x){
    const todos = getLength(x);
    const rest = calcRemaining(todos);
    const firstUsers = getUsers(x);

    console.log(`Users: ${firstUsers}, and ${rest} are online`)
  }

  onlineStatus(users);