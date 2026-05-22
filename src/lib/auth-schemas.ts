import { z } from "zod";

export const WaitlistFormSchema = z.object({
  email: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .trim(),
});

export type WaitlistFormData = z.infer<typeof WaitlistFormSchema>;

export type FormState =
  | {
      errors?: {
        email?: string[];
        _form?: string[];
      };
      message?: string;
    }
  | undefined;
