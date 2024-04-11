import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

const Radio = (props) => {
  const { label, name, options, ...rest } = props;

  return (
    <div className="form-control">
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <div
                key={option.key}
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </div>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Radio;
