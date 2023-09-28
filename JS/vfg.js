//Evento del botón buscar
document.getElementById('boton_calcular').addEventListener('click', () => {
  const sexo = document.getElementById('sexo').value
  const edad = document.getElementById('edad').value
  const peso = document.getElementById('peso').value
  const creatinina = document.getElementById('creatinina').value
  if (edad && peso && creatinina) {
    calculoVFG(sexo, edad, peso, creatinina)
  } else {
    alert("Debe ingresar los datos requeridos");
  }
})

//Funcion que realiza el cálculo VFG
function calculoVFG(sexo, edad, peso, creatinina) {
  let VFG = 0
  if (sexo === 'masc') {
    VFG = ((140 - edad) * peso) / (72 * creatinina)
    VFG = VFG.toFixed(2)
    mostrarResultadosMasc(VFG)
  } else {
    VFG = (((140 - edad) * peso) / (72 * creatinina)) * 0.85
    VFG = VFG.toFixed(2)
    mostrarResultadosFem(VFG)
  }
}

//RESULTADOS Masculino
function mostrarResultadosMasc(VFG) {
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

  //VFG Resultado
  const resultadoVFG = document.createElement('p')
  resultadoVFG.classList.add('vfg_resultado')

  if (VFG < 15) {
    resultadoTitulo3.textContent = "Categoría: G5 - FALLA RENAL"
    resultadoVFG.textContent = `Valor: ${VFG} (mL/min/1.73m2)`

    resultadosDiv.appendChild(resultadoTitulo3)
    resultadosDiv.appendChild(resultadoVFG)

  } else if (VFG >= 15 && VFG < 29) {
    resultadoTitulo3.textContent = "Categoría: G4 - DESCENSO GRAVE"
    resultadoVFG.textContent = `Valor: ${VFG} (mL/min/1.73m2)`

    resultadosDiv.appendChild(resultadoTitulo3)
    resultadosDiv.appendChild(resultadoVFG)

  } else if (VFG >= 30 && VFG < 44) {
    resultadoTitulo2.textContent = "Categoría: G3b - DESCENSO MODERADO GRAVE"
    resultadoVFG.textContent = `Valor: ${VFG} (mL/min/1.73m2)`

    resultadosDiv.appendChild(resultadoTitulo2)
    resultadosDiv.appendChild(resultadoVFG)

  } else if (VFG >= 45 && VFG < 59) {
    resultadoTitulo2.textContent = "Categoría: G3a - DESCENSO MODERADO LEVE"
    resultadoVFG.textContent = `Valor: ${VFG} (mL/min/1.73m2)`

    resultadosDiv.appendChild(resultadoTitulo2)
    resultadosDiv.appendChild(resultadoVFG)

  } else if (VFG >= 60 && VFG < 89) {
    resultadoTitulo.textContent = "Categoría: G2 - LEVEMENTE DISMINUIDO"
    resultadoVFG.textContent = `Valor: ${VFG} (mL/min/1.73m2)`

    resultadosDiv.appendChild(resultadoTitulo)
    resultadosDiv.appendChild(resultadoVFG)

  } else if (VFG >= 90) {
    resultadoTitulo.textContent = "Categoría: G1 - NORMAL O ALTO"
    resultadoVFG.textContent = `Valor: ${VFG} (mL/min/1.73m2)`

    resultadosDiv.appendChild(resultadoTitulo)
    resultadosDiv.appendChild(resultadoVFG)
  }
}


//RESULTADOS FEMENINO
function mostrarResultadosFem(VFG) {
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

  //VFG Resultado
  const resultadoVFG = document.createElement('p')
  resultadoVFG.classList.add('vfg_resultado')

  if (VFG < 15) {
    resultadoTitulo3.textContent = "Categoría: G5 - FALLA RENAL"
    resultadoVFG.textContent = `Valor: ${VFG} (mL/min/1.73m2)`

    resultadosDiv.appendChild(resultadoTitulo3)
    resultadosDiv.appendChild(resultadoVFG)

  } else if (VFG >= 15 && VFG < 29) {
    resultadoTitulo3.textContent = "Categoría: G4 - DESCENSO GRAVE"
    resultadoVFG.textContent = `Valor: ${VFG} (mL/min/1.73m2)`

    resultadosDiv.appendChild(resultadoTitulo3)
    resultadosDiv.appendChild(resultadoVFG)

  } else if (VFG >= 30 && VFG < 44) {
    resultadoTitulo2.textContent = "Categoría: G3b - DESCENSO MODERADO GRAVE"
    resultadoVFG.textContent = `Valor: ${VFG} (mL/min/1.73m2)`

    resultadosDiv.appendChild(resultadoTitulo2)
    resultadosDiv.appendChild(resultadoVFG)

  } else if (VFG >= 45 && VFG < 59) {
    resultadoTitulo2.textContent = "Categoría: G3a - DESCENSO MODERADO LEVE"
    resultadoVFG.textContent = `Valor: ${VFG} (mL/min/1.73m2)`

    resultadosDiv.appendChild(resultadoTitulo2)
    resultadosDiv.appendChild(resultadoVFG)

  } else if (VFG >= 60 && VFG < 89) {
    resultadoTitulo.textContent = "Categoría: G2 - LEVEMENTE DISMINUIDO"
    resultadoVFG.textContent = `Valor: ${VFG} (mL/min/1.73m2)`

    resultadosDiv.appendChild(resultadoTitulo)
    resultadosDiv.appendChild(resultadoVFG)

  } else if (VFG >= 90) {
    resultadoTitulo.textContent = "Categoría: G1 - NORMAL O ALTO"
    resultadoVFG.textContent = `Valor: ${VFG} (mL/min/1.73m2)`

    resultadosDiv.appendChild(resultadoTitulo)
    resultadosDiv.appendChild(resultadoVFG)
  }
}