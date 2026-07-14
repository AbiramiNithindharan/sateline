import EmailLayout from "./EmailLayout";
import { ContactFormData } from "@/types/Contact";

export default function AdminEmail({
  name,
  email,
  company,
  ProjectType,
  message,
  budget,
  timeline,
}: ContactFormData) {
  return (
    <EmailLayout title="New Contact Enquiry">
      <table width="100%">
        <tbody>
          <tr>
            <td>
              <strong>Name</strong>
            </td>
            <td>{name}</td>
          </tr>

          <tr>
            <td>
              <strong>Email</strong>
            </td>
            <td>{email}</td>
          </tr>

          <tr>
            <td>
              <strong>Company</strong>
            </td>
            <td>{company || "-"}</td>
          </tr>

          <tr>
            <td>
              <strong>Project Type</strong>
            </td>
            <td>{ProjectType}</td>
          </tr>
          {budget ? (
            <tr>
              <td>
                <strong>Budget</strong>
              </td>
              <td>{budget}</td>
            </tr>
          ) : (
            ""
          )}

          {timeline ? (
            <tr>
              <td>
                <strong>Timeline</strong>
              </td>
              <td>{timeline}</td>
            </tr>
          ) : (
            ""
          )}
        </tbody>
      </table>

      <hr />

      <p>{message}</p>
    </EmailLayout>
  );
}
