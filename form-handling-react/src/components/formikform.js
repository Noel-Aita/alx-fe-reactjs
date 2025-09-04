import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  // Initial form values
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  // Form submission handler
  const handleSubmit = async (values) => {
    console.log("Sending to API:", values);
    alert("Formik form submitted successfully!");
  };

  return ( //values
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {() => (
        <Form className="p-6 border rounded max-w-sm mx-auto">
          <h2 className="text-xl font-bold mb-4">User Registration (Formik)</h2>

          {/* Username */}
          <div className="mb-3">
            <label className="block mb-1">Username</label>
            <Field type="text" name="username" className="border p-2 w-full" />
            <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="block mb-1">Email</label>
            <Field type="email" name="email" className="border p-2 w-full" />
            <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="block mb-1">Password</label>
            <Field type="password" name="password" className="border p-2 w-full" />
            <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
          </div>

          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}
