function changepicture(imagefilename) {
    document.body.style.backgroundImage =`url('${imagefilename}')`;
}

function clearpicture() {
    document.body.style.backgroundImage = 'none';
}

// optinal: set a default background on page load
window.onload= function ( ){
    changepicture("lion.jpeg"); // you can set any default image here
};