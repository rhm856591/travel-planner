import React from 'react'
import "../styles/style.css"
import { FaHotel } from "react-icons/fa6";


const Services = () => {
    return (
        <section className="services" id="services">

            <h1 className="heading">
                <span>s</span>
                <span>e</span>
                <span>r</span>
                <span>v</span>
                <span>i</span>
                <span>c</span>
                <span>e</span>
                <span>s</span>
            </h1>

            <div className="box-container">

                <div className="box">
                    <FaHotel />

                    <h3>affordable hotels</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate
                        exercitationem ut minima itaque iusto ipsum corrupti!</p>
                </div>
                <div className="box">
                    <i className="fas fa-utensils"></i>
                    <h3>food and drinks</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate
                        exercitationem ut minima itaque iusto ipsum corrupti!</p>
                </div>
                <div className="box">
                    <i className="fas fa-bullhorn"></i>
                    <h3>safty guide</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate
                        exercitationem ut minima itaque iusto ipsum corrupti!</p>
                </div>
                <div className="box">
                    <i className="fas fa-globe-asia"></i>
                    <h3>around the world</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate
                        exercitationem ut minima itaque iusto ipsum corrupti!</p>
                </div>
                <div className="box">
                    <i className="fas fa-plane"></i>
                    <h3>fastest travel</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate
                        exercitationem ut minima itaque iusto ipsum corrupti!</p>
                </div>
                <div className="box">
                    <i className="fas fa-hiking"></i>
                    <h3>adventures</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate
                        exercitationem ut minima itaque iusto ipsum corrupti!</p>
                </div>

            </div>

        </section>
    )
}

export default Services