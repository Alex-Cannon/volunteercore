import React from 'react';
import './PartnerCard.scss';

export const PartnerCard = ({ name, opportunity_count }) => {
  return (
    <div className="partner-card">
      <div className="partner-card-header">
        <h5>{name}</h5>
        <div>
          <button className="btn-warning">Edit</button>
          <button className="btn-danger">Delete</button>
        </div>
      </div>
      <p>{opportunity_count} opportunities open</p>
    </div>
  );
}

export default PartnerCard;