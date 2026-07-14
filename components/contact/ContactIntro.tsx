// components/contact/ContactIntro.tsx

interface ContactIntroProps {
  heading: string;
  description: string;
}

export default function ContactIntro({
  heading,
  description,
}: ContactIntroProps) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-2xl md:max-w-3xl  px-6 text-center">
        <h2 className="text-3xl md:text-4xl mb-2 font-bold tracking-tight">
          {heading}
        </h2>

        <p className="mt-6 text-sm md:text-lg leading-8 text-muted-foreground">
          {description}
        </p>
      </div>
    </section>
  );
}
