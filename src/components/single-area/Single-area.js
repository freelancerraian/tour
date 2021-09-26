import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAllergies } from '@fortawesome/free-solid-svg-icons';
import { faInbox } from '@fortawesome/free-solid-svg-icons';
import './Single-area.css';

const Single = (props) => {
    const {img, name, passion, teacher, value, captain} = props.singleArea;
    const cartIcon = <FontAwesomeIcon icon={faAllergies} />
    const inbox = <FontAwesomeIcon icon={faInbox} />

    return (
        <div className="single-area col-4">
            <div className="single">
                <div className="single-img">
                    <img className="img-thumbnail" src={img} alt="" />
                </div>
                <div className="single-details">
                    <h3 className="name">Class : {name}</h3>
                    <p><span>Class Teacher : </span>{teacher}</p>
                    <p><span>Class Captain : </span>{captain}</p>
                    <p><span>Class Student : </span>{value}</p>
                    <p><span>Profession : </span>{passion}</p>
                    <button onClick={() => props.addToCost(props.singleArea)} className="invite-btn">{cartIcon} Invite All</button>
                    <div className="icon">
                        <i>{inbox}</i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Single;