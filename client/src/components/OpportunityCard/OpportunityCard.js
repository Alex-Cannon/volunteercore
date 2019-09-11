import React from 'react';
import { Link } from 'react-router-dom';

export const OpportunityCard = ({ opportunity }) => {
  const { name, description, id, location_street, location_city, location_zip, tags } = opportunity;

  return (
    <div className="partner-card">
      <div className="partner-card-header">
        <div>
          <h5>{name}</h5>
          <p>
            {location_street ? location_street : ''}
            {location_city ? `, ${location_city}` : ''}
            {location_zip ? `, ${location_zip}` : ''}
          </p>
        </div>
        <div className="partner-card-buttons">
          <Link className="btn btn-warning" to={`/opportunities/put/${id}`}>
            Edit
          </Link>
          <button className="btn btn-danger" onClick={() => {}}>Delete</button>
        </div>
      </div>
      <br/>
      <p>
        {description ? description.substring(0, 101) + '...' : ''}
      </p>
      <p>{JSON.stringify(tags)}</p>
    </div>
  );
}