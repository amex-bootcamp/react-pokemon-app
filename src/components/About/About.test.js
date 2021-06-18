import React from "react";
import About from "./About";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

// Create a function to set up the About component
function setup() {
  const enzymeWrapper = shallow(<About />);

  return {
    enzymeWrapper,
  };
}

describe("About component", () => {
  it("should render self", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find("h2").text()).toBe("About");
  });
});
