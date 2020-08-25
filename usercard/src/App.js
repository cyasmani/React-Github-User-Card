import React, {Component} from 'react';
import CardList from "./components/CardList"
import axios from "axios"


export default class App extends Component {
  constructor(){
    super()
    this.state = {
      data:[]

    }

    
  }

  componentDidMount(){
    axios
    .get("https://api.github.com/users")
    .then((res) => {
        this.setState({data: res.data})
        console.log(this.state)})
    .catch((err) => console.log("error", err))
        
}

  render() {
    return (
      <div>

        <CardList userinfo={this.state.data}/>
        
        
        
      </div>
    )
  }
}


