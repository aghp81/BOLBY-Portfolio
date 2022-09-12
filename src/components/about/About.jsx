import React from "react";
import "./about.css";
import Image from "../../assets/avatar-2.svg";

const About = () => {
    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img src={Image} width="100" height="100" alt="" className="about__img" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">I'm Abol Ghana, web 
                            developer from Tehran, Iran. 
                        </p>
                        <a href="" className="btn">DownLoad CV</a>
                    </div>

                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number development">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name"></h3>
                                <span className="skills__numbe"></span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
