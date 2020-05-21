import React from "react";
import { Formik } from "formik";
import { Form, Card, Input, CardBody, CardHeader } from "reactstrap";
import * as yup from "yup";
import NqInputV from "core-components/NqInputV";
import NqSelect from "core-components/NqSelect";
import { NqButtonSubmit } from "core-components/NqButton";

const RegisterForm = ({ submitHandler }) => {
  let schema = yup.object().shape({
    name: yup.string().required(),
    address: yup.string().required(),
    city: yup.string().email(),
    state: yup.string(),
    pincode: yup.string().required(),
    duration: yup.string().required(),
    opening_time: yup.string(),
    closing_time: yup.string(),
    available_days: yup.array(),
  });

  return (
    <Card>
      <CardHeader className="bg-dark text-light font-weight-bolder">
        <h2> Register your store </h2>
      </CardHeader>
      <CardBody>
        <div className="container-fluid">
          <Formik
            initialValues={{}}
            validationSchema={schema}
            onSubmit={(values) => {
              submitHandler(values);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form onSubmit={handleSubmit}>
                <NqInputV
                  id="name"
                  type="text"
                  label="Name"
                  formText="Avengers General Store"
                  name="name"
                  handleChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  error={touched.name && errors.name}
                />

                <NqSelect
                  id="category"
                  label="Category"
                  name="category"
                  onBlur={handleBlur}
                  value={values.category}
                  options={["Med", "Liq", "Groc"]}
                  error={touched.category && errors.category}
                />
                <NqInputV
                  id="address"
                  type="text"
                  label="Address"
                  formText="Stark Towers"
                  name="address"
                  handleChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                  error={touched.address && errors.address}
                />

                <NqInputV
                  id="city"
                  type="text"
                  label="City"
                  formText="Pune"
                  name="city"
                  handleChange={handleChange}
                  onBlur={handleBlur}
                  value={values.city}
                  error={touched.city && errors.city}
                />

                <NqInputV
                  id="state"
                  type="text"
                  label="State"
                  formText="Maharashtra"
                  name="state"
                  handleChange={handleChange}
                  onBlur={handleBlur}
                  value={values.state}
                  error={touched.state && errors.state}
                />
                <NqInputV
                  id="pincode"
                  type="text"
                  label="pincode"
                  formText="416003"
                  name="pincode"
                  handleChange={handleChange}
                  onBlur={handleBlur}
                  value={values.pincode}
                  error={touched.pincode && errors.pincode}
                />
                <NqInputV
                  id="opening_time"
                  type="time"
                  label="Opening Time"
                  formText="09:00"
                  name="opening_time"
                  handleChange={handleChange}
                  onBlur={handleBlur}
                  value={values["opening_time"]}
                  error={touched["opening_time"] && errors["opening_time"]}
                />
                <NqInputV
                  id="closing_time"
                  type="time"
                  label="Closing Time"
                  formText="17:00"
                  name="closing_time"
                  handleChange={handleChange}
                  onBlur={handleBlur}
                  value={values["closing_time"]}
                  error={touched["closing_time"] && errors["closing_time"]}
                />
                <NqInputV
                  id="duration"
                  type="number"
                  label="Duration in mins"
                  formText="5 mins"
                  name="duration"
                  handleChange={handleChange}
                  onBlur={handleBlur}
                  value={values.duration}
                  error={touched.duration && errors.duration}
                />
                <NqInputV
                  id="available_days"
                  type="text"
                  label="Available Days"
                  formText="SD"
                  name="available_days"
                  handleChange={handleChange}
                  onBlur={handleBlur}
                  value={values["available_days"]}
                  error={touched["available_days"] && errors["available_days"]}
                />
                <NqButtonSubmit
                  id="submit"
                  type="submit"
                  label="Submit"
                  className="btn-primary"
                  disabled={isSubmitting}
                />
              </Form>
            )}
          </Formik>
        </div>
      </CardBody>
    </Card>
  );
};

export default RegisterForm;
