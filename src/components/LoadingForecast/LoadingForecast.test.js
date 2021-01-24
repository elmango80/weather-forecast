import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import LoadingForecast from "./index";

describe("Test <LoadingForecast />", () => {
  test("renders correctly", () => {
    const wrapper = shallow(<LoadingForecast />);

    expect(wrapper).toMatchSnapshot();
  });
});
