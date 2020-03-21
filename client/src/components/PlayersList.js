import React, { Component } from 'react';
import axios from 'axios';
import Player from './Player.js';

export default class PlayersList extends Component {
    _isMounted = false;
    state = {
        isLoading: true
      }
    abortController = new AbortController();
    constructor() {
        super()

        this.state = {
            players: []
        }
    }
    
    
    
    componentDidMount() {
        this._isMounted = true;
        axios.get(`http://localhost:5000/api/players`,{signal:this.abortController.signal})
        .then(res => {
            if (this._isMounted) {
                this.setState({isLoading: false})
              }
            // console.log("Results", res)
            this.setState({players: res.data})
        })
        .catch(err => {
            console.log("Error", err)
        })
    }

    componentWillUnmount() {
        this.abortController.abort();
        this._isMounted = false;
    }
    render() {
        return (
            <div className="playersList"  data-testid='players'>
                {this.state.players.map((person, index) => {
                    return (
                        <Player key={index} person={person}/>
                    )
                })}
            </div>
        )
    }
}