import React from "react";
import PropTypes from "prop-types";

const Jumbotron = ({ text }) => (
  <div className="jumbotron mb-0 mt-5">
    <h1 className="display-1 text-center">{text}</h1>
  </div>
);

Jumbotron.propTypes = {
  text: PropTypes.string.isRequired
};

Jumbotron.defaultProps = {
  text: ""
};

export default Jumbotron;
