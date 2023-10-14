import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Button, FormGroup, Label, Input, Col } from "reactstrap";


const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    // You can handle the form submission here, e.g., send data to a server
    console.log("Form submitted:", values);
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
                id="name"
                as={Input}
                placeholder="Your Full Name"
              />
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
                id="email"
                as={Input}
                placeholder="Your Email"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="phoneNum" md="2">
              Phone
            </Label>
            <Col md="10">
              <Field
                type="phone"
                name="phone"
                id="phone"
                as={Input}
                placeholder="Your Phone Number"
              />
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
                id="description"
                as={Input}
                placeholder="Describe placement, size, style  "
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="references" md="2">
              References
            </Label>
            <Col md="5">
            <input type="file" name="photo" accept="image/*" />
            </Col>
            <Col md="5">
            <input type="file" name="photo" accept="image/*" />
            </Col>
            
          </FormGroup>
          <FormGroup row>
            <Label check >
              Is this a cover up?
              <div>
                <Label check>
                  <Field
                    type="radio"
                    name="coverUp"
                    value="yes"
                    className="form-check-input"
                  />
                  {' Yes  '}
                </Label>
                <Label check>
                  <Field
                    type="radio"
                    name="coverUp"
                    value="no"
                    className="form-check-input"
                  />
                  {' No '} 
                </Label>
              </div>
            </Label>
          </FormGroup>
          <Button type="submit" style={{ backgroundColor: "#C70039", color: "#FFF5E0" }}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
