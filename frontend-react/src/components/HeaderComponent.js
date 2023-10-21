import React, { Component } from 'react'


import Logo from "../Assets/Logo.svg";

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }
    
    render() {
        return (
            <nav>
            
            <div className="navbar-links-container text-center">
                <a href="/home"> <img src={Logo} alt="" /></a>
              <a href="/home">Home</a>
              <a href="/menu">Menu</a>
              <a href="/delivery">Delivery</a>
              <a href="/about">About Us</a>
              <a href="">
                
              </a>
              
            </div>
            <div className="navbar-menu-container">
              
            </div>
            
          </nav>
            /*<div>
                <header>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="/">Food Delivery App</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/menu">Menu</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/delivery">Delivery</a>
                    </li>
                    </ul>
                    <span class="navbar-text">
                    Quick and Fresh right to your Doorstep
                    </span>
                </div>
                </nav>  
                </header>
            </div>*/
        )
    }
}

export default HeaderComponent
