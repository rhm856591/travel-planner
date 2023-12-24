import React from 'react'
import "../styles/style.css"
import Image from "next/image"
import Pic1 from "../assets/images/pic1.png"
import Pic2 from "../assets/images/pic2.png"
import Pic3 from "../assets/images/pic3.png"
import Pic4 from "../assets/images/pic4.png"


const Review = () => {
    return (
        <section className="review" id="review">

            <h1 className="heading">

                <span>r</span>
                <span>e</span>
                <span>v</span>
                <span>i</span>
                <span>e</span>
                <span>w</span>
            </h1>

            <div className="swiper-container review-slider">

                <div className="box-container grid-container">

                    <div className="swiper-slide">
                        <div className="box">
                            <div className='review-image'>
                                <Image src={Pic1} alt="" />
                            </div>
                            <h3>john deo</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci quisquam sunt nesciunt
                                fugiat odit minus illum asperiores dolorum enim sint quod ipsam distinctio molestias
                                consectetur ducimus beatae, reprehenderit exercitationem!</p>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="box">
                            <div className='review-image'>
                                <Image src={Pic2} alt="" />
                            </div>
                            <h3>john deo</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci quisquam sunt nesciunt
                                fugiat odit minus illum asperiores dolorum enim sint quod ipsam distinctio molestias
                                consectetur ducimus beatae, reprehenderit exercitationem!</p>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="box">
                            <div className='review-image'>
                                <Image src={Pic3} alt="" />
                            </div>
                            <h3>john deo</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci quisquam sunt nesciunt
                                fugiat odit minus illum asperiores dolorum enim sint quod ipsam distinctio molestias
                                consectetur ducimus beatae, reprehenderit exercitationem!</p>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="box">
                            <div className='review-image'>
                                <Image src={Pic4} alt="" />
                            </div>
                            <h3>john deo</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci quisquam sunt nesciunt
                                fugiat odit minus illum asperiores dolorum enim sint quod ipsam distinctio molestias
                                consectetur ducimus beatae, reprehenderit exercitationem!</p>
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

            </div>

        </section>
    )
}

export default Review