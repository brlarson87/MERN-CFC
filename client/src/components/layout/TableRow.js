import React, { Fragment } from "react";

import { checkIfEligibleForPledge } from "../../utils/charityEligible";

const TableRow = props => {
  const showModal = () => {
    let prizeEligibleArray = checkIfEligibleForPledge(
      props.user.tickets,
      props.prizes,
      props.user.charitiesPledged
    ).prizesEligibleFor;

    props.showCharityConfirmation(prizeEligibleArray, props.charity._id);
  };

  return (
    <Fragment>
      <tr className='charity-table__row'>
        <td className='charity-table__data charity-table__data--title'>
          {props.charity.name}
        </td>
        <td className='charity-table__data charity-table__data--desc'>
          {props.charity.desc}
        </td>
        <td className='charity-table__data'>
          <a
            href={props.charity.url}
            target='_blank'
            rel='noopener noreferrer'
            className='charity-table__link'
          >
            Visit
          </a>
        </td>
        <td className='charity-table__data'>
          {props.user &&
          props.prizes &&
          checkIfEligibleForPledge(
            props.user.tickets,
            props.prizes,
            props.user.charitiesPledged
          ).eligible ? (
            <button className='charity-confirm-btn' onClick={showModal}>
              Enter
            </button>
          ) : (
            <p>Not eligible to pledge</p>
          )}
        </td>
      </tr>
    </Fragment>
  );
};

export default TableRow;
