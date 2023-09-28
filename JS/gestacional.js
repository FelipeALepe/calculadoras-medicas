//Evento del botón buscar
document.getElementById('boton_calcular').addEventListener('click', () => {
  const fur = document.getElementById('FUR').value
  if (fur) {
    calculoGestacional(fur)
  } else {
    alert("Debe ingresar los datos requeridos");
  }
})

//Funcion Calculo Fecha de Parto
function calculoGestacional(fur) {
  //Calculo Fecha Parto
  let fur2 = new Date(fur)
  let fechaActual = new Date()
  let edadGestacional = Math.abs(fechaActual - fur2)
  edadGestacional = Math.floor(edadGestacional/(1000 * 3600 * 24))
  let semanas = Math.floor(edadGestacional/7)
  let dias = edadGestacional%7

  //Contenedor Resultado
  const resultadosDiv = document.getElementById('resultados')
  resultadosDiv.innerHTML = ''

  //Titulo Fecha Parto
  const resultadoTitulo = document.createElement('p')
  resultadoTitulo.classList.add('titulo_resultado')

  //Parto Resultado
  const resultadoGestacion = document.createElement('p')
  resultadoGestacion.classList.add('gestacion_resultado')

  //Mostrar Edad Gestacional
  resultadoTitulo.textContent = "La Edad Gestacional es de:"
  resultadoGestacion.textContent = `${semanas} semanas y ${dias} días`

  resultadosDiv.appendChild(resultadoTitulo)
  resultadosDiv.appendChild(resultadoGestacion)
}
