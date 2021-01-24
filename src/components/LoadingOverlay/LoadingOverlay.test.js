import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import LoadingOverlay from "./index";

describe("Test <LoadingOverlay />", () => {
  test("renders correctly", () => {
    const wrapper = shallow(<LoadingOverlay />);

    expect(wrapper).toMatchSnapshot();
  });
});
