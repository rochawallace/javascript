var soma = (function* () {
    while (true) {
      var numero = prompt("Entre com o numero: ");
      if (numero != null) 
        yield parseInt(numero);
    }
  })()
  
  var total = 0;
  for (var i = 0; i < 2; i++)
    total += soma.next().value;
    
  alert(total);