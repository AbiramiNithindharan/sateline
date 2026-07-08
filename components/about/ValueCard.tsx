interface ValueCardProps {
  title: string;
  description: string;
}

export default function ValueCard({ title, description }: ValueCardProps) {
  return (
    <article
      className="
        rounded-2xl
        border
        border-border
        bg-gray-100
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <h3 className="mb-3 text-xl font-semibold">{title}</h3>

      <p className="text-muted-foreground leading-7">{description}</p>
    </article>
  );
}
