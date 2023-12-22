import React from 'react'
import "../styles/style.css"
import Image from 'next/image'
import P1Image from '../assets/images/p-1.jpg'
import P2Image from '../assets/images/p-2.jpg'
import P3Image from '../assets/images/p-3.jpg'
import P4Image from '../assets/images/p-4.jpg'
import P5Image from '../assets/images/p-5.jpg'
import P6Image from '../assets/images/p-6.jpg'


const Packages = () => {
    return (
        <section className="packages" id="packages">

            <h1 className="heading">
                <span>p</span>
                <span>a</span>
                <span>c</span>
                <span>k</span>
                <span>a</span>
                <span>g</span>
                <span>e</span>
                <span>s</span>
            </h1>

            <div className="box-container">

                <div className="box">
                    <Image src={P1Image} alt="" />
                    <div className="content">
                        <h3> <i className="fas fa-map-marker-alt"></i> mumbai </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <Image src={P2Image} alt="" />
                    <div className="content">
                        <h3> <i className="fas fa-map-marker-alt"></i> hawaii </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <Image src={P3Image} alt="" />
                    <div className="content">
                        <h3> <i className="fas fa-map-marker-alt"></i> sydney </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <Image src={P4Image} alt="" />
                    <div className="content">
                        <h3> <i className="fas fa-map-marker-alt"></i> paris </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <Image src={P5Image} alt="" />
                    <div className="content">
                        <h3> <i className="fas fa-map-marker-alt"></i> tokyo </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <Image src={P6Image} alt="" />
                    <div className="content">
                        <h3> <i className="fas fa-map-marker-alt"></i> eypt </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Packages