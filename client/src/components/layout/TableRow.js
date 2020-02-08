import React, { Fragment } from "react";

const TableRow = props => {
  return (
    <Fragment>
      <tr className='charity-table__row'>
        <td className='charity-table__data charity-table__data--title'>
          {props.name}
        </td>
        <td className='charity-table__data charity-table__data--desc'>
          {props.desc}
        </td>
        <td className='charity-table__data'>
          <a href={props.url} className='charity-table__link'>
            Visit
          </a>
        </td>
        <td className='charity-table__data'>
          <a href={props.url} className='charity-table__link'>
            Enter
          </a>
        </td>
      </tr>
    </Fragment>
  );
};

export default TableRow;
