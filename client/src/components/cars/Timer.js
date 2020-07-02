import React, { useState } from "react";
//import { connect } from "react-redux";

import moment from "moment";

import { formatTime } from "../../utils/formatNumber";

export const Timer = (props) => {
  let [seconds, changeSeconds] = useState(
    moment(props.time).add("100", "minutes").diff(Date.now(), "seconds")
  );

  if (seconds > 0) {
    setTimeout(() => {
      changeSeconds(seconds - 1);
    }, 1000);
  } else {
    clearTimeout();
    props.startDrawing();
  }

  return <div className='timer__time'>{formatTime(seconds)}</div>;
};

export default Timer;
