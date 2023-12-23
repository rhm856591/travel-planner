import React from 'react'
import  Image from "next/image";
import "../styles/style.css"
import G1 from "../assets/images/g-1.jpg"
import G2 from "../assets/images/g-2.jpg"
import G3 from "../assets/images/g-3.jpg"
import G4 from "../assets/images/g-4.jpg"
import G5 from "../assets/images/g-5.jpg"
import G6 from "../assets/images/g-6.jpg"
import G7 from "../assets/images/g-7.jpg"
import G8 from "../assets/images/g-8.jpg"
import G9 from "../assets/images/g-9.jpg"



const Gallary = () => {
    return (
        <section className="gallery" id="gallery">

            <h1 className="heading">
                <span>g</span>
                <span>a</span>
                <span>l</span>
                <span>l</span>
                <span>e</span>
                <span>r</span>
                <span>y</span>
            </h1>

            <div className="box-container">

                <div className="box">
                    <Image src={G1} alt="" /> 
                        <div className="content">
                            <h3>amazing places</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                            <a href="#" className="btn">see more</a>
                        </div>
                </div>
                <div className="box">
                    <Image src={G2} alt="" />
                        <div className="content">
                            <h3>amazing places</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                            <a href="#" className="btn">see more</a>
                        </div>
                </div>
                <div className="box">
                    <Image src={G3} alt="" />
                        <div className="content">
                            <h3>amazing places</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                            <a href="#" className="btn">see more</a>
                        </div>
                </div>
                <div className="box">
                    <Image src={G4} alt="" />
                        <div className="content">
                            <h3>amazing places</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                            <a href="#" className="btn">see more</a>
                        </div>
                </div>
                <div className="box">
                    <Image src={G5} alt="" />
                        <div className="content">
                            <h3>amazing places</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                            <a href="#" className="btn">see more</a>
                        </div>
                </div>
                <div className="box">
                    <Image src={G6} alt="" />
                        <div className="content">
                            <h3>amazing places</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                            <a href="#" className="btn">see more</a>
                        </div>
                </div>
                <div className="box">
                    <Image src={G7} alt="" />
                        <div className="content">
                            <h3>amazing places</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                            <a href="#" className="btn">see more</a>
                        </div>
                </div>
                <div className="box">
                    <Image src={G8} alt="" />
                        <div className="content">
                            <h3>amazing places</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                            <a href="#" className="btn">see more</a>
                        </div>
                </div>
                <div className="box">
                    <Image src={G9} alt="" />
                        <div className="content">
                            <h3>amazing places</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                            <a href="#" className="btn">see more</a>
                        </div>
                </div>

            </div>

        </section>
    )
}

export default Gallary