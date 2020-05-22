import React from "react";
import { Formik } from "formik";
import { Form, Card, CardBody, CardHeader } from "reactstrap";
import * as yup from "yup";
import NqInputV from "core-components/NqInputV";
import { NqButtonSubmit } from "core-components/NqButton";

export const StoreOwnerSignUpForm = () => {
  let signUpSchema = yup.object().shape({
    mobile: yup.string()
    .required()
    .length(10, 'Invalid mobile number'),
    password: yup.string().required()
    .min(8),
    confirmPassword: yup.string().required()
    .test('passwords-match', 'Passwords must match', function(value) {
      return this.parent.password === value;
    }),
  });

  return (
    <Card>
      <CardHeader className="bg-dark text-light font-weight-bolder">
        <h2> Register your store </h2>
      </CardHeader>
      <CardBody>
        <div className="container-fluid">
          <Formik
            initialValues={{
              mobile: "",
              password: "",
              confirmPassword: "",
              
            }}
            validationSchema={signUpSchema}
            onSubmit={(values) => {
              alert("123");
              //submitHandler(values);
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
                  id="mobile"
                  type="number"
                  label="Mobile"
                  formText=""
                  name="mobile"
                  handleChange={handleChange}
                  onBlur={handleBlur}
                  value={values.mobile}
                  error={touched.mobile && errors.mobile}
                />
                <NqInputV
                  id="password"
                  type="password"
                  label="Password"
                  formText=""
                  name="password"
                  handleChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  error={touched.password && errors.password}
                />
                <NqInputV
                  id="confirmPassword"
                  type="password"
                  label="confirm Password"
                  formText=""
                  name="confirmPassword"
                  handleChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  error={touched.confirmPassword && errors.confirmPassword}
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
}