//Method Function
function lulusKedokteran(nilaiIPA, nilaiIPS, nilaiMTK, nilaiBahasa) {
  const lulus = nilaiIPA > 70 && nilaiIPS > 70 && nilaiMTK > 70 && nilaiBahasa > 70;
  return lulus;
}

// Variable Function
const nilaiIPAJohn = 90,
  nilaiIPSJohn = 50,
  nilaiMTKJohn = 99,
  nilaiBahasaJohn = 90;

const nilaiIPAJane = 90,
  nilaiIPSJane = 90,
  nilaiMTKJane = 90,
  nilaiBahasaJane = 90;

// Assignment Variable Function kedalam method function lulus kedokteran

const kelulusanKedokteranJohn = lulusKedokteran(nilaiIPAJohn, nilaiIPSJohn, nilaiMTKJohn, nilaiBahasaJohn);

const kelulusanKedokteranJane = lulusKedokteran(nilaiIPAJane, nilaiIPSJane, nilaiMTKJane, nilaiBahasaJane);

console.log('John Lulus', kelulusanKedokteranJohn);
console.log('Jane Lulus', kelulusanKedokteranJane);
