import React from "react";

import moment from "moment";

import { formatTime } from "../../utils/formatNumber";

export const Timer = (props) => {
  return (
    <div className='timer'>
      <div className='timer__title'>Winners are picked in</div>
      <div className='timer__time'>
        {formatTime(
          moment(props.time).add("60", "minutes").diff(Date.now(), "seconds")
        )}
      </div>
    </div>
  );
};

export default Timer;
