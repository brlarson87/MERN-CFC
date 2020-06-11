import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import { Cars } from "../../components/cars/Cars";

import prizes from "../fixtures/prizes";

describe("CARS COMPONENT", () => {
  it("renders Cars Component successfully without user", () => {
    const wrapper = shallow(<Cars prizes={prizes} />);

    expect(wrapper.find(FlexRow)).toHaveLength(4);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
