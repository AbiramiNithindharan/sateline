import { ContactSchema } from "../validation";
import { ContactSubmissionResult } from "@/types/Contact";
import { sendContactEmails } from "@/lib/email";

export async function submitContact(
  data: ContactSchema,
): Promise<ContactSubmissionResult> {
  await sendContactEmails(data);
  /**
   * Future Steps
   *
   * 1. Save to CRM
   * 2. Send Admin Email
   * 3. Send Customer Email
   * 4. Notify Slack
   * 5. Trigger Automations
   */

  return {
    success: true,
    message: "Contact enquiry received.",
  };
}
