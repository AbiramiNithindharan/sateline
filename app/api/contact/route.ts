import { NextResponse } from "next/server";

import { contactSchema, submitContact } from "@/lib/contact";

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type");

    if (!contentType?.includes("application/json")) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid content type.",
        },
        {
          status: 415,
        },
      );
    }
    const body = await request.json();

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed.",
          errors: result.error.flatten(),
        },
        {
          status: 400,
        },
      );
    }

    const response = await submitContact(result.data);

    return NextResponse.json(response);
  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      {
        status: 500,
      },
    );
  }
}
