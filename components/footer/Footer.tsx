import FooterLinks from "./FooterLinks";
import { services, companyLinks } from "@/lib/footerData";

export default function Footer() {
  return (
    <footer className="border-t">
      <div
        className="
          container
          max-w-7xl
          mx-auto
          px-4
          py-20
        "
      >
        {/* Brand */}

        <div className="max-w-2xl">
          <h2
            className="
              text-5xl
              md:text-7xl
              font-bold
              tracking-tight
              text-blue-900
            "
          >
            SATELINE
          </h2>

          <p
            className="
              mt-6
              text-lg
              text-muted-foreground
              leading-relaxed
            "
          >
            Building scalable software solutions that help businesses automate
            operations, improve customer experiences, and accelerate growth.
          </p>
        </div>

        {/* Links */}

        <div
          className="
            mt-16
            grid
            gap-10
            md:grid-cols-3
          "
        >
          <FooterLinks title="Services" items={services} />

          <FooterLinks title="Company" items={companyLinks} />

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>

            <div className="space-y-3 text-muted-foreground">
              <p>nithindharan.r@gmail.com</p>

              <p>+91 94875 36320</p>

              <p>India</p>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div
          className="
            mt-16
            pt-8
            border-t
            flex
            flex-col
            md:flex-row
            justify-between
            gap-4
            text-sm
            text-muted-foreground
          "
        >
          <p>© 2026 Sateline Software Technologies.</p>

          <p>Crafted with Next.js & TypeScript.</p>
        </div>
      </div>
    </footer>
  );
}
