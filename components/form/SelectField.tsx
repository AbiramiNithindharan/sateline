import type { ReactNode } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

import { FieldError } from "./FieldError";
import { FieldLabel } from "./FieldLabel";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectFieldProps {
  id: string;
  label: ReactNode;
  placeholder: string;
  options: SelectOption[];
  registration: UseFormRegisterReturn;
  error?: string;
  required?: boolean;
  disabled?: boolean;
}

export function SelectField({
  id,
  label,
  placeholder,
  options,
  registration,
  error,
  required = false,
  disabled = false,
}: SelectFieldProps) {
  return (
    <div className="space-y-2">
      <FieldLabel htmlFor={id} required={required}>
        {label}
      </FieldLabel>

      <select
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        disabled={disabled}
        className="
          h-10
          w-full
          rounded-md
          border
          bg-background
          px-3
          text-sm
          focus:outline-none
          focus:ring-2
          focus:ring-ring
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
        {...registration}
      >
        <option value="">{placeholder}</option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <FieldError message={error} />
    </div>
  );
}
