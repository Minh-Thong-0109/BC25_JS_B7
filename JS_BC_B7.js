chuoiDulieu = [];
chuoiSothuc = [];

// Thêm số nguyên vào mảng
document.getElementById("them__so").onclick = function () {
  var so__can__xet = document.getElementById("so__can__xet").value;
  if (so__can__xet - Math.floor(so__can__xet) == 0) {
    chuoiDulieu.push(so__can__xet);
    document.getElementById("ket__qua__xl").innerHTML =
      "<p class='alert alert-info'>Chuỗi được hình thành: " +
      chuoiDulieu +
      "</p>";
  } else {
    document.getElementById("ket__qua__xl").innerHTML =
      "<p class='alert alert-danger'>Số nhập vào không phải là số nguyên!</p>";
  }
  document.getElementById("help").innerHTML =
    "Vị trí mảng được xác định với vị trí đầu tiên là 0 và kết thúc là " +
    (chuoiDulieu.length - 1) +
    ".";
  document.getElementById("so__can__xet").value = "";
};

// Thêm số thực vào mảng và xử lý
document.getElementById("them__st__btn").onclick = function () {
  var so__thuc = document.getElementById("so__thuc").value;
  chuoiSothuc.push(so__thuc);
  document.getElementById("ket__qua__xl").innerHTML =
    "<div class='alert alert-info'>Chuỗi số nguyên đã được hình thành trước đó: </p><p class='kq'>[ " +
    chuoiDulieu +
    " ]</p></div>" +
    "<div class='alert alert-success'>Chuỗi số thực được hình thành: </p><p class='kq'>[ " +
    chuoiSothuc +
    " ]</p></div>";

  document.getElementById("so__thuc").value = "";
};

// Xử lý mảng
document.getElementById("xu__ly").onclick = function () {
  var chuoiDuong = [];
  var chuoiAm = [];
  var chuoiChan = [];
  var chuoiSonguyento = [];
  var tongDuong = 0;
  var chuoiDulieu_m = [...chuoiDulieu];
  var chuoiDulieu_mm = [...chuoiDulieu];
  var chuoiTonghop = chuoiDulieu.concat(chuoiSothuc);
  var chuoiDulieu_s = chuoiDulieu.sort(function (a, b) {
    return a - b;
  });
  for (var i = 0; i < chuoiDulieu.length; i++) {
    if (chuoiDulieu[i] > 0) {
      chuoiDuong.push(chuoiDulieu[i]);
      tongDuong = tongDuong + chuoiDulieu[i] * 1;
    }
    chuoiDulieu[i] % 2 == 0 ? chuoiChan.push(chuoiDulieu[i]) : "";
    var n = 0;
    for (var j = 1; j < Math.abs(chuoiDulieu_m[i]); j++) {
      if (n > 1) {
        break;
      } else {
        chuoiDulieu_m[i] % j == 0 ? (n = n + 1) : (n = n);
      }
    }
    (n < 2 && n > 0) || Math.abs(chuoiDulieu_m[i]) == 1
      ? chuoiSonguyento.push(chuoiDulieu_m[i])
      : "";
  }
  chuoiSonguyento.length == 0
    ? chuoiSonguyento.push("Chuỗi không có số nguyên tố")
    : "";
  chuoiDuong.length == 0
    ? chuoiDuong.push("Chuỗi không có số dương")
    : "";
  chuoiChan.length == 0 ? chuoiChan.push("Chuỗi không có số chẵn") : "";
  if (chuoiSothuc.length == 0) {
    document.getElementById("ket__qua__xl").innerHTML =
      "<div class='alert alert-info'><p>Mảng được tạo ra: <span class='kq'>[ " +
      chuoiDulieu_m +
      " ]</span><p>Trong đó:</p><p>- Số nhỏ nhất là: <span class='kq'>" +
      Math.min.apply(Math, chuoiDulieu) +
      "</span></p><p>- Số chẵn cuối cùng trong mảng là: <span class='kq'>" +
      chuoiChan[chuoiChan.length - 1] +
      "</span></p><p>- Số nguyên tố đầu tiên trong mảng là: <span class='kq'>" +
      chuoiSonguyento[0] +
      "</span></p><p>- Mảng được sắp xếp theo thứ tự tăng dần như sau: </p><p class='kq'>[ " +
      chuoiDulieu_s +
      " ]</p></div>" +
      "<div class='alert alert-success'><p>Số Dương trong chuỗi gồm: <span class='kq'>" +
      chuoiDuong +
      "</span></p><p>Trong đó:</p><p>- Số dương nhỏ nhất là: <span class='kq'>" +
      Math.min.apply(Math, chuoiDuong) +
      "</span></p>" +
      "<p>Và tổng các số dương đó bằng: <span class='kq'>" +
      tongDuong +
      "</span></p></div>";
  } else {
    var chuoiSonguyen = [];
    var chuoiSonguyen_k = [];
    var KQ = "";
    for (var k = 0; k < chuoiTonghop.length; k++) {
      chuoiSothuc[k] - Math.floor(chuoiSothuc[k]) == 0
        ? chuoiSonguyen_k.push(chuoiSothuc[k])
        : "";
      chuoiTonghop[k] - Math.floor(chuoiTonghop[k]) == 0
        ? chuoiSonguyen.push(chuoiTonghop[k])
        : "";
      chuoiTonghop[k] > 0 ? chuoiDuong.push(chuoiTonghop[k]) : "";
      chuoiTonghop[k] < 0 ? chuoiAm.push(chuoiTonghop[k]) : "";
    }
    if (chuoiDuong.length - chuoiAm.length > 0) {
      KQ =
        "Chuỗi có số lượng Số Dương nhiều hơn số Âm là " +
        (chuoiDuong.length - chuoiAm.length) +
        " số";
    } else if (chuoiAm.length - chuoiDuong.length > 0) {
      KQ =
        "Chuỗi có số lượng Số Âm nhiều hơn số Dương là " +
        (chuoiAm.length - chuoiDuong.length) +
        " số";
    } else {
      KQ = "Chuỗi có số lượng Số Âm bằng số lượng số Dương";
    }
    document.getElementById("ket__qua__xl").innerHTML =
      "<div class='alert alert-info'>" +
      "<p>Chuỗi số nguyên: </p><p class='kq'>[ " +
      chuoiDulieu_mm +
      " ]</p></div>" +
      "<div class='alert alert-warning'><p>Chuỗi số thực: </p><p class='kq'>[ " +
      chuoiSothuc +
      " ]</p><p>Trong đó:</p><p>- Có </span class='kq'>" +
      chuoiSonguyen_k.length +
      "</span><span> số nguyên: </span><span class='kq'>" +
      chuoiSonguyen_k +
      "</span></div>" +
      "<div class='alert alert-success'><p>Chuỗi Tổng hợp: </p><p class='kq'>[ " +
      chuoiTonghop +
      " ]</p><p>Trong đó:</p><p>- Có </span class='kq'>" +
      chuoiSonguyen.length +
      "</span><span> số nguyên: </span><span class='kq'>" +
      chuoiSonguyen +
      "</span>" +
      "<p><span>- Có </span><span class='kq'>" +
      chuoiAm.length +
      "</span><span> số âm: </span><span class='kq'>" +
      chuoiAm +
      "</span></p>" +
      "<p><span>- Có </span><span class='kq'>" +
      chuoiDuong.length +
      "</span><span> số dương: </span><span class='kq'>" +
      chuoiDuong +
      "</span></p>" +
      "<p class='kq'>" +
      KQ +
      "</p></div>";
  }
};

