export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  ProjectType: string;
  budget?: string;
  timeline?: string;
  message: string;
}

export interface ContactSubmissionResult {
  success: boolean;
  message: string;
}
