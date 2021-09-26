import React from 'react';
import View from '../view/View';
import './cost.css';

const Cost = (props) => {
    
    const {cost} =props;
    let total =0;
    for (const singleArea of cost ) {
        let mainTotal =  parseInt(singleArea.value);
        total = total + mainTotal;
    }
    
    return (
        <div className="total-view row">
            <div className="col-4 total">
                <h2>Total Class Invited: {props.cost.length}</h2>
                <h3>Total student Invited: {total}</h3>
            </div>
            <div className="col-8">
                <h1>Invited</h1>
                {
                    props.cost.map(costArea => <View
                    costArea={costArea}
                    >
                    </View>)
                }
            </div>
        </div>
    );
};

export default Cost;