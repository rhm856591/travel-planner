import React from 'react'
import "../styles/style.css"
import Image from "next/image"
import i1 from "../assets/images/1.jpg"


const Founder = () => {
    return (
        <section className="founder" id="founder">

            <h1 className="heading">
                <span>f</span>
                <span>o</span>
                <span>u</span>
                <span>n</span>
                <span>d</span>
                <span>e</span>
                <span>r</span>
            </h1>
            <div className='own'>
                <div className="founder-container">
                    <div className="founder">
                        Founder
                    </div>
                    <div className="in-founder-container">
                        <div className="founder-image">
                            <Image src={i1} alt="" />
                        </div>
                        <div className="founder-contain">
                            <div className="founder-message  in-margin">
                                &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.&quot;
                            </div>
                            <div className="founder-name in-margin">
                                Name - Abhishek Gupta
                            </div>
                            <div className="founder-details in-margin">
                                Email id - <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=aarushrao723@gmail.com" target="_blank">aarushrao723@gmail.com</a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="founder-container reverse">
                    <div className="founder">
                        Co-Founder
                    </div>
                    <div className="in-founder-container ">
                        <div className="founder-image">
                            <Image src={i1} alt="" />
                        </div>
                        <div className="founder-contain">
                            <div className="founder-message  in-margin">
                                &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.&quot;
                            </div>
                            <div className="founder-name in-margin">
                                Name - Abhishek Gupta
                            </div>
                            <div className="founder-details in-margin">
                                Email id - <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=aarushrao723@gmail.com" target="_blank">aarushrao723@gmail.com</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Founder