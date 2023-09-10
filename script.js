const result = document.getElementById('result')
const convert = document.getElementById('convert')
const input = document.getElementById('input')
const unitFrom = document.getElementById('unitFrom')

convert.addEventListener('click', () => {
  if (unitFrom.value === 'Kelvin') {
    result.innerHTML = parseFloat(input.value) + 273.15 + " K";
  }
  else {
    result.innerHTML = (parseFloat(input.value) * 9 / 5) + 32 + " °F";
  }
  console.log(unitFrom.value)
})