import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label, Col } from "reactstrap";
import Select from "react-select";

const NqTagSelect = (props) => {
  return (
    <FormGroup row>
      <Label for={props.id} md={props.labelMd || 2}>
        {props.label}
      </Label>
      <Col md={props.textMd || 6}>
        <Select
          value={props.value}
          onChange={props.handleChange}
          options={props.options}
          isMulti={props.multiple}
          name={props.name}
        />
      </Col>
    </FormGroup>
  );
};

NqTagSelect.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  formText: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
};

export default NqTagSelect;
