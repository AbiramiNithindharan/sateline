import ContactForm from "./ContactForm";
import ContactInformation from "./ContactInformation";

import { ContactInformation as ContactInformationType } from "@/types/ContactPage";

interface Props {
  information: ContactInformationType;
}

export default function ContactSection({ information }: Props) {
  return (
    <section className="py-12 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        <div>
          <ContactForm />
        </div>

        <div>
          <ContactInformation information={information} />
        </div>
      </div>
    </section>
  );
}
