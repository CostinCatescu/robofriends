import React from 'react';

const Card = ({robot}) => {

    return (
        <div className="card">
            <img alt="Robot" src={`https://robohash.org/${robot.username}?200x200`} />
            <h2>{robot.name}</h2>
            <h3>{robot.email}</h3>
        </div>
        )
    }
export default Card;