import React, { Component } from 'react';
import './home.css';
import { item } from './item'

class Home extends Component{
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render(){
        return(
            <div className="home-body">
                <div className="container">
                    <h1 className="h">Welcome to Cooking Chief</h1>
                    <div className="paragraph">
                    <p>Where you are taught how to take care of your body, and how to eat healthy food.</p>
                    <p>On this website your going to get taught how to prepare delicious food for everytime of a meal</p>
                    </div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-lank'}>
                       {item.map((item, index) => {
                           return(
                            <li key={index}>
                            <a className={item.cName} href={item.url}>
                            {item.title}
                            </a>
                            </li>
                           )
                       })}
                   </ul>
                </div>
            </div>
        )
    }
}
export default Home;