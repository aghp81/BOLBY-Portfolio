import React from "react";
import "./services.css";
import Image1 from "../../assets/services-1.svg"
import Image2 from "../../assets/services-2.svg"
import Image3 from "../../assets/services-3.svg"


const data = [
    {
        id: 1,
        image: Image1,
        title: "UI/UX design",
        description: "Lorem ipsum dolor sit amet consectetuter adipicing elit.",
    },
    {
        id: 2,
        image: Image2,
        title: "Web Development",
        description: "Lorem ipsum dolor sit amet consectetuter adipicing elit.",
    },
    {
        id: 3,
        image: Image3,
        title: "Photografy",
        description: "Lorem ipsum dolor sit amet consectetuter adipicing elit.",
    },
];


const Services = () => {
    return (
        <div>Services</div>
    )
}

export default Services
