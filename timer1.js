function timer(time) {
  if (time.length) return;

  for (let t of time) {
    const timerNumber = Number(t);

    if (timerNumber < 0) {continue};
    if (isNaN(timerNumber)) {continue}

    setTimeout(() => {
      process.stdout.write('\x07');
    }, timerNumber * 1000) 
  }
}
