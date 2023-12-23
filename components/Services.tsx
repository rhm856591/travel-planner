import React from 'react'
import "../styles/style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHotel,faPlane, faUtensils, faBullhorn, faGlobeAsia, faHiking } from '@fortawesome/free-solid-svg-icons';

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
                    <FontAwesomeIcon className='font1' icon={faHotel}/>
                    <h3>affordable hotels</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate
                        exercitationem ut minima itaque iusto ipsum corrupti!</p>
                </div>
                <div className="box">
                    {/* <i className="fas fa-utensils"></i> */}
                    <FontAwesomeIcon className='font2' icon={faUtensils} />
                    <h3>food and drinks</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate
                        exercitationem ut minima itaque iusto ipsum corrupti!</p>
                </div>
                <div className="box">
                    {/* <i className="fas fa-bullhorn"></i> */}
                    <FontAwesomeIcon className='font3' icon={faBullhorn} />
                    <h3>safty guide</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate
                        exercitationem ut minima itaque iusto ipsum corrupti!</p>
                </div>
                <div className="box">
                    {/* <i className="fas fa-globe-asia"></i> */}
                    <FontAwesomeIcon className='font4' icon={faGlobeAsia} />
                    <h3>around the world</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate
                        exercitationem ut minima itaque iusto ipsum corrupti!</p>
                </div>
                <div className="box">
                    <FontAwesomeIcon className='font5' icon={faPlane} />
                    <h3>fastest travel</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate
                        exercitationem ut minima itaque iusto ipsum corrupti!</p>
                </div>
                <div className="box">
                    {/* <i className="fas fa-hiking"></i> */}
                    <FontAwesomeIcon className='font6' icon={faHiking} />
                    <h3>adventures</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate
                        exercitationem ut minima itaque iusto ipsum corrupti!</p>
                </div>

            </div>

        </section>
    )
}

export default Services