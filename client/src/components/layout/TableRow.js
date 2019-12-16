import React, { Fragment } from "react";

const TableRow = props => {
  return (
    <Fragment>
      <tr class='charity-table__row'>
        <td class='charity-table__data charity-table__data--title'>
          {props.name}
        </td>
        <td class='charity-table__data charity-table__data--desc'>
          {props.desc}
        </td>
        <td class='charity-table__data'>
          <a href={props.url} target='_blank' class='charity-table__link'>
            Visit
          </a>
        </td>
        <td class='charity-table__data'>
          <a href='#' class='charity-table__link'>
            Enter
          </a>
        </td>
      </tr>
    </Fragment>
  );
};

export default TableRow;
