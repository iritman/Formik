import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

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
  const initialValues = {};
  const validationSchema = Yup.object({});
  const onSubmit = (values) => console.log("Form data", values);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          <Form>
            <button type="submit">Submit</button>
          </Form>;
        }}
      </Formik>
    </div>
  );
};

export default FormikContainer;
