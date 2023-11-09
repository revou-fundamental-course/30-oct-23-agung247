var usia = document.getElementById("usia");
var tb = document.getElementById("tb");
var bb = document.getElementById("bb");
var jkp = document.getElementById("jkp");
var jkw = document.getElementById("jkw");
var form = document.getElementById("Addform");

function validateForm() {
    if (
        usia.value == "" ||
        tb.value == "" ||
        bb.value == "" ||
        (jkp.checked == false && jkw.checked == false)
    ) {
        alert("All fields are required!");
        document
            .getElementById("submit")
            .removeEventListener("click", countBmi);
    } else {
        countBmi();
    }
}

document.getElementById("submit").addEventListener("click", validateForm);
function countBmi() {
    var p = [usia.value, tb.value, bb.value];
    if (jkp.checked) {
        p.push("jkp");
    } else if (jkw.checked) {
        p.push("jkw");
    }

    form.reset();
    var bmi = Number(p[2]) / (((Number(p[1]) / 100) * Number(p[1])) / 100);
    var result = "";
    var advice = "";
    if (bmi < 18.5) {
        result = "Berat Badan Kurang";
        advice = "Anda berada dalam kategori kekurangan berat badan. Hubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan."
    } else if (18.5 <= bmi && bmi <= 24.9) {
        result = "Berat Ideal";
        advice = "Anda berada dalam kategori berat badan yang normal. Tetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda.";
    } else if (25 <= bmi && bmi <= 29.9) {
        result = "Berat Badan Berlebih";
        advice = "Anda berada dalam kategori beran badan berlebih. Utamakan hidup sehat dan perhatikan konsumsi harian";
    } else if (30 <= bmi && bmi <= 34.9) {
        result = "Obesitas";
        advice = "Anda berada dalam kategori obesitas. Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik. ";
    } else if (35 <= bmi) {
        result = "Sangat Obesitas";
        advice = "Anda berada dalam kategori Sangat obesitas. Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda.";
    }
    
    var h1 = document.createElement("h1");
    var h2 = document.createElement("h2");
    var p = document.createElement("p");

    var t = document.createTextNode(result);
    var b = document.createTextNode("BMI: ");
    var r = document.createTextNode(parseFloat(bmi).toFixed(2));
    var d = document.createTextNode(advice);

    var Showresult = document.createElement("div");
    Showresult.style.backgroundColor = "rgba(24, 24, 100, 0.691)"; 
    Showresult.style.border = "1px solid #2c2c2d";
    Showresult.style.borderRadius = "10px";
    Showresult.style.color = "#FFFBF5";
    Showresult.style.textAlign = "center";
    Showresult.style.padding = "20px"; 
    Showresult.style.margin = "20px"; 
    Showresult.style.filter = "drop-shadow(0 5px 10px rgba(0, 0, 0, 0.5))";

    // Menambahkan elemen-elemen ke dalam div
    h1.appendChild(t);
    h2.appendChild(b);
    h2.appendChild(r);
    p.appendChild(d);

    Showresult.appendChild(h1);
    Showresult.appendChild(h2);
    Showresult.appendChild(p);

    // Menambahkan div ke dalam body
    document.body.appendChild(Showresult);

    // Menghapus event listener
    document.getElementById("submit").removeEventListener("click", countBmi);
    document.getElementById("submit").removeEventListener("click", validateForm);
    }
    document.getElementById("submit").addEventListener("click", countBmi);
