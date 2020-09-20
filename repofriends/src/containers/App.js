import React,{Component} from 'react';
//import {robots} from './Robots';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';

import './App.css';
import Card from '../components/Card';



class App extends Component {
  constructor(){
    super()
    this.state={
      //  robots:robots,
      robots:[] ,
        searchfield:''
      }


    }

// life cycle cunstroctor ,render ,compnentdidmount ,render
//api
    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>{
      return  response.json();
      })
      .then(users =>{
        this.setState({robots: users})
      })
    // this.setState({robots: robots})
    }
  onSearchChange =(event)=>{
    this.setState({searchfield:event.target.value})
    //console.log(event.target.value);

    //console.log(filteredRobots);

  }
  render  (){
    const filteredRobots= this.state.robots.filter(robot=>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    }
    )

    //if you want to fetch just couple of users

    if (this.state.robots.length === 0){
      return <h1>Loading</h1>
    } else{
    return (
      <div className="App">
        <h1>robofriends</h1>
        <Searchbox searchChange={this.onSearchChange} searchfield={this.state.searchfield}  />
      <Scroll>
      <Cardlist robots={filteredRobots} />
      </Scroll>
      </div>
    );

}
  }

}

export default App;
