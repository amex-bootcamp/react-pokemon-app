import { Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import NoMatch from "./components/NoMatch/NoMatch";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail";

function App() {
  return (
    <>
      <header>
        <h1>The Amex Pokemon App</h1>
        <Navigation />
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/pokemons">
            <Redirect to="/" />
          </Route>
          <Route path="/pokemons/:id" component={PokemonDetail} />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
