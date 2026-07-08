import EmailLayout from "./EmailLayout";
import { ContactFormData } from "@/types/Contact";

export default function CustomerEmail({ name }: ContactFormData) {
  return (
    <EmailLayout title="Thank You for Contacting Us">
      <p>Hello {name},</p>

      <p>Thank you for contacting Sateline Software Technologies.</p>

      <p>We have successfully received your enquiry.</p>

      <p>
        Our team will review your requirements and get back to you within one
        business day.
      </p>

      <p>
        We appreciate your interest and look forward to discussing your project.
      </p>

      <p>
        Regards,
        <br />
        Sateline Software Technologies
      </p>
    </EmailLayout>
  );
}
