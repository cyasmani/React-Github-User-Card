import React, { Component } from 'react'
import axios from "axios"

export default class CardList extends Component {
    constructor(props){
        super(props)
        console.log(props)
    
    }

    componentDidMount(){
        axios
        .get("https://api.github.com/users/cyasmani")
        .then((res) => {
            console.log(res.data)})
        .catch((err) => console.log("error", err))
            
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
