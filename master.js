resizeEvent();

function resizeEvent() {
    if (window.innerWidth > 1000){
        document.getElementById("robotHead").style.top = "12%";
    }
    if (window.innerWidth < 1000) {
        document.getElementById("robotHead").style.top = "12%";
    }
    if (window.innerWidth < 950) {
        document.getElementById("robotHead").style.top = "14%";
    }
    if (window.innerWidth < 900) {
        document.getElementById("robotHead").style.top = "15%";
    }
    if (window.innerWidth < 850) {
        document.getElementById("robotHead").style.top = "18%";
    }
    if (window.innerWidth < 800) {
        document.getElementById("robotHead").style.top = "20%";
    }
}