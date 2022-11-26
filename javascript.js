function mobileMenu() {
    var x = document.getElementById("Meniu");
    var y = document.getElementsByClassName("ButonMeniuColor");
    if (x.style.display === "flex"){
        x.style.display = "none";
        for (var i = 0; i < y.length; i++) {
            y[i].style.backgroundColor = "#1a2db3";
        }
    } else {
        x.style.display = "flex";
        for (var i = 0; i < y.length; i++) {
            y[i].style.backgroundColor = "#fff";
        }
    }
};


var i = 0;
function changeImages(){
    var image = document.getElementById("imaginiPrezentare");
    var imagini = ['imagini/_DSC6904.jpg', 'imagini/_DSC6895.jpg', 'imagini/_DSC6903.jpg', 'imagini/_DSC6902.jpg'];
    image.src = imagini[i];
    i = (i + 1) % imagini.length;
}
setInterval(changeImages, 550);


