import React, {Component} from 'react';
import CardList from "./components/CardList"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';



export default class App extends Component {
  constructor(){
    super()

  }
  render() {
    return (
      <div>

        <CardList/>
        
        
        
      </div>
    )
  }
}


