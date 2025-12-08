import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

export default function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        alert("Submitted!");
      }}
    >
      <Form>
        <div>
          <label>Username</label>
          <Field name="username" />
          <ErrorMessage name="username" component="p" />
        </div>

        <div>
          <label>Email</label>
          <Field name="email" />
          <ErrorMessage name="email" component="p" />
        </div>

        <div>
          <label>Password</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="p" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
