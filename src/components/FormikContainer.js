import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

/*

Reusable Formik Controls
------------------------
🔸FormikContainer component
🔸FormikControl component
🔸Input
🔸TextArea
🔸Select
🔸RadioButtons
🔸Checkboxes
🔸DatePicker
🔸Registration, Login and Course Enrollment
🔸UI Component library

*/

const FormikContainer = () => {
  const initialValues = {
    email: "",
    description: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
  });

  const onSubmit = (values) => console.log("Form data", values);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl
              control="textarea"
              label="Description"
              name="description"
              maxlength={5} // other props => {...rest}
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikContainer;
