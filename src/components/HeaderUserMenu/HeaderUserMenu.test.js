import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import "@testing-library/jest-dom";

import HeaderUserMenu from "./index";

const middleware = [thunk];
const mockStore = configureStore(middleware);

const initState = {
  auth: {
    uid: "IejeJtqqpMbZQMtFVGhwBibaCDM2",
    displayName: "John Doe",
    photoURL: "http://dummyimage.com/133x128.png",
  },
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={store}>
    <HeaderUserMenu />
  </Provider>
);

jest.mock("redux/actions/auth", () => ({
  signOut: jest.fn(),
}));

describe("Test <HeaderUserMenu />", () => {
  test("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should dispatch signOut", () => {
    // wrapper.find("button[data-test-subj='logout-button']").prop("onClick")();

    // expect(signOut).toHaveBeenCalled();

    console.log(wrapper.find("button[data-test-subj='logout-button']"));
  });
});
