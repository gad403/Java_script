let countdown;
let timeLeft;

function startCountdown(seconds) {
  timeLeft = seconds;

  if (isNaN(timeLeft) || timeLeft <= 0) {
    console.log("Enter valid seconds.");
    return;
  }

  console.log(`Countdown started for ${timeLeft} seconds:`);

  clearInterval(countdown);
  countdown = setInterval(() => {
    if (timeLeft > 0) {
      console.log(timeLeft);
      timeLeft--;
    } else {
      clearInterval(countdown);
      console.log("Time's up!");
    }
  }, 1000);
}

function resetCountdown() {
  clearInterval(countdown);
  console.log("Countdown reset.");
}
startCountdown(10);
