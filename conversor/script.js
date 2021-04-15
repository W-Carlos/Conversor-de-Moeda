function calculaDolar() {
   var real = document.getElementById('input-real')
   var dolar = document.getElementById('input-dolar')
   var res = document.getElementById('res')

   var real = Number.parseFloat(real.value)
   var dolar = Number.parseFloat(dolar.value)

   var result = real / dolar

   res.innerHTML = result
   
}
