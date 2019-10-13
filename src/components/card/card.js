import React from 'react';

import './card.css';

const Card = ({avatar, email, first_name, last_name, onDeleted, onEdit}) => {
    return (
        <div className="card mt-3" style={{width:48 + '%'}}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={avatar} className="card-img" alt={avatar}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{`${last_name} ${first_name}`}</h5>
                        <p className="card-text"><small className="text-muted font-weight-bold">{email}</small></p>
                    </div>
                </div>
                <div className="card-footer">
                    <button className="btn btn-sm btn-outline-primary btn-edit edit" data-toggle="modal" data-target="#exampleModal" onClick={onEdit}><svg className="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fillRule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"></path></svg></button>
                    <button className="btn btn-sm btn-outline-danger btn-delete remove" onClick = {onDeleted}><svg className="octicon octicon-x" viewBox="0 0 14 18" version="1.1" width="14" height="18" aria-hidden="true"><path fillRule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg></button>
                </div>
            </div>
        </div>
    )
}

export default Card;