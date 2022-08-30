import React from "react";
import {data} from '../data';
import NavBar from './NavBar'; 
import MovieCard from "./MovieCard";
//we passs store from index file . here we can use it 

class App extends React.Component{

  componentDidMount(){
    this.props.store.dispatch({
      type:'ADD_MOVIE',
      movies:data
    })
    console.log('STate : ', this.props.store.getState())
  }

  render(){
  const movies = this.props.store.getState(); 
    return (
      <div className="App">
        <NavBar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div>
          
            {
              movies.map((movie , index)=>{
                // key is important to uniquely identitfied 
                return <MovieCard movie={movie} key={`movie-${index}`}/>
              }) 
            }
          </div>
          
        </div>
      </div>
    );
  }
}  

export default App;
