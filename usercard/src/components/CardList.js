import React, { Component } from 'react'
import axios from "axios"
import Cards from "./Cards"




export default class CardList extends Component {
    constructor(){
        super()
        this.state = {
            data:[],
            followers:[]
      
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

    // componentDidUpdate(){

    //     axios
    //     .get("https://api.github.com/users/mojombo/followers")
    //     .then((res) => {
    //         this.setState({followers: res.followers})
    //         console.log(this.state)})
    //     .catch((err) => console.log("error", err))


    // }
    render() {
        return (
            <div>
                <div>
                    {this.state.data.map(item => {
                    return <Cards userinfo={item}/>
                    })}

                </div>
                {/* <div>
                    {this.state.followers.map(item => {
                    return <Cards followerinfo={item}/>
                    })}
                </div> */}
                
            </div>
        )
    }
}
