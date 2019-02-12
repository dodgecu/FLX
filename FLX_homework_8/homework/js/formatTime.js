function formatTime(time) {
  const days = Math.floor(time / (24 * 60));
  const hours = Math.floor((time % (24 * 60)) / 60);
  const minutes = Math.floor((time % (24 * 60)) % 60);
  return days + " day(s) " + hours + " hour(s) " + minutes + " minute(s).";
}
formatTime(3601);
