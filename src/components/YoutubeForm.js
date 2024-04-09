import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// Visit: github.com/jquense/yup

const YoutubeForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    channel: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "test", // initial value for the 'name' field
      email: "",
      channel: "",
    },
    onSubmit: (values) => {
      console.log("Form data", values);
    },
    validationSchema,
    // validate: (values) => {
    //   let errors = {};

    //   if (!values.name) {
    //     errors.name = "Required";
    //   }

    //   if (!values.email) {
    //     errors.email = "Required";
    //   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    //     errors.email = "Invalid email format";
    //   }

    //   if (!values.channel) {
    //     errors.channel = "Required";
    //   }

    //   return errors;
    // },
  });

  // The name of the formik fields should be the same as
  // name properties in the form fields

  //   console.log("Form values", formik.values);
  //   console.log("Form errors", formik.errors);
  //   console.log("Visited fields", formik.touched);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {/* 
          در این حالت اگر روی تکست باکس کلیک کنیم و متن آن را پاک کنیم
          هیچ خطایی نمی دهد تا زمانی که در بیرون آن کلیک کنیم
          */}
          {formik.touched.name && formik.errors.name && (
            <div className="error">{formik.errors.name}</div>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error">{formik.errors.email}</div>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.channel}
          />
          {formik.touched.channel && formik.errors.channel && (
            <div className="error">{formik.errors.channel}</div>
          )}
        </div>

        <pre>{JSON.stringify(formik.values, null, 2)}</pre>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm;
