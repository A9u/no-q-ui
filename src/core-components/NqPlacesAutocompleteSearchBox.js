import React from "react";
import { FormGroup, Label, Col } from "reactstrap";
import ReactGoogleAutocomplete from 'react-google-autocomplete';

const PlacesAutoCompleteSearchBox = (props) => {
    return (
        <FormGroup row>
            <Label for={props.id} md={props.labelMd || 2}>
                {props.label}
            </Label>
            <Col md={props.textMd || 6}>
            <ReactGoogleAutocomplete class = "w-100"
                apiKey = {process.env.REACT_APP_GOOGLE_API_KEY}
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