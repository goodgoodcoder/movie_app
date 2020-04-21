import React from 'react';
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
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

export default App;

/*
---------------------
<<<Class Component>>>
---------------------
class App extends React.Component{
  state = {
    count: 0
  } // state는 obj, 데이터는 변함
  add = () => {
    this.setState(current => ({count:current.count + 1}))
  };
  minus = () => {
    this.setState(current => ({count:current.count - 1}))
  };
  render() {
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
} //class component : react component로부터 확장, react는 자동으로 render method를 실행

export default App;

------------------------
<<<Function component>>>
------------------------

function Food({name, price, rating}) {
  return <div>
    <h2>I like {name}</h2>
    <h4>price : {price} | rating : {rating}/5.0</h4>
    </div>
}

Food.propTypes = {
  name: Proptypes.string.isRequired,
  price: Proptypes.string.isRequired,
  rating: Proptypes.number
}
//.array, .bool, .func, .number, .object, .string, .symbol
//Proptypes.objectOf(Proptypes.number)

const foodList = [
  {id:1, name:"Kimch", price:"1000 won", rating:4.3},
  {id:2, name:"Ramen", price:"2000 won", rating:4.1},
  {id:3, name:"Bibimbab", price:"3000 won", rating:4.5},
  {id:4, name:"Chukumi", price:"4000 won", rating:4.9},
  {id:5, name:"Donkasu", price:"5000 won", rating:4.8},
]

function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} price={dish.price} rating={dish.rating}/>
}

function App() {
  return (
    <div className="App">
      {foodList.map(renderFood)}
    </div>
  );
}

export default App;
----------------------------------------------------------------------

JSX = html + JavaScript
props.name = {name} (같은 의미) 를 통해 component를 재사용할 수 있다.
component는 대문자로 시작해야한다.
component를 통해 정보를 보낼 수 있다.
props : component에 넣게 되는 것 ex)name,price
props는 argument로 간다.
[array].map(function(){
  ...  
}) : map은 function을 array[n]각각에 적용시킨다.

{ foodList.map( function(dish) {
    return <Food name={dish.name}/>;
    }
  )
} 
==
{ foodList.map( {dish} => <Food name={dish.name}/> ) }
dish는 object이다(중요)
*/
