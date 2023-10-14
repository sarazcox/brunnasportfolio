import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Button, FormGroup, Label, Input, Col } from "reactstrap";
import { validateContactForm } from "../utils/validateContactForm";

const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    const referencesInput = document.querySelectorAll('input[type="file"]');
    const referenceFiles = [];

    // Iterate through the file input elements and collect the file names
    referencesInput.forEach((input) => {
      const files = input.files;
      for (let i = 0; i < files.length; i++) {
        referenceFiles.push(files[i].name);
      }
    });

    console.log("Form submitted:", values);
    console.log("in JSON format:", JSON.stringify(values));
    console.log("References Images:", referenceFiles);
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phoneNum: "",
        description: "",
        coverUp: "",
        references: "",
      }}
      onSubmit={handleSubmit}
      validate={validateContactForm}
    >
      {() => (
        <Form>
          <FormGroup row>
            <Label htmlFor="name" md="2">
              Name
            </Label>
            <Col md="10">
              <Field
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Full Name"
              />
              <ErrorMessage name="name">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="email" md="2">
              Email
            </Label>
            <Col md="10">
              <Field
                type="email"
                name="email"
                className="form-control"
                placeholder="Your Email"
              />
              <ErrorMessage name="email">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="phoneNum" md="2">
              Phone
            </Label>
            <Col md="10">
              <Field
                type="phone"
                name="phoneNum"
                className="form-control"
                placeholder="Your Phone Number"
              />
              <ErrorMessage name="phoneNum">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="description" md="2">
              Description
            </Label>
            <Col md="10">
              <Field
                type="textarea"
                name="description"
                as={Input}
                rows="5"
                placeholder="Describe placement, size, style and more..."
              />
              <ErrorMessage name="description">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="references" md="2">
              References
            </Label>
            <Col md="5">
              <input type="file" name="references" accept="image/*" />
            </Col>
            <Col md="5">
              <input type="file" name="references" accept="image/*" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label check>
              Is this a cover up?
              <div>
                <Label check>
                  <Field
                    type="radio"
                    name="coverUp"
                    value="yes"
                    className="form-check-input"
                  />
                  {" Yes  "}
                </Label>
                <Label check>
                  <Field
                    type="radio"
                    name="coverUp"
                    value="no"
                    className="form-check-input"
                  />
                  {" No "}
                </Label>
              </div>
            </Label>
          </FormGroup>
          <Button
            type="submit"
            style={{ backgroundColor: "#C70039", color: "#FFF5E0" }}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
