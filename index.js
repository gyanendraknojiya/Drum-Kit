function playbtn(source, key) {
    var audio = new Audio("./sounds/" + source + ".mp3");
    var pressedkey = document.querySelector("." + key);
    pressedkey.classList.add("pressed");
    setTimeout(function() {
        pressedkey.classList.remove("pressed")
    }, 100);
    return audio.play();
}
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 87) {
        return playbtn("tom-1", "w");
    } else if (event.keyCode === 65) {
        return playbtn("tom-2", "a");
    } else if (event.keyCode === 83) {
        return playbtn("tom-3", "s");
    } else if (event.keyCode === 68) {
        return playbtn("tom-4", "d");
    } else if (event.keyCode === 74) {
        return playbtn("crash", "j");
    } else if (event.keyCode === 75) {
        return playbtn("kick-bass", "k");
    } else if (event.keyCode === 76) {
        return playbtn("snare", "l");
    }
});