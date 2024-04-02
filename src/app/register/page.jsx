"use client";
import { Button } from "@/components/ui/button";
import { Formik } from "formik";
import Link from "next/link";
import * as Yup from "Yup";
// import { useToast } from "@/components/ui/use-toast";
import toast from "react-hot-toast";

export default function Register() {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  };

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("Please enter your firstname"),
    lastname: Yup.string().required("Please enter your last name"),
    phone: Yup.string().required("Please enter your phone number"),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("This field is required"),
    password: Yup.string()
      .required("This field is required")
      .min(8, "Password must be 8 or more characters")
      .matches(
        /(?=.*[a-z])(?=.*[A-Z])\w+/,
        "Password should contain at least one uppercase and lowercase character"
      )
      .matches(/\d/, "Password should contain at least one number")
      .matches(
        /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
        "Password should contain at least one special character"
      ),
    cpassword: Yup.string().when("password", (password, field) => {
      if (password) {
        return field
          .required("The passwords do not match")
          .oneOf([Yup.ref("password")], "The passwords do not match");
      }
    }),
  });

  return (
    <div className="h-screen flex flex-col items-center justify-center p-8">
      <div className="text-center">
        <img
          className="mx-auto w-32"
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
          alt="logo"
        />
        <h4 className="mb-8 mt-1 pb-1 text-xl font-semibold">
          Welcome to XPress
        </h4>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          try {
            const response = await fetch(
              "https://9ee6-154-160-30-98.ngrok-free.app/phpapi/register/",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams(values),
              }
            );

            if (!response.ok) {
              console.error("Error:", response.message);
            } else {
              const responseData = await response.json();
              toast.success(responseData.message);
            }
          } catch (error) {
            toast.error(responseData.message);
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <p className="mb-4 text-sm">Let's help you create an account</p>
            <div className="md:flex gap-4">
              <div className="mb-4">
                <input
                  type="text"
                  className="outline outline-1 outline-gray-400 w-full rounded p-2 focus:outline focus:outline-1 focus:outline-pink-500"
                  id="firstname"
                  placeholder="First name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstname}
                  name="firstname"
                />
                {errors.firstname && touched.firstname && (
                  <div className="text-xs text-red-500">{errors.firstname}</div>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  className="outline outline-1 outline-gray-400 w-full rounded p-2 focus:outline focus:outline-1 focus:outline-pink-500"
                  id="lastname"
                  placeholder="Last name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastname}
                  name="lastname"
                />
                {errors.lastname && touched.lastname && (
                  <div className="text-xs text-red-500">{errors.lastname}</div>
                )}
              </div>
            </div>
            <div className="mb-4">
              <input
                type="email"
                className="outline outline-1 outline-gray-400 w-full rounded p-2 focus:outline focus:outline-1 focus:outline-pink-500"
                id="email"
                placeholder="Email address"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                name="email"
              />
              {errors.email && touched.email && (
                <div className="text-xs text-red-500">{errors.email}</div>
              )}
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="outline outline-1 outline-gray-400 w-full rounded p-2 focus:outline focus:outline-1 focus:outline-pink-500"
                id="phone"
                placeholder="phone number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                name="phone"
              />
              {errors.phone && touched.phone && (
                <div className="text-xs text-red-500">{errors.phone}</div>
              )}
            </div>
            <div className="md:flex gap-4">
              <div className="mb-4">
                <input
                  type="password"
                  className="outline outline-1 outline-gray-400 w-full rounded p-2 focus:outline focus:outline-1 focus:outline-pink-500"
                  id="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  name="password"
                />
                {errors.password && touched.password && (
                  <div className="text-xs text-red-500">{errors.password}</div>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  className="outline outline-1 outline-gray-400 w-full rounded p-2 focus:outline focus:outline-1 focus:outline-pink-500"
                  id="cpassword"
                  placeholder="confirm password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.cpassword}
                  name="cpassword"
                />
                {errors.cpassword && touched.cpassword && (
                  <div className="text-xs text-red-500">{errors.cpassword}</div>
                )}
              </div>
            </div>

            <div className="mb-1 pb-1 pt-1 text-center">
              <Button
                className="bg-gradient-to-r from-orange-500 via-red-600 to-pink-700 w-full mb-3 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                type="submit"
              >
                Create Account
              </Button>
            </div>
            <div className="flex items-center justify-between text-sm">
              <p className=" ">Already a member?</p>
              <Link href={"/"} className="text-pink-700">
                Login
              </Link>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
