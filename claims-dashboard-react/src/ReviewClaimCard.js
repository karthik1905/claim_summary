import React from 'react';
import {useSelector} from 'react-redux';

const ReviewClaimCard = () => {
    const claims = useSelector((state) => state)
    console.log("reiew claims",claims)
    return (
        <div>
            <p> Review claim card </p>
        </div>
    );
};

export default ReviewClaimCard;