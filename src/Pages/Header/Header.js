import React, { Component } from 'react'
import './Header.css'
import { NavLink } from "react-router-dom"
export default class Header extends Component {
    render() {
        return (
            <div className="head_center">
            
                Home
                About
                Resume
                Works
                Testimonials
                Contact
                
            </div>
        )
    }
}
