//Evento del botón buscar
document.getElementById('boton_calcular').addEventListener('click', () => {
  const peso = document.getElementById('peso').value
  const estatura = document.getElementById('estatura').value
  if (peso && estatura) {
    calculoIMC(peso, estatura)
  } else {
    alert("Debes ingresar los datos requeridos");
  }
})

//Funcion que realiza el cálculo IMC
function calculoIMC(peso, estatura) {
  //Contenedor Resultado
  const resultadosDiv = document.getElementById('resultados')
  resultadosDiv.innerHTML = ''

  //Indice
  const puntaje = document.createElement('p')
  puntaje.classList.add('puntaje')

  //Interpretación 1
  const interpretacion = document.createElement('p')
  interpretacion.classList.add('interpretacion')

  //Interpretación 2
  const interpretacion2 = document.createElement('p')
  interpretacion2.classList.add('interpretacion2')

  //Interpretación 3
  const interpretacion3 = document.createElement('p')
  interpretacion3.classList.add('interpretacion3')

  //Interpretación 4
  const interpretacion4 = document.createElement('p')
  interpretacion4.classList.add('interpretacion4')

  //Cálculo IMC
  let resultadoIMC1 = peso / (estatura * estatura)
  let resultadoIMC2 = resultadoIMC1.toFixed(2)

  if (resultadoIMC1 < 16) {
    puntaje.textContent = `IMC: ${resultadoIMC2}`
    interpretacion.textContent = `Nivel: DELGADEZ SEVERA`

    resultadosDiv.appendChild(puntaje)
    resultadosDiv.appendChild(interpretacion)

  } else if (resultadoIMC1 >= 16 && resultadoIMC1 < 16.99) {
    puntaje.textContent = `IMC: ${resultadoIMC2}`
    interpretacion.textContent = `Nivel: DELGADEZ MODERADA`

    resultadosDiv.appendChild(puntaje)
    resultadosDiv.appendChild(interpretacion)

  } else if (resultadoIMC1 >= 17 && resultadoIMC1 < 18.49) {
    puntaje.textContent = `IMC: ${resultadoIMC2}`
    interpretacion.textContent = `Nivel: DELGADEZ ACEPTABLE`

    resultadosDiv.appendChild(puntaje)
    resultadosDiv.appendChild(interpretacion)

  } else if (resultadoIMC1 >= 18.5 && resultadoIMC1 < 24.99) {
    puntaje.textContent = `IMC: ${resultadoIMC2}`
    interpretacion2.textContent = `Nivel: PESO NORMAL`

    resultadosDiv.appendChild(puntaje)
    resultadosDiv.appendChild(interpretacion2)
    
  } else if (resultadoIMC1 >= 25 && resultadoIMC1 < 29.99) {
    puntaje.textContent = `IMC: ${resultadoIMC2}`
    interpretacion3.textContent = `Nivel: SOBREPESO`

    resultadosDiv.appendChild(puntaje)
    resultadosDiv.appendChild(interpretacion3)

  } else if (resultadoIMC1 >= 30 && resultadoIMC1 < 34.99) {
    puntaje.textContent = `IMC: ${resultadoIMC2}`
    interpretacion4.textContent = `Nivel: OBESIDAD TIPO I`

    resultadosDiv.appendChild(puntaje)
    resultadosDiv.appendChild(interpretacion4)

  } else if (resultadoIMC1 >= 35 && resultadoIMC1 < 39.99) {
    puntaje.textContent = `IMC: ${resultadoIMC2}`
    interpretacion4.textContent = `Nivel: OBESIDAD TIPO II`

    resultadosDiv.appendChild(puntaje)
    resultadosDiv.appendChild(interpretacion4)

  } else {
    puntaje.textContent = `IMC: ${resultadoIMC2}`
    interpretacion4.textContent = `Nivel: OBESIDAD III`

    resultadosDiv.appendChild(puntaje)
    resultadosDiv.appendChild(interpretacion4)
  }
}
