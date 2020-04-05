import React from 'react';
import Card from './Card';

const CardList = ({robots, searchItems}) => {

    robots.unshift({ 
        "id": 11,
        "name": "Costin Catescu",
        "username": "Costin",
        "email": "costin.catescu@gmail.com",
        },
        { 
            "id": 12,
            "name": "Cristian Ionescu",
            "username": "Cristi",
            "email": "Ionescucristianstefan@gmail.com",
        }
    );

    let filteredRobots = robots.map((item) => (<Card robot={ item } key={item.id} />));
    return (<
            div className="cardlist">
                {[ filteredRobots ]}
            </div>
            );
}

export default CardList;