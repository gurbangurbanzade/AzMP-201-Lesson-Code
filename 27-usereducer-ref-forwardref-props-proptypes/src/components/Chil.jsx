import React from "react";
import PropTypes from "prop-types";

const Chil = ({ name, age }) => {
  console.log(name);
  console.log(age);

  return <div>Chil</div>;
};

Chil.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};

export default Chil;
