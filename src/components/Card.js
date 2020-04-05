import React from 'react';
import Tilt from 'react-tilt'

const Card = ({robot}) => {

    return (
            <Tilt className="Tilt" options={{ max : 35 }} >
                <div className="Tilt-inner card"> 
                    <img alt="Robot" src={`https://robohash.org/${robot.username}?200x200`} />
                    <h2>{robot.name}</h2>
                    <h3>{robot.email}</h3>
                </div>
            </Tilt>
        )
    }
export default Card;