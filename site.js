// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

/*document.addEventListener("DOMContentLoaded", function () {
    // This code runs when the page has fully loaded
    // You can add your custom JavaScript functionality here

    // Example: Alert the selected USB port when a user changes the selection
    var usbPortDropdown = document.getElementById("ScannerPort");
    usbPortDropdown.addEventListener("change", function () {
        var selectedPort = ScannerPort.value;
        alert("Selected USB Port: " + selectedPort);
    });
});*/

function myFunction(event) {
    if (document.getElementById("ScannerPort").value === "2DBarcodeScanner") {
        //var barcodeInput = event.key; /*"DS - 11 | 1 | TESTFIRST | TESTMIDDLE | TESTLAST | F | MA |01 /01 / 2000 | 123467890 | 1919 N LYNN ST || ARLINGTON | VA | 22209 ||||||||||||||| TESTEMAIL@GMAIL.COM||| DS 11 B 03 2022 1 | 6=Y, 7 = N || 0 |";*/
        //console.log(document.getElementById("FirstName").value);
        //var barcodeInput = document.getElementById("FirstName").value += event.key;
        //console.log(document.getElementById("FirstName").value);

        var barcodeInput = /*"DS - 11 | 1 | TESTFIRST | TESTMIDDLE | TESTLAST | F | MA |01 /01 / 2000 | 123467890 | 1919 N LYNN ST || ARLINGTON | VA | 22209 ||||||||||||||| TESTEMAIL@GMAIL.COM||| DS 11 B 03 2022 1 | 6=Y, 7 = N || 0 |"*/ event.key;
        console.log(event.key);
        document.getElementById("FirstName").value = barcodeInput;
        /*var dataArray = barcodeInput.split('|');
        document.getElementById("FirstName").value = dataArray[2];
        document.getElementById("MiddleName").value = dataArray[3];
        document.getElementById("LastName").value = dataArray[4];
        document.getElementById("Sex").value = dataArray[5];
        document.getElementById("PlaceofBirth").value = dataArray[6];
        document.getElementById("DateofBirth").value = dataArray[7];
        document.getElementById("SocialSecurityNumber").value = dataArray[8];
        document.getElementById("Address").value = dataArray[9];
        document.getElementById("City").value = dataArray[11];
        document.getElementById("State").value = dataArray[12];
        document.getElementById("ZipCode").value = dataArray[13];*/
    }
}

document.addEventListener("keydown", myFunction);

