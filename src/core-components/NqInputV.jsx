import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label, Input, FormText, Col } from "reactstrap";

const NqInputV = (props) => {
  return (
    <FormGroup row>
      <Label for={props.id} md={props.labelMd || 2}>
        {props.label}
      </Label>
      <Col md={props.textMd || 6}>
        <Input
          type={props.type}
          name={props.name}
          id={props.id}
          placeholder={props.placeholder}
          onChange={props.handleChange}
          value={props.value}
        />
        <FormText>{props.formText}</FormText>
      </Col>
    </FormGroup>
  );
};

NqInputV.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  formText: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
};

export default NqInputV;
