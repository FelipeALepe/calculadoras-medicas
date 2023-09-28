//Evento del botón buscar
document.getElementById('boton_calcular').addEventListener('click', () => {
  const glucosa = document.getElementById('glucosa').value
  const insulina = document.getElementById('insulina').value
  if (glucosa && insulina) {
    calculoHoma(glucosa, insulina)
  } else {
    alert("Debes ingresar los datos requeridos");
  }
})

//Funcion que realiza el cálculo HOMA
function calculoHoma(glucosa, insulina) {
  //Contenedor Resultado
  const resultadosDiv = document.getElementById('resultados')
  resultadosDiv.innerHTML = ''

  //Puntaje
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

  //Cálculo HOMA
  let resultadoHoma1 = glucosa * insulina / 405
  let resultadoHoma2 = resultadoHoma1.toFixed(3)

  if (resultadoHoma1 < 1.96) {
    puntaje.textContent = `Resultado: ${resultadoHoma2}`
    interpretacion.textContent = `Interpretación: Sin Resistencia a la Insulina`

    resultadosDiv.appendChild(puntaje)
    resultadosDiv.appendChild(interpretacion)

  } else if (resultadoHoma1 >= 1.96 && resultadoHoma1 < 3) {
    puntaje.textContent = `Resultado: ${resultadoHoma2}`
    interpretacion2.textContent = `Interpretación: Sospecha de resistencia a la insulina`

    resultadosDiv.appendChild(puntaje)
    resultadosDiv.appendChild(interpretacion2)

  } else {
    puntaje.textContent = `Resultado: ${resultadoHoma2}`
    interpretacion3.textContent = `Interpretación: Resistencia a la insulina`

    resultadosDiv.appendChild(puntaje)
    resultadosDiv.appendChild(interpretacion3)
  }

}
