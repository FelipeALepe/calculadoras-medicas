//Evento del botón buscar
document.getElementById('boton_calcular').addEventListener('click', () => {
  const sexo = document.getElementById('sexo').value
  const etnia = document.getElementById('etnia').value
  const edad = document.getElementById('edad').value
  const creatinina = document.getElementById('creatinina').value
  if (edad && creatinina) {
    calculoTFG(sexo, etnia, edad, creatinina)
  } else {
    alert("Debe ingresar los datos requeridos");
  }
})

//Funcion que realiza el cálculo TFG
function calculoTFG(sexo, etnia, edad, creatinina) {

  //K, A y Sexo
  if (sexo === 'fem') {
    var k = 0.7
    var a = -0.329
    var variante_sexo = 1.018
  } else {
    var k = 0.9
    var a = -0.411
    var variante_sexo = 1
  }

  if (etnia === 'negra') {
    var varinate_etnia = 1.159
  } else {
    var varinate_etnia = 1
  }

  let TFG = 141 * (Math.min(creatinina / k, 1) ** a) * (Math.max(creatinina / k, 1) ** -1.209) * (0.993 ** edad) * variante_sexo * varinate_etnia

  TFG = TFG.toFixed(2)
  
  mostrarResultadosTFG(TFG)
}

//RESULTADOS TFG
function mostrarResultadosTFG(TFG) {
  //Contenedor Resultado
  const resultadosDiv = document.getElementById('resultados')
  resultadosDiv.innerHTML = ''

  //Titulo Resultado 1
  const resultadoTitulo = document.createElement('p')
  resultadoTitulo.classList.add('titulo_resultado')

  //Titulo Resultado 
  const resultadoTitulo2 = document.createElement('p')
  resultadoTitulo2.classList.add('titulo_resultado2')

  //Titulo Resultado 3
  const resultadoTitulo3 = document.createElement('p')
  resultadoTitulo3.classList.add('titulo_resultado3')

  //TFG Resultado
  const resultadoTFG = document.createElement('p')
  resultadoTFG.classList.add('tfg_resultado')

  if (TFG < 15) {
    resultadoTitulo3.textContent = "Categoría: G5 - FALLA RENAL"
    resultadoTFG.textContent = `Valor: ${TFG} (mL/min/1.73m2)`

    resultadosDiv.appendChild(resultadoTitulo3)
    resultadosDiv.appendChild(resultadoTFG)

  } else if (TFG >= 15 && TFG < 29) {
    resultadoTitulo3.textContent = "Categoría: G4 - DESCENSO GRAVE"
    resultadoTFG.textContent = `Valor: ${TFG} (mL/min/1.73m2)`

    resultadosDiv.appendChild(resultadoTitulo3)
    resultadosDiv.appendChild(resultadoTFG)

  } else if (TFG >= 30 && TFG < 44) {
    resultadoTitulo2.textContent = "Categoría: G3b - DESCENSO MODERADO GRAVE"
    resultadoTFG.textContent = `Valor: ${TFG} (mL/min/1.73m2)`

    resultadosDiv.appendChild(resultadoTitulo2)
    resultadosDiv.appendChild(resultadoTFG)

  } else if (TFG >= 45 && TFG < 59) {
    resultadoTitulo2.textContent = "Categoría: G3a - DESCENSO MODERADO LEVE"
    resultadoTFG.textContent = `Valor: ${TFG} (mL/min/1.73m2)`

    resultadosDiv.appendChild(resultadoTitulo2)
    resultadosDiv.appendChild(resultadoTFG)

  } else if (TFG >= 60 && TFG < 89) {
    resultadoTitulo.textContent = "Categoría: G2 - LEVEMENTE DISMINUIDO"
    resultadoTFG.textContent = `Valor: ${TFG} (mL/min/1.73m2)`

    resultadosDiv.appendChild(resultadoTitulo)
    resultadosDiv.appendChild(resultadoTFG)

  } else if (TFG >= 90) {
    resultadoTitulo.textContent = "Categoría: G1 - NORMAL O ALTO"
    resultadoTFG.textContent = `Valor: ${TFG} (mL/min/1.73m2)`

    resultadosDiv.appendChild(resultadoTitulo)
    resultadosDiv.appendChild(resultadoTFG)
  }
}
