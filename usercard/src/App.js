import React, {Component} from 'react';
import logo from './logo.svg';
import CardList from "./components/CardList"


export default class App extends Component {
  constructor(){
    super()
    this.state = {
      data:[]

    }
  }
  render() {
    return (
      <div>
        <CardList data={this.state.data}/>
        
        
      </div>
    )
  }
}


