import React from 'react'
import "../styles/style.css"


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

                <div className="box-container">

                    <div className="swiper-slide">
                        <div className="box">
                            <img src="images/pic1.png" alt="" />
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
                            <img src="images/pic2.png" alt="" />
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
                            <img src="images/pic3.png" alt="" />
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
                            <img src="images/pic4.png" alt="" />
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