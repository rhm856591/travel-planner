import React from 'react'
import "../styles/style.css"
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

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
                <a href="https://wa.me/+918565911175" target="_blank"><FontAwesomeIcon className='i' icon={faWhatsapp} /></a>
                <a href="tel:+918565911175"><FontAwesomeIcon className='i' icon={faPhone} /></a>
            </div>
            <div>
                <Link href="/auth/signin" className='LoginButton'>Login / Sign Up</Link>
            </div>

            <form action="" className="search-bar-container">
                <input type="search" id="search-bar" placeholder="search here..." />
                <label htmlFor="search-bar" className="fas fa-search"></label>
            </form>

        </header>
    )
}

export default Header