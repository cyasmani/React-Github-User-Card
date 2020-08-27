import React, { Component } from 'react'
import {Jumbotron} from 'reactstrap'
import '../styles/cards.css'
import axios from 'axios'


export default class Cards extends Component {
    constructor(props){
        super(props)
        this.state ={
            followers: []
        }
        
        console.log(props.userinfo);

    }

        componentDidMount(){

        axios
        .get("https://api.github.com/users/mojombo/followers")
        .then((res) => {
            this.setState({followers: res.followers})
            console.log(this.state)})
        .catch((err) => console.log("error", err))


    }

    

    
    
    render() {
 
        return (
            <div>

               <div className="card">
                <h2>{this.props.userinfo.login}</h2>
                <img src={this.props.userinfo.avatar_url}/>
                


               </div>
                

                
                

                

  
            </div>
        )
    }
}
