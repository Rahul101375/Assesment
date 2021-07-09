import React, { Component } from "react";
import './Header.css'
import Profile from '../Assets/profile.png'
import {IoIosNotificationsOutline} from 'react-icons/io'
// import Containt from "../Componet/Containt";
import { Fragment } from "react";

class Header extends Component{
    render(){
        return(
            <Fragment>
                <div className="header">
                <div style={{marginTop:"20px"}}>
                <p ><span style={{color:"grey"}}>Welcome back !</span> <b> Martin</b></p>
                </div>
                <div className="Header-0">
                    <ul className="Header-1">
                        <li>
                            <img src={Profile} alt="IMG" className="image"/>
                        </li>
                        <li style={{color:"white",marginTop:"-7px"}}>Logout</li>
                        <li style={{color:"red",fontSize:"25px",fontWeight:"bold"}}><IoIosNotificationsOutline/></li>
                        <li style={{marginTop:"-20px",fontWeight:"bold",fontSize:"30px"}}>...</li>
                    </ul>
                </div>
            </div>
            </Fragment>
        )
    }
}
export default Header