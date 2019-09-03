import React from 'react';
import './PartnerCard.scss';

import { Link } from 'react-router-dom';

export const PartnerCard = ({ name, opportunity_count, id }) => {
  return (
    <div className="partner-card">
      <div className="partner-card-header">
        <h5>{name}</h5>
        <div className="partner-card-buttons">
          <Link className="btn btn-warning" to={`/partners/put/${id}`}>
            Edit
          </Link>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
      <p>{opportunity_count} opportunities open</p>
    </div>
  );
}

export default PartnerCard;