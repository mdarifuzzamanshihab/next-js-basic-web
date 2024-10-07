import React from 'react';

const featureDetails = ({params}) => {
    console.log(params)
    if(params.feature.length==2) return <div>params length : {params.feature.length}</div>
    if(params.feature.length==3) return <div>params length : {params.feature.length}</div>
    if(params.feature.length==4) return <div>params length : {params.feature.length}</div>
    return (
        <div>
            Feature Details
        </div>
    );
};

export default featureDetails;