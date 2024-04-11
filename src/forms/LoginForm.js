import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./../components/FormikControl";
import { Button } from "@chakra-ui/react";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("Format data", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="chakrainput"
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl
              control="chakrainput"
              type="password"
              label="Password"
              name="password"
            />
            <Button
              type="submit"
              disabled={!formik.isValid}
              mt={4}
              colorScheme="blue"
            >
              Submit
            </Button>
            {/* <button type="submit" disabled={!formik.isValid}>
              Submit
            </button> */}
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
