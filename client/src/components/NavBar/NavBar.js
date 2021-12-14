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
        <a className="navbar-logo" href={"/feed"}><h1>PetLand<i className="fas fa-paw"></i></h1></a>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
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

