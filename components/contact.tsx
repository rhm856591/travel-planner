import React from 'react'
import "../styles/style.css"
import Image from 'next/image'
import CI from "../assets/images/contact-img.svg"
// import CI from "../assets/images/g-5.jpg"


const Contact = () => {
    return (
        <section className="contact" id="contact">

            <h1 className="heading">
                <span>c</span>
                <span>o</span>
                <span>n</span>
                <span>t</span>
                <span>a</span>
                <span>c</span>
                <span>t</span>
            </h1>

            <div className="row">

                <div className="image">
                    <Image src={CI} alt="" />
                </div>

                <form action="">
                    <div className="inputBox">
                        <input type="text" name="name" placeholder="name" />
                        <input type="email" name="email" placeholder="email" />
                    </div>
                    <div className="inputBox">
                        <input type="number" name="phone" placeholder="number" />
                        <input type="text" name="subject" placeholder="subject" />
                    </div>
                    <textarea placeholder="message" name="message" id="" cols={30} rows={10}></textarea>
                    <input type="submit" className="btn" value="send message" />
                </form>

            </div>

        </section>
    )
}

export default Contact