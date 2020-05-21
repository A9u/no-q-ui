import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label, Input, FormText, FormFeedback } from "reactstrap";

const NqInputV = (props) => {
  return (
    <FormGroup>
      <Label for={props.id}> {props.label} </Label>
      <Input type={props.type} name={props.name} id={props.id} placeholder={props.placeholder} onchange={props.handleChange} value={props.value} />
      <FormFeedback>You will not be able to see this</FormFeedback>
      <FormText>{props.formText}</FormText>
    </FormGroup>
  )
}

NqInputV.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  formText: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
  value: PropTypes.value
}

export default NqInputV;
