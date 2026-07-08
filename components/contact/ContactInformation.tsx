import ContactInfoCard from "./ContactInfoCard";
import { ContactInformation as ContactInformationType } from "@/types/ContactPage";

interface Props {
  information: ContactInformationType;
}

export default function ContactInformation({ information }: Props) {
  return (
    <div>
      <h2 className="text-3xl font-bold">{information.heading}</h2>

      <p className="mt-4 text-muted-foreground leading-relaxed">
        {information.description}
      </p>

      <div className="mt-10 space-y-6">
        {information.cards.map((card) => (
          <ContactInfoCard key={card.title} card={card} />
        ))}
      </div>
    </div>
  );
}
