import { Label } from "@/components/ui/label";

interface FieldLabelProps {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}

export function FieldLabel({
  htmlFor,
  children,
  required = false,
}: FieldLabelProps) {
  return (
    <Label htmlFor={htmlFor} className="font-medium">
      {children}

      {required && <span className="text-destructive ml-1">*</span>}
    </Label>
  );
}
