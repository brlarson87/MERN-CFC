const formatNumber = (number, dollarSign) => {
  let formatted = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  if (dollarSign) {
    return `$${formatted}`;
  }

  return formatted;
};

export default formatNumber;

export const formatTime = (time) => {
  if (!time || time < 0) {
    return "00:00";
  }
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  if (minutes >= 10 && seconds >= 10) {
    return `${minutes}:${seconds}`;
  }

  if (minutes < 10 && seconds >= 10) {
    return `0${minutes}:${seconds}`;
  }

  if (minutes >= 10 && seconds < 10) {
    return `${minutes}:0${seconds}`;
  }

  return `0${minutes}:0${seconds}`;
};
