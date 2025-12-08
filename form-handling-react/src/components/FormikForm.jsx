import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Min 6 chars").required("Required"),
  });

  const handleSubmit = (values) => {
    console.log("Formik submitted:", values);
  };

  return (
    <div style={{ margin: "30px" }}>
      <h2>Formik Registration Form</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field name="username" placeholder="Username" />
          <ErrorMessage name="username" component="p" style={{ color: "red" }} />

          <br /><br />

          <Field name="email" placeholder="Email" />
          <ErrorMessage name="email" component="p" style={{ color: "red" }} />

          <br /><br />

          <Field name="password" type="password" placeholder="Password" />
          <ErrorMessage name="password" component="p" style={{ color: "red" }} />

          <br /><br />

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}
