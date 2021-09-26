import React, { useEffect, useState } from 'react';
import Cost from '../cost/Cost';
import Single from '../single-area/Single-area';
import './main-area.css';

const Main = () => {
    const [single, setSingle] = useState([]);
    const [cost, setCost] = useState([]);
    
    useEffect(() => {
        fetch('./data.JSON')
        .then(res => res.json())
        .then(data => setSingle(data))
    }, [])

    const addToCost =(singleArea) =>{
        const newCost = [...cost, singleArea];
        setCost(newCost);
    }

    return (
        <div className="container">
            <div className="row area-sec">
                <Cost cost={cost}>
                </Cost>
            </div>
            <div className="row area-sec">
                {
                    single.map(singleArea=><Single
                        key={singleArea.key}
                        singleArea={singleArea}
                        addToCost={addToCost}
                        >
                    </Single>)
                }
            </div>
        </div>
    );
};

export default Main;