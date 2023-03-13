// Method Procedure

function greeting(name) {
  console.log('Haloo ', name);
}

// const nama = greeting('Rizky');
// console.log(nama); undefined

greeting('Rizky');

//procedure method
function lulusKedokteran(nilaiIPA, nilaiIPS, nilaiMTK, nilaiBahasa) {
  const lulusKedokteran = nilaiIPA > 70 && nilaiIPS > 70 && nilaiMTK > 70 && nilaiBahasa > 70;
  console.log('Lulus Kedokteran', lulusKedokteran);
}

lulusKedokteran(80, 70, 90, 85);

lulusKedokteran(90, 90, 90, 90);

// prosedur method argumen tidak sepenuhnya di inisiasi yaitu nilai IPS
function lulusInformatika(nilaiIPA, nilaiIPS, nilaiMTK, nilaiBahasa) {
  const lulusInformatika = nilaiIPA > 70 && nilaiMTK > 70 && nilaiBahasa > 70;
  console.log('Lulus Informatika', lulusInformatika);
}

lulusInformatika(80, 70, 90, 85);

lulusInformatika(90, 90, 90, 90);
