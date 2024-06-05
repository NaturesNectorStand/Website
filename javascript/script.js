function heroImage1() {
    document.querySelector('.heroImgsScrollerImgs').style.transform = "translate(500px)";
    document.getElementById('Smoothie1').style.animation = "spin 1.2s linear";
}

function heroImage2() {
    document.querySelector('.heroImgsScrollerImgs').style.transform = "translate(0px)";
    document.getElementById('Smoothie2').style.animation = "spin 1.2s linear";
}

function heroImage3() {
    document.querySelector('.heroImgsScrollerImgs').style.transform = "translate(-500px)";
    document.getElementById('Extra1').style.animation = "spin 1.2s linear";
}

function openMenu() {
    document.querySelector(".PopUpMenu").style.display = "block";
    document.querySelector(".PopupBackGround").style.display = "block";
}

function closeMenu() {
    document.querySelector(".PopUpMenu").style.display = "none";
    document.querySelector(".wereOpen").style.display = "none";
    document.querySelector(".PopupBackGround").style.display = "none";
    document.querySelector(".wereOpenBackground").style.display = "none";
}

function openOpen() {
    document.querySelector(".wereOpen").style.display = "flex";
    document.querySelector(".wereOpenBackground").style.display = "block";
}