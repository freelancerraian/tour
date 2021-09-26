import React from 'react';
import './View.css';

const View = (props) => {
    const {img, name,} = props.costArea;

    return (
        <div className="main-view">
            <div className="view">
                <img className="img-thumbnail" src={img} alt="" />
                <h5>Class : {name}</h5>
            </div>
        </div>
    );
};

export default View;