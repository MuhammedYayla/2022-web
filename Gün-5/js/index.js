var degisken = 8;
degisken = 1.9;
degisken1 = "Merhaba";
degisken1 = 5 < 6;
degisken1 = [12, 3, 4, 5, 6];

var kontrol = function () {
    var btn = document.getElementById("btn1");
    var cb = document.getElementById("cb1");
    var txt = document.getElementById("txt1");
    if (cb.checked && txt.value != "") {
        btn.removeAttribute("disabled");
        btn.setAttribute("value", "Onaylandı");
    } else {
        btn.setAttribute("disabled", "disabled");
        btn.setAttribute("value", "Onay Bekleniyor");
    }
};
var obj1 = {
    ad: "Kamil",
    soyad: "Fıdıl",
    yas: 20,
    dersler: ["Türkçe", "Matematik"],
    notlar: [1, 2, 4, 6, 2, 1],
    sinavlar: [
      {
        ders: "Matematik",
        not: 45,
      },
      {
        ders: "Türkçe",
        not: 65,
      },
      {
        ders: "Fizik",
        not: 90,
      },
    ],
    notHesapla: function () {
      for (var i = 0; i < this.sinavlar.length; i++) {
        var item = this.sinavlar[i];
        if (item.not >= 50) {
          console.log(item.ders + " " + item.not + ": Geçti");
        } else {
          console.log(item.ders + " " + item.not + ": Kaldı");
        }
      }
    },
  };
