import React, { Fragment } from "react";

import { checkIfEligibleForPledge } from "../../utils/charityEligible";

const TableRow = ({ user, prizes, showCharityConfirmation, charity }) => {
  const showModal = () => {
    let prizeEligibleArray = checkIfEligibleForPledge(
      user.tickets,
      prizes,
      user.charitiesPledged
    ).prizesEligibleFor;

    showCharityConfirmation(prizeEligibleArray, charity._id);
  };

  return (
    <Fragment>
      <tr className='charity-table__row'>
        <td className='charity-table__data charity-table__data--title'>
          {charity.name}
        </td>
        <td className='charity-table__data charity-table__data--desc'>
          {charity.desc}
        </td>
        <td className='charity-table__data'>
          <a
            href={charity.url}
            target='_blank'
            rel='noopener noreferrer'
            className='charity-table__link'
          >
            Visit
          </a>
        </td>
        <td className='charity-table__data'>
          {user &&
            prizes &&
            checkIfEligibleForPledge(
              user.tickets,
              prizes,
              user.charitiesPledged
            ).eligible && (
              <button className='charity-confirm-btn' onClick={showModal}>
                Enter
              </button>
            )}
        </td>
      </tr>
    </Fragment>
  );
};

export default TableRow;
