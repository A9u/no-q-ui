import React, { useState } from "react";
import { FormGroup, Label, Col, Input } from "reactstrap";

const NqRadio = (props) => {
  const [checked, setState] = useState(props.checked);
  const onChange = (event) => {
    setState(!checked);
    console.log("inside radio", event);
    props.handleChange(event);
  };

  return (
    <FormGroup row>
      <Col md={props.textMd || 6}>
        <FormGroup check>
          <Label check>
            <Input
              type="radio"
              id={props.id}
              name={props.name}
              placeholder={props.placeholder}
              onChange={onChange}
              checked={checked}
              {...props}
            />
            {props.text}
          </Label>
        </FormGroup>
      </Col>
    </FormGroup>
  );
};
export default NqRadio;
