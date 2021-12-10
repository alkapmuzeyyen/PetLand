import React, {useEffect, Component} from 'react'
import {NavBarElements} from './NavbarElements'
import './NavBar.css'
import {Button} from 'reactstrap';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';
import { config } from '../../config';

class Navbar extends Component{
  state = {clicked: false}
  handleClick =() => {
    this.state({clicked: !this.state.clicked})
  };

  async logout(e) {
    console.log("out");
    Axios.post(`${config.SERVER_URI}/api/logout`,
    {
      logout: true,
    }).then((response) => {
      if (!response){
        console.log("no error");
      }
      else{
        console.log(response);
        sessionStorage.removeItem('token');
      }
        }).catch(error => {
        console.log(error);
        let err = error.response;
        if (err){
          console.log(err);
        }});

    };



  render(){
    return(
      <nav className="NavbarItems">
        <h1 className="navbar-logo">PetLand<i className="fas fa-cat"></i></h1>
        <div className="menu-icon" onClick={this.handleClick}>
<<<<<<< HEAD
          <i className={this.state.clicked ?  "fas fa-times" : "fas fa-bars"}></i>
=======
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
>>>>>>> 30cb7d499c1fb6c5a2c666a37c1bfc6268f2e98f
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {NavBarElements.map((item, index) => {
            return(
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
              )})
          }
        </ul>
        <Button onClick={this.logout}>Log Out</Button>
      </nav>
    )
  }
}



export default  withRouter(Navbar)

