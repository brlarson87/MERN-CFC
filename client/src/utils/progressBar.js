const progressBar = (ticketsEntered, prizeTotal) => {
  // 100% conditional needed
  return Math.round((ticketsEntered / prizeTotal) * 100).toString() + "%";
};

export default progressBar;
