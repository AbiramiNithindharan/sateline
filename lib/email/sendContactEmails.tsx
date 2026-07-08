import { AdminEmail , CustomerEmail} from "@/components/emails";

import { ContactFormData } from "@/types/Contact";
import { sendEmail } from "./sendEmail";

export async function sendContactEmails(
  data: ContactFormData
) {
  await Promise.all([
    sendEmail({
      to: process.env.EMAIL_TO!,
      subject: "New Contact Enquiry",
      react: <AdminEmail {...data} />
    }),

    sendEmail({
      to: data.email,
      subject:
        "We've received your enquiry | Sateline Software",
      react: <CustomerEmail {...data} />,
    }),
  ]);
}