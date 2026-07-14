import type { ReactNode } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

import { Textarea } from "@/components/ui/textarea";

import { FieldError } from "./FieldError";
import { FieldLabel } from "./FieldLabel";

interface TextareaFieldProps {
  id: string;
  label: ReactNode;
  placeholder?: string;
  registration: UseFormRegisterReturn;
  error?: string;
  required?: boolean;
  rows?: number;
  disabled?: boolean;
}

export function TextareaField({
  id,
  label,
  placeholder,
  registration,
  error,
  required = false,
  rows = 6,
  disabled = false,
}: TextareaFieldProps) {
  return (
    <div className="space-y-2">
      <FieldLabel htmlFor={id} required={required}>
        {label}
      </FieldLabel>

      <Textarea
        id={id}
        rows={rows}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        disabled={disabled}
        {...registration}
      />

      <FieldError message={error} />
    </div>
  );
}
