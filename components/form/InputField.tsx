import type { ReactNode } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

import { Input } from "@/components/ui/input";

import { FieldLabel } from "./FieldLabel";
import { FieldError } from "./FieldError";

interface InputFieldProps {
  id: string;
  label: ReactNode;
  placeholder?: string;
  registration: UseFormRegisterReturn;
  error?: string;
  required?: boolean;
  type?: React.HTMLInputTypeAttribute;
  disabled?: boolean;
}

export function InputField({
  id,
  label,
  placeholder,
  registration,
  error,
  required = false,
  type = "text",
  disabled = false,
}: InputFieldProps) {
  return (
    <div className="space-y-2">
      <FieldLabel htmlFor={id} required={required}>
        {label}
      </FieldLabel>

      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        disabled={disabled}
        {...registration}
      />

      <FieldError id={`${id}-error`} message={error} />
    </div>
  );
}
