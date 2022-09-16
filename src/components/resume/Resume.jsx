import React from "react";
import "./resume.css";
import Data from "./Data";

const Resume = () => {
    return (
        <section className="resume container section" id="resume">
            <h2 className="section__title">Experience</h2>

            <div className="resume__container grid">
                <div className="timeline grid"></div>
            </div>
        </section>
    )
}

export default Resume
