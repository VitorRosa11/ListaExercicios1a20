function converterTemperatura() {
  const celsius = parseFloat(document.getElementById('celsius').value);
  const escala = document.getElementById('escala').value;
  const resultado = document.getElementById('resultado');

  
  if (isNaN(celsius)) {
    resultado.innerText = 'Digite uma temperatura válida em Celsius.';
    return;
  }

  let convertido;
  let unidade;

  if (escala === 'fahrenheit') {
    convertido = (celsius * 9/5) + 32;
    unidade = '°F';
  } else if (escala === 'kelvin') {
    convertido = celsius + 273.15;
    unidade = 'K';
  } else {
    resultado.innerText = 'Escala inválida.';
    return;
  }

  resultado.innerText = `${celsius}°C = ${convertido.toFixed(2)} ${unidade}`;
}
