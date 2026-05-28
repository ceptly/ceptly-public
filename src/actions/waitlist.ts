"use server";

import { WaitlistFormSchema, FormState } from "@/lib/auth-schemas";

export async function joinWaitlist(
  state: FormState,
  formData: FormData,
): Promise<FormState> {
  const validatedFields = WaitlistFormSchema.safeParse({
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email } = validatedFields.data;

  try {
    const backendUrl =
      process.env.NEXT_PUBLIC_BACKEND_URL ?? process.env.NEXT_PUBLIC_API_URL;

    if (!backendUrl) {
      console.error(
        "NEXT_PUBLIC_BACKEND_URL (or NEXT_PUBLIC_API_URL) is not defined",
      );
      return {
        errors: {
          _form: ["Configuration error. Please contact support."],
        },
      };
    }

    const response = await fetch(`${backendUrl}/api/waitlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    let result;
    try {
      result = await response.json();
    } catch (e) {
      console.error("Failed to parse backend response:", e);
      return {
        errors: {
          _form: ["Service temporarily unavailable. Please try again later."],
        },
      };
    }

    if (!response.ok) {
      return {
        errors: {
          _form: [result.error || "Failed to join waitlist. Please try again."],
        },
      };
    }

    if (!result.success) {
      return {
        errors: {
          _form: [result.error || "Failed to join waitlist. Please try again."],
        },
      };
    }

    return {
      message:
        "You're on the list! We'll reach out when Ceptly is ready to organize your team.",
    };
  } catch (error) {
    console.error("Waitlist error:", error);
    return {
      errors: {
        _form: ["An unexpected error occurred. Please try again."],
      },
    };
  }
}
