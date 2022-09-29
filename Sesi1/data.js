const nama = "Oky Satria Widhiansyah";
let umur = 20;

let biodata = document.getElementById('biodata');

function generateBiodata() {
    let generasi;

    if (umur >= 10 && umur < 18) {
       generasi = "Generasi remaja";
    } else if (umur >= 18 && umur< 30) {
        generasi = "Generasi dewasa";
    } else if (umur >= 30) {
        generasi = "Generasi tua";
    } else if (umur >= 2 && umur < 10) {
        generasi = "Generasi anak anak";
    } else {
        generasi = "Generasi bayi";
    }

    return biodata.innerHTML = generasi;

}

console.log(nama);
console.log(umur);
generateBiodata();