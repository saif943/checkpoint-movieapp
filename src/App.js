import "./App.css";
import MovieList from "./component/MovieList";
import { Navbar, InputGroup, FormControl, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import { moviesList } from "./data";
import ModalExample from "./component/Add";
import Rate from "./component/Rate";
import { Route, Switch } from "react-router-dom";
import Description from "./component/Description";

function App() {
  const [movies, setMovieList] = useState(moviesList);
  const [searchTitle, setsearchTitle] = useState("");
  const [searchRate, setSearchRate] = useState(1);
  const addMovie = (newmovie) => {
    setMovieList([...movies, newmovie]);
  };
  return (
    <div className="App">
      <Navbar className="bg-light justify-content-between">
        <Form inline>
          <ModalExample addMovie={addMovie} />
          <FormControl
            type="text"
            placeholder="Search"
            className=" mr-sm-2"
            onChange={(e) => setsearchTitle(e.target.value)}
          />
          <Rate setSearchRate={setSearchRate} rating={searchRate} />
        </Form>
      </Navbar>

      <Switch>
        <Route exact path="/">
          {" "}
          <MovieList
            searchTitle={searchTitle}
            movieList={movies}
            searchRate={searchRate}
          />
        </Route>

        <Route path="/Description" component={Description} />
      </Switch>
    </div>
  );
}

export default App;
