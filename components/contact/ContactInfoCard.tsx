import { ContactInfoCard as ContactInfoCardType } from "@/types/ContactPage";
import { featureIcon } from "../ui/featureIcon";
interface Props {
  card: ContactInfoCardType;
}

export default function ContactInfoCard({ card }: Props) {
  const Icon = featureIcon[card.icon];
  return (
    <div className="rounded-2xl border bg-card p-6 transition-all duration-300 hover:shadow-lg">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="h-7 w-7 text-primary" />
      </div>

      <h3 className="text-lg font-semibold">{card.title}</h3>

      <p className="mt-2 font-medium text-primary">{card.value}</p>

      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {card.description}
      </p>
    </div>
  );
}
