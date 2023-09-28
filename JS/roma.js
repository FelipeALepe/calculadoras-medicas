//Evento del botón buscar
document.getElementById('boton_calcular').addEventListener('click', () => {
  const tipo = document.getElementById('tipo').value
  const ca125 = document.getElementById('CA125').value
  const he4 = document.getElementById('HE4').value
  if (ca125 && he4) {
    calculoRoma(tipo, ca125, he4)
  } else {
    alert("Debes ingresar los datos requeridos");
  }
})

//Funcion que realiza el cálculo PI
function calculoRoma(tipo, ca125, he4) {
  let PI = 0
  if (tipo === 'pre') {
    PI = -12 + 2.38 * Math.log(he4) + 0.0626 * Math.log(ca125)
    mostrarResultadosPre(PI)
  } else {
    PI = -8.09 + 1.04 * Math.log(he4) + 0.732 * Math.log(ca125)
    mostrarResultadosPost(PI)
  }
}

//RESULTADOS PRE
function mostrarResultadosPre(PI) {
  //Contenedor Resultado
  const resultadosDiv = document.getElementById('resultados')
  resultadosDiv.innerHTML = ''

  //Titulo Resultado BAJO
  const resultadoTitulo = document.createElement('p')
  resultadoTitulo.classList.add('titulo_resultado')

  //Titulo Resultado ALTO
  const resultadoTitulo2 = document.createElement('p')
  resultadoTitulo2.classList.add('titulo_resultado2')

  //PI Resultado
  const resultadoPI = document.createElement('p')
  resultadoPI.classList.add('pi_resultado')

  //ROMA Resultado
  const resultadoROMA = document.createElement('p')
  resultadoROMA.classList.add('roma_resultado')

  //CALCULO ROMA
  let PI2 = PI.toFixed(5)
  let resultPRE = Math.exp(PI) / [1 + Math.exp(PI)] * 100
  let resultPRE2 = resultPRE.toFixed(2)

  if (resultPRE < 11.4) {
    resultadoTitulo.textContent = "Evaluación: BAJO RIESGO"
    resultadoPI.textContent = `Indice Predictivo (PI): ${PI2}`
    resultadoROMA.textContent = `Indice ROMA: ${resultPRE2}%`

    resultadosDiv.appendChild(resultadoTitulo)
    resultadosDiv.appendChild(resultadoPI)
    resultadosDiv.appendChild(resultadoROMA)

  } else {
    resultadoTitulo2.textContent = "Evaluación: ALTO RIESGO"
    resultadoPI.textContent = `Indice Predictivo (PI): ${PI2}`
    resultadoROMA.textContent = `Indice ROMA: ${resultPRE2}%`

    resultadosDiv.appendChild(resultadoTitulo2)
    resultadosDiv.appendChild(resultadoPI)
    resultadosDiv.appendChild(resultadoROMA)
  }
}

//RESULTADOS POST
function mostrarResultadosPost(PI) {
  //Contenedor Resultado BAJO
  const resultadosDiv = document.getElementById('resultados')
  resultadosDiv.innerHTML = ''

  //Titulo Resultado ALTO
  const resultadoTitulo2 = document.createElement('p')
  resultadoTitulo2.classList.add('titulo_resultado2')

  //Titulo Resultado BAJO
  const resultadoTitulo = document.createElement('p')
  resultadoTitulo.classList.add('titulo_resultado')

  //PI Resultado
  const resultadoPI = document.createElement('p')
  resultadoPI.classList.add('pi_resultado')

  //ROMA Resultado
  const resultadoROMA = document.createElement('p')
  resultadoROMA.classList.add('roma_resultado')

  //CALCULO ROMA
  let PI2 = PI.toFixed(5)
  let resultPOST = Math.exp(PI) / [1 + Math.exp(PI)] * 100
  let resultPOST2 = resultPOST.toFixed(2)

  if (resultPOST < 29.9) {
    resultadoTitulo.textContent = "Evaluación: BAJO RIESGO"
    resultadoPI.textContent = `Indice Predictivo (PI): ${PI2}`
    resultadoROMA.textContent = `Indice ROMA: ${resultPOST2}%`

    resultadosDiv.appendChild(resultadoTitulo)
    resultadosDiv.appendChild(resultadoPI)
    resultadosDiv.appendChild(resultadoROMA)
    
  } else {
    resultadoTitulo2.textContent = "Evaluación: ALTO RIESGO"
    resultadoPI.textContent = `Indice Predictivo (PI): ${PI2}`
    resultadoROMA.textContent = `Indice ROMA: ${resultPOST2}%`

    resultadosDiv.appendChild(resultadoTitulo2)
    resultadosDiv.appendChild(resultadoPI)
    resultadosDiv.appendChild(resultadoROMA)
  }
}