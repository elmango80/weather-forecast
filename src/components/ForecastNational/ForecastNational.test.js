import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";

import { useFetchApi } from "hooks/useFetchApi";

import { ForecastNational } from "components/ForecastNational";

jest.mock("hooks/useFetchApi");

describe("Test <ForecastNational />", () => {
  test("renders correctly", () => {
    useFetchApi.mockReturnValue({
      data: {},
      loading: true,
      msgError: null,
    });

    const wrapper = shallow(<ForecastNational />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should show the national forecast for today and tomorrow", () => {
    const data = {
      today: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae sodales magna. Nulla tristique mi id sem vulputate, non egestas lacus sodales.",
        "Aliquam tristique porttitor turpis sit amet tristique. Nulla sed pharetra magna. Phasellus elementum in felis non efficitur. Nulla facilisi.",
        "Integer sodales est id pulvinar maximus. Duis vel tellus imperdiet, tincidunt ipsum eget, tristique libero. In a diam ut arcu porta consectetur.",
      ],
      tomorrow: [
        "Etiam non viverra felis. Nullam aliquet ex quis lobortis luctus. Nulla eu ipsum et est pulvinar venenatis ut vel metus. Nunc ac hendrerit nisl. Vivamus hendrerit dictum nunc sed volutpat.",
        "Cras quis risus quis mi dictum elementum at condimentum dui. Nunc eu consequat velit. Phasellus id fringilla ligula.",
      ],
    };

    useFetchApi.mockReturnValue({
      data,
      loading: false,
    });

    const wrapper = shallow(<ForecastNational />);

    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.find("p").exists()).toBe(false);
    // expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
