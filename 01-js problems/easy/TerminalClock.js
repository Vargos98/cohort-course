function startClock() {
  setInterval(() => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    process.stdout.write(`\r${hours}:${minutes}:${seconds}`); // Overwrites the same line
  }, 1000);
}

startClock();

