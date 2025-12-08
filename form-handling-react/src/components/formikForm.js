// src/components/formikForm.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string()
    .required("Username is required"),

  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function FormikForm() {
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded mt-10">
      <h2 className="text-2xl font-bold mb-4">Formik Registration Form</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          alert("Submitted!");
        }}
      >
        <Form className="space-y-4">

          {/* Username */}
          <div>
            <label className="block font-medium">Username</label>
            <Field name="username" className="border w-full p-2 rounded" />
            <ErrorMessage
              name="username"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium">Email</label>
            <Field
              name="email"
              type="email"
              className="border w-full p-2 rounded"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block font-medium">Password</label>
            <Field
              name="password"
              type="password"
              className="border w-full p-2 rounded"
            />
            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 w-full text-white p-2 rounded"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}
