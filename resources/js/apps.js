// Initialize Neutralino
Neutralino.init();
document.getElementById('backsessison').addEventListener('click', function() {
    window.location.href = '/index.html';
}
);

let findguests = Neutralino.os.execCommand('find ~/Guests -type f \( -name "*.desktop" -o -name "*.quickapp" \) -o -type d \( -name "*.guestapp" -o -name "*.guest" \)');

findguests.then(result => {
    let guests = result.stdOut;
    console.log(guests);
}).catch(error => {
    console.error(error); // Esto manejará cualquier error que pueda ocurrir
});