// Đảo vị trí
document.getElementById("dao__vt__btn").onclick = function () {
  vt1 = document.getElementById("vt__dao__1").value * 1;
  vt2 = document.getElementById("vt__dao__2").value * 1;
  if (
    vt1 < 0 ||
    vt2 < 0 ||
    vt1 == vt2 ||
    vt1 > chuoiDulieu.length - 1 ||
    vt2 > chuoiDulieu.length - 1
  ) {
    document.getElementById("ket__qua__xl").innerHTML =
      "<p class='alert alert-danger'>Vị trí không hợp lệ</p>";
  } else {
    var chuoiDulieu_m = [...chuoiDulieu];
    var chuoiDulieu_mm = [...chuoiDulieu];
    const vtr = chuoiDulieu_mm[vt1];
    chuoiDulieu_mm[vt1] = chuoiDulieu_mm[vt2];
    chuoiDulieu_mm[vt2] = vtr;
    document.getElementById("ket__qua__xl").innerHTML =
      "<div class='alert alert-info'><p>Mảng được tạo ra: <span class='kq'>[ " +
      chuoiDulieu_m +
      " ]</span><p><p><span>Mảng sau khi đổi vị trí: </span><span class='kq'>[ " +
      chuoiDulieu_mm +
      " ]</span><p></div>";
  }
};

// Reset
document.getElementById("reset").onclick = function () {
  document.getElementById("ket__qua__xl").innerHTML = "";
  document.getElementById("vt__dao__1").value = "";
  document.getElementById("vt__dao__2").value = "";
  chuoiDulieu = [];
  chuoiDulieu_mm = [];
  chuoiDulieu_m = [];
  chuoiSothuc = [];
  document.getElementById("help").innerHTML = "";
};
