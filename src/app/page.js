"use client";
import { Button } from "@/components/ui/button";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as Yup from "Yup";

export default function Home() {
  const router = useRouter();
  const initialValues = {
    phone: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    phone: Yup.string().required("This field is required"),
    password: Yup.string().required("This field is required"),
  });

  return (
    <div className="flex justify-center h-screen items-center w-full">
      <div className="">
        <div className="">
          <div className="text-center">
            <img
              className="mx-auto w-32"
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
              alt="logo"
            />
            <h4 className="mb-4 mt-1 pb-1 text-xl font-semibold">
              Welcome to XPress
            </h4>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
              try {
                const response = await fetch(
                  "https://9ee6-154-160-30-98.ngrok-free.app/phpapi/login/",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: new URLSearchParams(values),
                  }
                );
                if (response.ok) {
                  const responseData = await response.json();
                  console.log(responseData.message);
                  router.push("/profile");
                }
              } catch (error) {
                console.log(error.message, "Error");
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
                <p className="mb-4 text-sm text-center">
                  Please login to your account
                </p>
                <div className="relative mb-4">
                  <input
                    type="text"
                    className="outline outline-1 outline-gray-400 w-full rounded p-2 focus:outline focus:outline-1 focus:outline-pink-500"
                    id="phone"
                    placeholder="Username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                    name="phone"
                  />
                  {errors.phone && touched.phone && (
                    <div className="text-xs text-red-500">{errors.phone}</div>
                  )}
                </div>
                <div className=" mb-4">
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
                    <div className="text-xs text-red-500">
                      {errors.password}
                    </div>
                  )}
                </div>
                <div className="mb-3 pb-1 pt-1 text-center">
                  <Button
                    className="bg-gradient-to-r from-orange-500 via-red-600 to-pink-700 w-full mb-3 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                    type="submit"
                  >
                    Log in
                  </Button>
                  <Link href={"/forgot-pass"} className="text-sm">
                    Forgot password?
                  </Link>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <p className="">Don't have an account?</p>
                  <Link href={"/register"} className="text-pink-700">
                    Register
                  </Link>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
