import { useState } from "react";
import Button from "./shered/Button";
import Card from "./shered/Card";
import Input from "./shered/Input";
import { Link, useNavigate } from "react-router-dom";
import Form, { type FormDataType } from "./shered/Form";
import HttpInterceptor from "../lib/HttpInterceptor";
import { toast } from "react-toastify";
import CatchError from "../lib/CatchError";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const login = async (value: FormDataType) => {
    try {
      const { data } = await HttpInterceptor.post("/auth/login", value);
      toast.success(data.message);
      navigate("/app");
    } catch (error: unknown) {
      CatchError(error);
    }
  };

  return (
    <div className="w-full h-screen bg-gray-300 flex justify-center items-center">
      <div className="w-8/12 max-w-4xl flex justify-center items-center">
        <Card noPadding>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Form Section */}
            <div>
              <Form className="p-8 space-y-4 w-full" onValue={login}>
                <div className="mb-2">
                  <h2 className="text-2xl font-bold text-gray-800">
                    Welcome Back
                  </h2>
                  <p className="text-sm text-gray-500">
                    Please enter your details to sign in.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Email Address
                  </label>
                  <Input name="email" type="email" placeholder="Enter Email" />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <Input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer focus:outline-none"
                    >
                      <i
                        className={
                          showPassword
                            ? "ri-eye-off-line text-lg"
                            : "ri-eye-line text-lg"
                        }
                      ></i>
                    </button>
                  </div>
                </div>

                <Button type="info">Login</Button>

                {/* Don't have an account link */}
                <div className="flex items-center justify-center gap-1.5 text-sm text-gray-600 pt-2">
                  <p>Don't have an account?</p>
                  <Link
                    to="/signup"
                    className="text-indigo-600 font-medium hover:underline"
                  >
                    Sign up
                  </Link>
                </div>
              </Form>
            </div>

            {/* Illustration / Graphic Section */}
            <div className="hidden md:flex h-125 bg-linear-to-t from-sky-500 to-indigo-500 rounded-r-xl justify-center items-center p-6">
              <img
                src="/images/signin.svg"
                alt="Auth Illustration"
                className="max-h-full"
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
