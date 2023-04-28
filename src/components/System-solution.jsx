import React from "react";
import './System-solution.css';




function Card({title, ImageUrl}) {
    return (
        <div className="card-container">
        <div className="image-container">
            <img src={ImageUrl} alt=''></img>
        </div>
        <div className="card-content">
        <div className="card-title">
            <h5>{title}</h5>
        </div>

        </div>
        
        <div className="btn">
            <button>
                <a>
                    Унших
                </a>
            </button>
        </div>
    </div>
         
    
     );
}

export default Card;