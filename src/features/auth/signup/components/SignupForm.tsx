"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconUserPlus } from "@tabler/icons-react";
import Link from "next/link";
import { useForm, type SubmitHandler } from "react-hook-form";
import { schema, type signUpSchemaType } from "../schema/signUpSchema";

export default function SignupForm() {
  const { handleSubmit, register,formState:{isSubmitting,errors,isValid,isDirty} } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    resolver: zodResolver(schema),
  });


  const onSubmit:SubmitHandler<signUpSchemaType> = (values)=>{
    console.log(values)
  }

  
  return (
    <>
      <div className="rounded-2xl bg-white px-6 py-10 shadow-lg">
        <div className="mb-10">
          <h2 className="mb-2 text-center text-3xl font-semibold">
            Create Your Account
          </h2>
          <p className="text-center">Start your fresh journey with us today</p>
        </div>

        <form className="space-y-7" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name*</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ali"
              id="name"
              {...register("name")}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              className="form-control"
              placeholder="ali@example.com"
              id="email"
              {...register("email")}
            />
          </div>

          <div className="bg-light flex flex-col gap-2">
            <label htmlFor="password">Password*</label>
            <input
              type="password"
              className="form-control"
              placeholder="create a strong password"
              autoComplete="off"
              id="password"
              {...register("password")}
            />

            <div className="password-requirements">
              <div className="flex items-center gap-2">
                <div className="bar h-1 grow overflow-hidden rounded-md bg-gray-200">
                  <div className={`progress h-full w-50 bg-orange-500`}></div>
                </div>
                <span>Fair</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="rePassword">Confirm Password*</label>
            <input
              type="password"
              className="form-control"
              placeholder="confirm your password"
              autoComplete="off"
              id="rePassword"
              {...register("rePassword")}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="phone">Phone Number*</label>
            <input
              type="tel"
              className="form-control"
              placeholder="+1 234 567 8900"
              id="phone"
              {...register("phone")}
            />
          </div>

          <div>
            <div className="mb-2 flex items-center gap-2">
              <input
                type="checkbox"
                id="terms"
                className="accent-primary-600 size-4"
              />
              <label htmlFor="terms" className="ms-2">
                I agree to the{" "}
                <Link href={`/terms`} className="text-primary-600">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href={`/privacy-policy`} className="text-primary-600">
                  Privacy Policy
                </Link>{" "}
                *
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="btn bg-primary-600 hover:bg-primary-700 flex w-full cursor-pointer justify-center gap-2 text-white disabled:cursor-not-allowed"
          >
            <IconUserPlus stroke={2} />

            <span>Create My Account</span>
          </button>
        </form>

        <p className="my-4 border-t border-gray-300/30 pt-10 text-center">
          Already have an account?{" "}
          <Link href={`/login`} className="text-primary-600">
            Sign In
          </Link>
        </p>
      </div>
    </>
  );
}
