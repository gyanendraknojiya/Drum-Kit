function playbtn(source) {
    var audio = new Audio("./sounds/" + source + ".mp3");
    return audio.play();
}
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 87) {
        return playbtn("tom-1");
    } else if (event.keyCode === 65) {
        return playbtn("tom-2");
    } else if (event.keyCode === 83) {
        return playbtn("tom-3");
    } else if (event.keyCode === 68) {
        return playbtn("tom-4");
    } else if (event.keyCode === 74) {
        return playbtn("crash");
    } else if (event.keyCode === 75) {
        return playbtn("kick-bass");
    } else if (event.keyCode === 76) {
        return playbtn("snare");
    }
});

// var array = document.querySelectorAll("button");
// for (let index = 0; index < array.length; index++) {
//     array[index].addEventListener("click", checkclick);
// }

// function checkclick() {
//     this.style.color = "white";
//     var audio = new Audio("./sounds/tom-1.mp3");
//     audio.play();

// }