import React from "react";
import Home from "./Home";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

// Create a function to set up the Home component
function setup() {
  const enzymeWrapper = shallow(<Home />);

  return {
    enzymeWrapper,
  };
}

describe("Home component", () => {
  it("should render self", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find("h2").text()).toBe("Home");
  });
});
