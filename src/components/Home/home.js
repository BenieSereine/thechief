import React, { Component } from 'react';
import './home.css';
import { item } from './item'
import Cards from './Cards'
class Home extends Component{
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render(){
        return(
            <div className="home-body">
                <div className="container1">
                    <h1 className="h">Welcome to Cooking Chief</h1>
                    <div className="paragraph">
                    <p>Where you are taught how to take care of your body, 
                        and how to eat healthy food.</p>
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
                <Cards/>
            </div>
        )
    }
}
export default Home;