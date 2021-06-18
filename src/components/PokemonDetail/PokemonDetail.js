import React, { Component } from "react";
import "./PokemonDetail.css";

export default class PokemonDetail extends Component {
  state = {
    abilities: [],
    imageSrc: "",
    name: "",
  };

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then(({ abilities, sprites: { front_default: imageSrc }, name }) =>
        this.setState({ abilities, imageSrc, name })
      )
      .catch(console.log);
  }
  render() {
    const { abilities, imageSrc, name } = this.state;
    const abilityListItems = abilities.map(({ ability: { name } }) => {
      return <li>{name}</li>;
    });

    return (
      <section>
        <h2>Pokemon: {name}</h2>
        <img src={imageSrc} alt={name} />
        <p>Here are {name}'s abilities:</p>
        <ul>{abilityListItems}</ul>
      </section>
    );
  }
}
