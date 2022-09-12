import React from "react";

const Shapes = () => {
    return (
        <div className="shapes">
            <svg class="shape s1" width="100" height="100">
                <circle cx="5" cy="10" r="10" stroke="#a29bfe" stroke-width="2" fill="rgba(255, 99, 71, 0)" />
            </svg>

            <svg class="shape s2" width="50" height="30">
                <circle cx="50" cy="5" r="20" stroke="#ff7675" stroke-width="2" fill="rgba(255, 99, 71, 0)" />
            </svg>
            
           
            <svg class="shape s3" height="40" width="400">
             <path d="M50 0 L25 5 L35 40 z" stroke="#f39c12" stroke-width="2" fill="rgba(255, 99, 71, 0)" />
            </svg>

            <svg class="shape s4" height="40" width="400">
             <path d="M50 0 L35 50 L75 50 z"  stroke-width="2" fill="#feca57" />
            </svg>

            <svg class="shape s5" height="60" width="200">
                <text x="0" y="15" fill="#8e44ad" transform="rotate(30 20,40)">V</text>
            </svg>

            <svg class="shape s6" height="60" width="200">
                <text x="0" y="15" fill="#8e44ad" transform="rotate(30 20,40)">C</text>
            </svg>

            <svg class="shape s7" height="60" width="200">
                <text x="0" y="15" fill="#dff9fb" transform="rotate(30 20,40)">G</text>
            </svg>

            <svg class="shape s8" height="60" width="200">
                <text x="0" y="15" fill="#ff9ff3" transform="rotate(30 20,40)">A</text>
            </svg>

            <svg class="shape s9" width="100" height="100">
                <circle cx="10" cy="10" r="8" stroke="#ff6b6b" stroke-width="2" fill="rgba(255, 99, 71, 0)" />
            </svg>

            <svg class="shape s10" width="100" height="100">
                <circle cx="5" cy="10" r="10" stroke="#feca57" stroke-width="2" fill="rgba(255, 99, 71, 0)" />
            </svg>

            <svg class="shape s11" height="60" width="200">
                <text x="0" y="15" fill="#f9ca24" transform="rotate(30 20,40)">w</text>
            </svg>
            

        </div>
    )
}

export default Shapes
