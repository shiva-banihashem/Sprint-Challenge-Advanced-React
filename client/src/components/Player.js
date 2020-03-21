import React, { Component } from 'react'

export default class Player extends Component {
    render() {
        return (
            <div className="player" data-testid='player'>
                <h2>Player Name: {this.props.person.name}</h2>
                <h4>Country: {this.props.person.country}</h4>
                <h4>Number of Searches: {this.props.person.searches}</h4>
            </div>
        )
    }
}