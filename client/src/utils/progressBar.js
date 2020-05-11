const progressBar = (ticketsEntered, prizeTotal) => {
  // 100% conditional needed
  if (
    ticketsEntered > 0 &&
    Math.round((ticketsEntered / prizeTotal) * 100) < 2
  ) {
    return "2%";
  }
  return Math.round((ticketsEntered / prizeTotal) * 100).toString() + "%";
};

export default progressBar;
