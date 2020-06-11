import React, { useState } from "react";
//import { connect } from "react-redux";

import moment from "moment";

import { formatTime } from "../../utils/formatNumber";

// export const Timer = ({ result }) => {
//   let [seconds, changeSeconds] = useState(
//     moment(result.drawingTime).add("14", "minutes").diff(Date.now(), "seconds")
//   );

//   const startAnimation = () => {
//     console.log("Hello Winners!");
//   };

//   if (seconds > 0) {
//     setTimeout(() => {
//       changeSeconds(seconds - 1);
//     }, 1000);
//   } else {
//     clearTimeout();
//     startAnimation();
//   }

//   return <div className='timer__time'>{formatTime(seconds)}</div>;
// };

// const mapStateToProps = (state) => ({
//   result: state.results.result,
// });

// export default connect(mapStateToProps)(Timer);

export const Timer = (props) => {
  let [seconds, changeSeconds] = useState(
    moment(props.time).add("5", "minutes").diff(Date.now(), "seconds")
  );

  if (seconds > 0) {
    setTimeout(() => {
      changeSeconds(seconds - 1);
    }, 1000);
  } else {
    clearTimeout();
    props.startAnimation();
  }

  return <div className='timer__time'>{formatTime(seconds)}</div>;
};

export default Timer;
