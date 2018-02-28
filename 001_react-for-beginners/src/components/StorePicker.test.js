import React from "react";
import { shallow } from "enzyme";

import StorePicker from "../components/StorePicker";

const storePicker = shallow(<StorePicker />);

it("renders correctly", () => {
  expect(storePicker).toMatchSnapshot();
});