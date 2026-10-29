
const versionButton = document.getElementById("versionButton");
const versionInfo = document.getElementById("versionInfo");

let version = "1.0";

versionButton.addEventListener("click", function () {
    versionInfo.textContent = "Bạn đang xem phiên bản " + version;
});

// Thay doi thanh "2.0" khi thuc hien cap nhat website.
