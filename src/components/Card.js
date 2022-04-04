import React from "react";
import star from "./Star.png"
export default function Card(props) {
    let badgeText
    if(props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "Online"
    }
    return(
        <div className="card">
            {badgeText && <div className="card--badje">{badgeText}</div>} 
            <div className="card--stats">
                <img src={props.item.coverImg} alt="img" className="card--img"></img>
                <span>{props.item.stats.rating}</span>
                <span className="gray">{`"("${props.item.stats.reviewCount}") • "`}</span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">{`"From $"${props.item.price}`}</span> / person</p>
        </div>
    )
}