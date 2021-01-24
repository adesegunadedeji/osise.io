import React from 'react';
import './Opportunity.css';

const Opportunity = ()=> {

    const resources = [
        {
            id: 1,
            title: "Buy A Home",
            content: "With over 1million+ homes for sales available on the webiste, Osise can match you with a house you will wnat to call home"
        },
        {
            id: 2,
            title: "Rent a home",
            content: "With 35+ filters and custom keyword search, Osise can help you easily find a home or apartment for rent that you'll love"
        },
        {
            id: 3,
            title: "See Neighborhoods",
            content: "Trulia gives you a feel for everyday life in a neighborhood so you can decide if a home and neighborhood are right for you."
        }
    ].map((resources)=> {
        console.log(resources.title);
        return (
            <div key={resources.id} className="test">
                <strong>{resources.title}</strong>
                <p className="list-text">{resources.content}</p>
            </div>
        )

    })
    return (
        <div className="opportunity-container">
            <h2>Discover a place you'll love to live</h2>
    {resources}
        </div>
    )

}

export default Opportunity;