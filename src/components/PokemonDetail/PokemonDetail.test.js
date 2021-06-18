import React from "react";
import PokemonDetail from "./PokemonDetail";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

// Create a function to set up the PokemonDetail component
function setup() {
  const props = {
    match: {
      params: {
        id: "1",
      },
    },
  };

  const enzymeWrapper = shallow(<PokemonDetail match={props.match} />);

  return {
    enzymeWrapper,
  };
}

describe("PokemonDetail component", () => {
  it("should render self", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find("h2").text()).toBe("Pokemon: ");
  });
});
