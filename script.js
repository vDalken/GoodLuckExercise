let rangeValue;
function updateCircle() {
    let circle = document.querySelector('.in-circle');
    rangeValue = document.getElementById("range").value;
    let progressBar = document.querySelector('.progress-bar');
    progressBar.style.background = `conic-gradient(greenyellow ${rangeValue * 3.6}deg, black 0)`;
    circle.innerText = rangeValue + "%";
}