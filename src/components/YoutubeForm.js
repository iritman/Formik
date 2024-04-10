import React from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

/*
1>
---
Disabling the submit button
---------------------------
Two scenarios:
    1- Validity of the form state
    2- Form submission in progress

In this code we focused on the first scenario
*/

/*
2>
---
در لاگ فرمیک، ویژگی فقط خواندنی با نام
isValid
وجود دارد. اگر ویژگی 
errors
برابر با 
{}
باشد مقدار آن
true
خواهد بود

*/

const YoutubeForm = () => {
  const initialValues = {
    name: "test", // initial value for the 'name' field
    email: "",
    channel: "",
    comments: "",
    address: "",
    social: {
      facebook: "",
      tweeter: "",
    },
    phoneNumbers: ["", ""],
    phNumbers: [""],
  };

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    channel: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    comments: Yup.string().required("Required"),
  });

  const validateComments = (value) => {
    let error;

    if (!value) {
      error = "Required";
    }

    return error;
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      //   validateOnMount={true}
    >
      {(formik) => {
        console.log("Formik props", formik);

        return (
          <Form>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component={TextError} />
            </div>

            <div className="form-control">
              <label htmlFor="email">E-mail</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email">
                {(errorMsg) => <div className="error">{errorMsg}</div>}
              </ErrorMessage>
            </div>

            <div className="form-control">
              <label htmlFor="channel">Channel</label>
              <Field
                type="text"
                id="channel"
                name="channel"
                placeholder="Youtubr channel name"
              />
              <ErrorMessage name="channel" />
            </div>

            <div className="form-control">
              <label htmlFor="comments">Comments</label>
              <Field
                as="textarea"
                id="comments"
                name="comments"
                validate={validateComments}
              />
              <ErrorMessage name="comments" component={TextError} />
            </div>

            <div className="form-control">
              <label htmlFor="address">Address</label>

              <FastField name="address">
                {(props) => {
                  const { field, meta } = props;
                  return (
                    <div>
                      <input type="text" id="address" {...field} />
                      {meta.touched && meta.error && <div>{meta.error}</div>}
                    </div>
                  );
                }}
              </FastField>
            </div>

            <div className="form-control">
              <label htmlFor="facebook">Facebook profile</label>
              <Field type="text" id="facebook" name="social.facebook" />
            </div>

            <div className="form-control">
              <label htmlFor="tweeter">Tweeter profile</label>
              <Field type="text" id="tweeter" name="social.tweeter" />
            </div>

            <div className="form-control">
              <label htmlFor="primaryPh">Primary phone number</label>
              <Field type="text" id="primaryPh" name="phoneNumbers[0]" />
            </div>

            <div className="form-control">
              <label htmlFor="secondaryPh">Secondary phone number</label>
              <Field type="text" id="secondaryPh" name="phoneNumbers[1]" />
            </div>

            <div className="form-control">
              <label>List of phone numbers</label>
              <FieldArray name="phNumbers">
                {(fieldArrayProps) => {
                  const { push, remove, form } = fieldArrayProps;
                  const { values } = form;
                  const { phNumbers } = values;

                  return (
                    <div>
                      {phNumbers.map((phNumber, index) => (
                        <div key={index}>
                          <Field name={`phNumbers[${index}]`} />
                          {index > 0 && (
                            <button type="button" onClick={() => remove(index)}>
                              -
                            </button>
                          )}
                          <button type="button" onClick={() => push("")}>
                            +
                          </button>
                        </div>
                      ))}
                    </div>
                  );
                }}
              </FieldArray>
            </div>

            <button
              type="button"
              onClick={() => formik.validateField("comments")}
            >
              Validate comments
            </button>
            <button type="button" onClick={() => formik.validateForm()}>
              Validate all (entire form)
            </button>
            <button
              type="button"
              onClick={() => formik.setFieldTouched("comments")}
            >
              Visit comments
            </button>
            <button
              type="button"
              onClick={() =>
                formik.setTouched({
                  name: true,
                  email: true,
                  channel: true,
                  comments: true,
                })
              }
            >
              Visit all
            </button>
            {/*
            1>
            ---
            ویژگی دیگری بنام
            dirty
            وجود دارد و تازمانیکه مقادیر فیلدها مخالف مقدار تنظیم اولیه آنها
            نشده باشد مقدار آن
            false
            خواهد بود
            با استفاده از این ویژگی دیگر نیاز به استفاده از ویژگی 
            validateOnMount
            نیست
            */}
            <button type="submit" disabled={!(formik.dirty && formik.isValid)}>
              Submit
            </button>
            {/*
            2>
            ---
            این کد یک مشکلی دارد:
            disabled={!(formik.dirty && formik.isValid)}
            مشکل این است که اگر در تنظیمات اولیه، به همه  فیلدها مقدار
            دهیم و برنامه را اجرا کنیم، بخاطر تغییر نیافتن فیلدها با مقدار
            اولیه آنها، دکمه ثبت همچنان غیر فعال خواهد بود در صورتیکه فرم برای
            ثبت آماده است و دیتای آن صحیح است
            اگر یک کاراکتر از یکی از مقادیر را پاک کنیم دکمه فعال می شود
            اما اگر دوباره همان کاراکتر را بنویسیم باز هم دکمه ثبت
            غیر فعال می شود
            لذا استفاده از همان روش درس قبل و تنظیم ویژگی
            validateOnMount
            بهتر است اما باز هم بستگی به سناریو پروژه دارد
            */}
          </Form>
        );
      }}
    </Formik>
  );
};

export default YoutubeForm;
