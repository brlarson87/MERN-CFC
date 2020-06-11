import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import { Landing } from "../../components/layout/Landing";

import users from "../fixtures/users";

it("renders Landing page on inital load", () => {
  const wrapper = shallow(<Landing />);

  expect(toJSON(wrapper)).toMatchSnapshot();
});

it("renders Landing page with user authenticated", () => {
  const wrapper = shallow(
    <Landing user={users[0]} isAuthenticated={true} loading={false} />
  );

  expect(toJSON(wrapper)).toMatchSnapshot();
});
