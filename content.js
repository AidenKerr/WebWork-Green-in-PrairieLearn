let progressBars = document.getElementsByClassName("progress-bar bg-success");

for (let i = 0; i < progressBars.length; i++) {
    const bar = progressBars[i];
    if (bar.textContent == "100%") {
        bar.style.setProperty("background-color", "#88FF88", "important");
        bar.style.setProperty("color", "black");
        bar.innerHTML = "★Perfect★";
    }
}