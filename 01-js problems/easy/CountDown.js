function startCountdown(duration) {
  let timer = duration;
  const countdownElement = 0

  const interval = setInterval(() => {
    const seconds = timer % 60;

    countdownElement.textContent = `Time left: ${seconds} seconds`;

    if (timer === 0) {
      clearInterval(interval);
      countdownElement.textContent = "Time's up!";
    } else {
      timer--;
    }
  }, 1000);
}

startCountdown(10);
