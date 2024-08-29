function esPalindromo(palabra) {
    const palabraReversa = palabra.split('').reverse().join('');
    return palabra === palabraReversa;
  }
  
  console.log(esPalindromo("radar"));  // Salida: true
  console.log(esPalindromo("hola"));   // Salida: false
  