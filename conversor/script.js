function calculaDolar() {
    let real = Number(document.getElementById('input-real')).value
    let dolar = Number(document.getElementById('input-dolar')).value

    let resultado = real / dolar 
   // alert(resultado)
   document.getElementById('res').innerHTML = resultado
   
}
