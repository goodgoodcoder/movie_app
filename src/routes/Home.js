import React from 'react';
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies:[]
  }
  
  getMovies = async () => {
    const {
      data: {
        data: {movies}
      }
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    );
    this.setState({movies, isLoading:false});
  } //async, await 함수가 로딩 되는 것을 기다림

  componentDidMount() {
    this.getMovies(); 
  }

  render() {
    const {isLoading, movies} = this.state;
    return (
      <section className="container">
        {isLoading ? ( 
          <div className="loader">
            <span className="load__text">Loading...</span>
          </div>
          ) : (
          <div className="movies"> 
            {movies.map(movie => (
              <Movie 
                key={movie.id}
                id={movie.id} 
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div> 
          )
        }
      </section>
    );
  }
}

export default Home;