import { ContactInfoCard as ContactInfoCardType } from "@/types/ContactPage";
import { featureIcon } from "../ui/featureIcon";
interface Props {
  card: ContactInfoCardType;
}

export default function ContactInfoCard({ card }: Props) {
  const Icon = featureIcon[card.icon];
  return (
    <div className="rounded-2xl border bg-card p-2 transition-all duration-300 hover:shadow-lg">
      <div className="mb-4 flex items-center justify-start gap-4">
        <div className=" flex items-center justify-start gap-2">
          <Icon className="h-3 w-3 text-primary" />
          <h3 className="font-semibold text-sm">{card.title} :</h3>
        </div>

        <p className=" font-medium text-primary text-sm">{card.value}</p>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {card.description}
      </p>
    </div>
  );
}
