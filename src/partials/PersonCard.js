import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PersonCard = ({ id, name }) => (
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <Link to={`/person/${id}`}>{name}</Link>
      </div>
    </div>
  </div>
);

PersonCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default PersonCard;
