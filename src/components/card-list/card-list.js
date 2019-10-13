import React from 'react';
import Card from '../card';

import './card-list.css';

const CardList = ({usersList, onDeleted, onEdit}) => {
const elements = usersList.map((item) => {
    const { id, ...itemProps } = item;
    return (
        <Card key={id} {...itemProps} onDeleted = {() => {onDeleted(id)}} onEdit = {() => onEdit(id)}/>
    );
})

return (
        <div className="card-list d-flex flex-wrap justify-content-between align-items-start align-content-start">
            {elements}
        </div>
    );
};


export default CardList;