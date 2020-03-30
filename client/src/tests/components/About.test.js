import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import About from "../../components/layout/About";

//import "../../setupTests";

it("renders About component without props", () => {
  const wrapper = shallow(<About />);

  expect(toJSON(wrapper)).toMatchSnapshot();
});
