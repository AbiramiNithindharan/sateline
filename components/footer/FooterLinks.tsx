import Link from "next/link";

import type { FooterLink } from "@/lib/footerData";

interface FooterLinksProps {
  title: string;
  items: FooterLink[];
}

export default function FooterLinks({ title, items }: FooterLinksProps) {
  return (
    <div>
      <h3 className="font-semibold mb-4 text-blue-900">{title}</h3>

      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="
        text-muted-foreground
        transition-colors
        hover:text-primary
      "
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
