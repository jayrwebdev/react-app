import React, { Component } from 'react'
import "./css/style.css"
class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 title">NBA TEAM MEMORY GAME</h1>
                    <p className="lead"></p>
                </div>
            </div>
        )
    }
}

export default Header