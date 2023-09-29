const circularProgress = document.querySelector(".circular-progress");
const progressValue = document.querySelector(".progress-value");

let progressStartValue = 10;
const progressEndValue = 100;
const progressSpeed = 50;
let progressInterval;

function updateProgress() {
  progressStartValue++;
  progressValue.textContent = `${progressStartValue}%`;

  circularProgress.style.background = `conic-gradient(#eb1818 ${progressStartValue * 3.6}deg, #ededed 1deg)`;

  if (progressStartValue === progressEndValue) {
    clearInterval(progressInterval);
    progressInterval = null;
    progressStartValue = 0;
    startBtn.style.display = "none";
    pauseBtn.style.display = "none";
  }
}

document.getElementById("startBtn").addEventListener("click", function () {
  if (!progressInterval) {
    progressInterval = setInterval(updateProgress, progressSpeed);
  }
});

document.getElementById("pauseBtn").addEventListener("click", function () {
  if (progressInterval) {
    startBtn.textContent = "Resume";
    clearInterval(progressInterval);
    progressInterval = null;
  }
});