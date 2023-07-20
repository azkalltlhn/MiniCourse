// Fungsi javascript reset //

function resetForm() {
    // Mendapatkan elemen-elemen input yang ingin di-reset
    var genderInputs = document.getElementsByName("gender");
    var beratBadanInput = document.getElementById("beratbadan");
    var tinggiBadanInput = document.getElementById("tinggibadan");
    var usiaInput = document.getElementById("usia");
    var resultContent = document.getElementById("resultContent");

    // Mereset nilai-nilai input menjadi kosong
    for (var i = 0; i < genderInputs.length; i++) {
        genderInputs[i].checked = false;
    }

    beratBadanInput.value = '';
    tinggiBadanInput.value = '';
    usiaInput.value = '';

    // Menyembunyikan hasil perhitungan BMI
    resultContent.style.display = "none";
}

// Fungsi javascript perhitungan //
function hitungBMI() {
    // Ambil nilai dari input
    var beratBadan = parseFloat(document.getElementById("beratbadan").value);
    var tinggiBadan = parseFloat(document.getElementById("tinggibadan").value);
    var usia = parseFloat(document.getElementById("usia").value);

    // Lakukan perhitungan BMI
    var tinggiMeter = tinggiBadan / 100;
    var bmi = beratBadan / (tinggiMeter * tinggiMeter);

    // Tentukan status berat badan berdasarkan BMI
    var status = "";
    var resultElement = document.getElementById("resultElement");
    var penyakitElement = document.getElementById("penyakitElement");

    if (bmi < 18.5) {
            status = "Kekurangan berat badan";
        // Result berat badan
            resultElement.innerHTML = "Anda kekurangan berat badan";
        // Keterangan untuk status Kekurangan berat badan
        var keteranganElement = document.getElementById("keteranganElement");
            keteranganElement.innerHTML = "Anda berada dalam kategori kekurangan berat badan.<br>Hubungi dokter lebih lanjut mengenai pola makan dan<br>gizi yang baik untuk meningkatkan kesehatan.";
        // Pesan penyakit untuk status Kekurangan berat badan
            penyakitElement.innerHTML = "Berat rendah dapat menyebabkan berbagai masalah penyakit:<br>Infertilitas<br>Anemia<br>Osteoporosis<br>Sistem Imun Lemah";

    } else if (bmi >= 18.5 && bmi <= 24.5) {
            status = "Normal (ideal)";
            resultElement.innerHTML = "Anda memiliki berat badan ideal.<br>Good job!!";
         // Keterangan untuk status normal berat badan
        var keteranganElement = document.getElementById("keteranganElement");
            keteranganElement.innerHTML = "Anda berada dalam kategori berat badan yang normal.<br>Tetap pertahankan berat badan Anda dan jaga berat<br>badan Anda dengan mengatur keseimbangan antara<br>pola makan dan aktivitas fisik Anda.";
        // Jika berada di kisaran normal, tidak perlu menampilkan pesan penyakit
            penyakitElement.innerHTML = "";
         // Sembunyikan box3 jika berat badan ideal
         var box3 = document.querySelector(".box3");
            box3.style.display = "none";

    } else if (bmi >= 24.6 && bmi <= 29.9) {
            status = "Kelebihan berat badan";
            resultElement.innerHTML = "Anda memiliki berat badan berlebih";
        // Keterangan untuk status Kekurangan berat badan
        var keteranganElement = document.getElementById("keteranganElement");
            keteranganElement.innerHTML = "Anda berada dalam kategori overweight atau berat badan berlebih.<br>Cara terbaik untuk menurunkan berat badan adalah dengan<br>mengatur kalor makanan yang dikonsumsi dan berolahraga.<br>Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan<br>untuk menurunkan berat badan hingga batas normal.";
        // Pesan penyakit untuk status Kelebihan berat badan
            penyakitElement.innerHTML = "Beberapa penyakit yang berasal dari kelebihan berat badan:<br>Diabetes<br>Hipertensi<br>Sakit Jantung<br>Osteoarthritis";
        
    } else {
            status = "Kegemukan (Obesitas)";
            resultElement.innerHTML = "Anda berada dalam kategori obesitas";
        // Keterangan untuk status Kekurangan berat badan
        var keteranganElement = document.getElementById("keteranganElement");
            keteranganElement.innerHTML = "Anda berada dalam kategori obesitas.<br>Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik.<br>Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda.";
        // Pesan penyakit untuk status Kegemukan (Obesitas)
            penyakitElement.innerHTML = "Beberapa penyakit yang berasal dari obesitas:<br>Diabetes<br>Hipertensi<br>Sakit Jantung<br>Osteoarthritis";
    }

    // Tampilkan hasil perhitungan pada elemen HTML
    var bmiResultElement = document.getElementById("bmiResult");
        bmiResultElement.textContent = Math.round(bmi * 10) / 10;

    var statusResultElement = document.getElementById("statusResult");
        statusResultElement.textContent = status;

    // Tampilkan div dengan hasil perhitungan
    var resultContent = document.getElementById("resultContent");
        resultContent.style.display = "block";
}
