import React from 'react';
import Card from './Card';

const CardList = ({robots, searchItems}) => {

    let filteredRobots = robots.map((item) => (<Card robot={ item } key={item.id} />));
    return (<
            div className="cardlist">
                {[ filteredRobots ]}
            </div>
            );
}

export default CardList;