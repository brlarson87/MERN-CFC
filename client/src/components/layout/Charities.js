import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Charities = () => {
  return (
    <Fragment>
      <div class='container'>
        <form action='POST' class='search-form'>
          <input
            type='text'
            class='search-form__input'
            placeholder='Search charities...'
          />
          <button class='search-form__submit-btn'>
            <i class='fas fa-search'></i>
          </button>
        </form>
        <table class='charity-table'>
          <thead class='charity-table__head'>
            <tr class='charity-table__row'>
              <th class='charity-table__head'>Name</th>
              <th class='charity-table__head charity-table__head--lg'>
                Description
              </th>
              <th class='charity-table__head charity-table__head--sm'>
                Website
              </th>
              <th class='charity-table__head charity-table__head--sm'>
                Enter this Charity
              </th>
            </tr>
          </thead>
          <tbody class='charity-table__body'>
            <tr class='charity-table__row'>
              <td class='charity-table__data charity-table__data--title'>
                Secondhand Hounds
              </td>
              <td class='charity-table__data charity-table__data--desc'>
                Minnesota Dog Rescue saving a bunch of dogs
              </td>
              <td class='charity-table__data'>
                <Link class='charity-table__link'>Visit</Link>
              </td>
              <td class='charity-table__data'>
                <Link class='charity-table__link'>Enter</Link>
              </td>
            </tr>

            <tr class='charity-table__row'>
              <td class='charity-table__data charity-table__data--title'>
                Wounded Warriors Project
              </td>
              <td class='charity-table__data charity-table__data--desc'>
                Helping Wounded Veterans
              </td>
              <td class='charity-table__data'>
                <Link class='charity-table__link'>Visit</Link>
              </td>
              <td class='charity-table__data'>
                <Link class='charity-table__link'>Enter</Link>
              </td>
            </tr>

            <tr class='charity-table__row'>
              <td class='charity-table__data charity-table__data--title'>
                Marie Curie
              </td>
              <td class='charity-table__data charity-table__data--desc'>
                Provides care and support for people with terminal illness
              </td>
              <td class='charity-table__data'>
                <Link class='charity-table__link'>Visit</Link>
              </td>
              <td class='charity-table__data'>
                <Link class='charity-table__link'>Enter</Link>
              </td>
            </tr>

            <tr class='charity-table__row'>
              <td class='charity-table__data charity-table__data--title'>
                One atta time
              </td>
              <td class='charity-table__data charity-table__data--desc'>
                Providing clean water to those in need
              </td>
              <td class='charity-table__data'>
                <Link class='charity-table__link'>Visit</Link>
              </td>
              <td class='charity-table__data'>
                <Link class='charity-table__link'>Enter</Link>
              </td>
            </tr>

            <tr class='charity-table__row'>
              <td class='charity-table__data charity-table__data--title'>
                St. Judes
              </td>
              <td class='charity-table__data charity-table__data--desc'>
                Pediatric treatment and research facility focused on children's
                catastrophic diseases
              </td>
              <td class='charity-table__data'>
                <Link class='charity-table__link'>Visit</Link>
              </td>
              <td class='charity-table__data'>
                <Link class='charity-table__link'>Enter</Link>
              </td>
            </tr>

            <tr class='charity-table__row'>
              <td class='charity-table__data charity-table__data--title'>
                Habitat for Humanity
              </td>
              <td class='charity-table__data charity-table__data--desc'>
                Musters donations and volunteer help to build actual homes for
                people that need them
              </td>
              <td class='charity-table__data'>
                <Link class='charity-table__link'>Visit</Link>
              </td>
              <td class='charity-table__data'>
                <Link class='charity-table__link'>Enter</Link>
              </td>
            </tr>

            <tr class='charity-table__row'>
              <td class='charity-table__data charity-table__data--title'>
                Nature Conservancy
              </td>
              <td class='charity-table__data charity-table__data--desc'>
                Works to preserve land and water
              </td>
              <td class='charity-table__data'>
                <Link class='charity-table__link'>Visit</Link>
              </td>
              <td class='charity-table__data'>
                <Link class='charity-table__link'>Enter</Link>
              </td>
            </tr>

            <tr class='charity-table__row'>
              <td class='charity-table__data charity-table__data--title'>
                American Heart Association
              </td>
              <td class='charity-table__data charity-table__data--desc'>
                Organization dedicated to fighting cardiovascular diseases
              </td>
              <td class='charity-table__data'>
                <Link class='charity-table__link'>Visit</Link>
              </td>
              <td class='charity-table__data'>
                <Link class='charity-table__link'>Enter</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default Charities;
