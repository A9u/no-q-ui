import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

const SaButton = (props) => {
  return (
    <Button color={props.color} type={props.type} id={props.id} {...props}>
      {props.label}
    </Button>
  );
};

const NqButtonSubmit = (props) => <SaButton color="success" {...props} />;

SaButton.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  color: PropTypes.string,
  handleClick: PropTypes.func,
};

export { NqButtonSubmit };
export default SaButton;
