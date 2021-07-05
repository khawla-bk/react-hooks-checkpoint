import { useState } from "react";
import React from "react";
import "./App.css";
import StarRating from "./components/StarRating";
import Search from "./components/Search";
import List from "./components/List";
import AddMovie from "./components/AddMovie";
import Navbar from "./components/Navbar";

function App() {
  const [movies, setMovies] = useState([
    {
      img:
        "https://m.media-amazon.com/images/M/MV5BMTg4ODkzMDQ3Nl5BMl5BanBnXkFtZTgwNTEwMTkxMDE@._V1_.jpg",
      name: "Mr. Nobody",
      year: "2009",
      rate: 5,

      description:
        "The film tells the life story of Nemo Nobody, a 118-year-old man who is the last mortal on Earth after the human race has achieved quasi-immortality.",
      id: 1
    },
    {
      img:
        "https://images-na.ssl-images-amazon.com/images/I/914I-VXn3cL._RI_.jpg",
      name: "I Origin",
      year: "2014",
      rate: 4,

      description:
        "I Origins is an independent drama sci-fi , written, produced and directed by Mike Cahill, released in 2014.",
      id: 2
    },
    {
      img:
        "https://i.pinimg.com/originals/11/1c/5c/111c5c9ad99661af2d80e38948cf29d8.jpg",
      name: "Interstellar",
      year: "2014",
      rate: 3,

      description:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
      id: 3
    },
    {
      img:
        "https://pics.filmaffinity.com/The_House_at_the_End_of_Time-114727023-large.jpg",
      name: "The House At The End Of Time",
      year: "2013",
      rate: 4,

      description:
        "Dulce encounters apparitions in her house and unleashes a terrible prophecy. Thirty years later, Dulce, now an old woman, returns to unravel the mystery that has terrorized her for years.",
      id: 4
    },
    {
      img:
        "https://images-na.ssl-images-amazon.com/images/I/51TfUWh5N9L._SY445_.jpg",
      name: "Inception",
      year: "2010",
      rate: 4,

      description:
        "Inception is a thriller of science fiction American-British written, directed and produced by Christopher Nolan, released in 2010.",
      id: 5
    },
    {
      img:
        "https://m.media-amazon.com/images/M/MV5BZjZlZDlkYTktMmU1My00ZDBiLWFlNjEtYTBhNjVhOTM4ZjJjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      name: "Donnie Darko",
      year: "2001",
      rate: 4,

      description:
        "Donnie Darko, an awkward teenager, befriends Frank, a figure in a bunny costume only he can see, who informs Donnie that the world will end in 28 days, 6 hours, 42 minutes, and 12 seconds.",
      id: 6
    },
    {
      img: "https://movieposters2.com/images/635972-b.jpg",
      name: "Sherlock Holmes",
      year: "2009",
      rate: 5,

      description:
        "Detective Sherlock Holmes and his partner, Dr Watson, send Blackwood, a serial killer, to the gallows. However, they are shocked to learn that he is back from the dead and must pursue him again.",
      id: 7
    }
  ]);

  const [searchValue, setsearchValue] = useState("");
  const [rate, setRate] = useState(1);
  const handleAdd = (add) => {
    setMovies([...movies, add]);
  };

  return (
    <div>
      <div className="nav">
        <Navbar />
        <Search setsearchValue={setsearchValue} />
      </div>

      <div className="filter">
        <p> Filter By Rating: </p>
        <StarRating setRate={setRate} /> <br />
        <br />
      </div>
      <List movies={movies} searchValue={searchValue} rate={rate} />
      <AddMovie Add={AddMovie} handleAdd={handleAdd}/>
    </div>
  );
}

export default App;

