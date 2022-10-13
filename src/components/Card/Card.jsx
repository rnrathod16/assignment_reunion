import React from 'react'
import House from "./home.jpg"
import "./Card.css";
const Card = ({ val }) => {

    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <>
            <div className="card m-3 shadow-sm rounded-lg" style={{ width: "18rem" }}>
                <img src={House} className="card-img-top" alt="house" />
                <div className="card-body">
                    <h5 className="card-title shaColor"> <span className='font-weight-bold fontColor'>${val.price}</span> /Month</h5>
                    <h5 className="card-title font-weight-bold">{capitalize(val.name)}</h5>
                    <h6 className="card-title shaColor">{capitalize(val.type)}</h6>
                    <h6 className="card-title shaColor">{capitalize(val.location)}</h6>
                    <h6 className="card-title shaColor">{capitalize(val.address)}</h6>
                </div>

            </div>
        </>
    )
}

export default Card