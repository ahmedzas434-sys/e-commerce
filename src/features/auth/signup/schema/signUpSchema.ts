import z from "zod";

export const schema = z
  .object({
    name: z.string().min(3, {
      error: "Name must be at least 3 characters",
    }),

    email: z
      .email({
        error: "Please enter a valid email",
      })
      .min(1, {
        error: "Email is required",
      }),

    password: z
      .string()
      .min(1, {
        error: "Password is required",
      })
      .regex(/[A-Z]/, {
        error: "Password must contain at least one uppercase letter",
      })
      .regex(/[a-z]/, {
        error: "Password must contain at least one lowercase letter",
      })
      .regex(/[0-9]/, {
        error: "Password must contain at least one number",
      })
      .regex(/[@$#!%&_-]/, {
        error: "Password must contain at least one special character",
      }),

    rePassword: z.string().min(1, {
      error: "Please confirm your password",
    }),

    phone: z
      .string()
      .min(1, {
        error: "Phone number is required",
      })
      .regex(/^01[0125][0-9]{8}$/, {
        error: "Please enter a valid Egyptian phone number",
      }),
  })
  .refine((data) => data.rePassword === data.password, {
    error: "Passwords do not match",
    path: ["rePassword"],
  });

export type signUpSchemaType = z.infer<typeof schema>;
