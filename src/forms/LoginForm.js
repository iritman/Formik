import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./../components/FormikControl";
import { Box, Grid, Button } from "@mui/material";

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
    <Box mt={4} direction="column" alignContent="center">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <Grid
                direction="column"
                container
                spacing={2}
                justifyContent="center"
              >
                <Grid item>
                  <FormikControl
                    control="muiinput"
                    type="email"
                    label="Email"
                    name="email"
                  />
                </Grid>
                <Grid item>
                  <FormikControl
                    control="muiinput"
                    type="password"
                    label="Password"
                    name="password"
                  />
                </Grid>
                <Grid item>
                  <Button
                    type="submit"
                    disabled={!formik.isValid}
                    mt={4}
                    variant="contained"
                    color="primary"
                  >
                    Submit
                  </Button>{" "}
                  {/* <button type="submit" disabled={!formik.isValid}>
                    Submit
                  </button> */}
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default LoginForm;
