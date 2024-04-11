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
  const dropdownOptions = [
    { key: "Select an option", value: "" },
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" },
  ];

  const radioOptions = [
    { key: "Option 1", value: "rOption1" },
    { key: "Option 2", value: "rOption2" },
    { key: "Option 3", value: "rOption3" },
  ];

  const checkboxOptions = [
    { key: "Option 1", value: "cOption1" },
    { key: "Option 2", value: "cOption2" },
    { key: "Option 3", value: "cOption3" },
  ];

  const initialValues = {
    email: "",
    description: "",
    selectOptions: "",
    radioOption: "",
    checkboxOptions: [],
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    selectOptions: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkboxOptions: Yup.array().required("Required"),
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
              maxLength={5} // other props => {...rest}
            />
            <FormikControl
              control="select"
              label="Select a topic"
              name="selectOptions"
              options={dropdownOptions}
            />
            <FormikControl
              control="radio"
              label="Radio Topic"
              name="radioOption"
              options={radioOptions}
            />
            <FormikControl
              control="checkbox"
              label="Checkbox Topics"
              name="checkboxOptions"
              options={checkboxOptions}
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikContainer;
