import React from 'react'
import "../styles/style.css"

const Header = () => {
    return (
        <header>

            <div className=" hidden bg-white border-2 border-white rounded-lg text-white text-3xl px-12 py-2 cursor-pointer"></div>

            <a href="#" className="logo"><span>e</span>xplore <span>w</span>ith <span> U</span>s</a>

            <nav className="navbar">
                <a href="#home">home</a>
                <a href="#packages">packages</a>
                <a href="#services">services</a>
                <a href="#gallery">gallery</a>
                <a href="#review">review</a>
                <a href="#founder">founder</a>
                <a href="#contact">contact</a>
            </nav>

            <div className="icons">
                <a href="https://wa.me/+918565911175" target="_blank"><i className="fa fa-whatsapp"></i></a>
                <a href="tel:+918565911175"><i className="fa fa-phone"></i></a>
                <i className="fa fa-cc-visa"></i>
            </div>

            <form action="" className="search-bar-container">
                <input type="search" id="search-bar" placeholder="search here..." />
                    <label htmlFor="search-bar" className="fas fa-search"></label>
            </form>

        </header>
    )
}

export default Header