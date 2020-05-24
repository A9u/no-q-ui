import React from "react";
import { FormGroup, Label, Col } from "reactstrap";
import Autocomplete from 'react-google-autocomplete';

const PlacesAutoCompleteSearchBox = (props) => {
    return (
        <FormGroup row>
            <Label for={props.id} md={props.labelMd || 2}>
                {props.label}
            </Label>
            <Col md={props.textMd || 6}>
            <Autocomplete 
                style={{width: '100%'}}
                onPlaceSelected={(place) => {
                    props.onPlaceSelected(props.id, place.formatted_address, false)
                }}
                types={['establishment']}
                componentRestrictions={{country: "in"}}
            />
            </Col>
        </FormGroup>
    )
}

export default PlacesAutoCompleteSearchBox