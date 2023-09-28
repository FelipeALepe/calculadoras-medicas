//Evento del botón buscar
document.getElementById('boton_calcular').addEventListener('click', () => {
  const fur = document.getElementById('FUR').value
  if (fur) {
    let dias = 280
    calculoParto(fur, dias)
  } else {
    alert("Debe ingresar los datos requeridos");
  }
})

//Funcion Calculo Fecha de Parto
function calculoParto(fur, dias) {
  //Calculo Fecha Parto
  let fur2 = new Date(fur)
  let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  fur2.setDate(fur2.getDate() + dias)
  resulFur = fur2.getDate() + " de " + meses[fur2.getMonth()] + " del " + fur2.getFullYear()

  //Contenedor Resultado
  const resultadosDiv = document.getElementById('resultados')
  resultadosDiv.innerHTML = ''

  //Titulo Fecha Parto
  const resultadoTitulo = document.createElement('p')
  resultadoTitulo.classList.add('titulo_resultado')

  //Parto Resultado
  const resultadoParto = document.createElement('p')
  resultadoParto.classList.add('parto_resultado')

  //Mostrar Fecha Parto
  resultadoTitulo.textContent = "Fecha Estimada de Parto"
  resultadoParto.textContent = `${resulFur}`

  resultadosDiv.appendChild(resultadoTitulo)
  resultadosDiv.appendChild(resultadoParto)
}
