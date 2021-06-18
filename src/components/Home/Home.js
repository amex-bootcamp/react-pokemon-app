import React, { Component } from "react";
import PokemonList from "../PokemonList/PokemonList";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <section>
        <h2>Home</h2>
        <PokemonList />
      </section>
    );
  }
}
