import React from "react";
import { Field } from "formik";
import { TextField } from "@mui/material";

const MuiInput = (props) => {
  const { label, name, ...rest } = props;

  return (
    <Field name={name}>
      {({ field, form }) => {
        return (
          <TextField
            error={form.errors[name] && form.touched[name]}
            helperText={form.errors[name]}
            id={name}
            label={label}
            InputProps={{
              ...rest,
            }}
            {...field}
          />
        );
      }}
    </Field>
  );
};

export default MuiInput;
