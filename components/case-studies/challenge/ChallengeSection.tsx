import { Challenge } from "@/types/CaseStudy";
import ChallengeCard from "./ChallengeCard";

interface ChallengeSectionProps {
  challenge: Challenge;
}

export default function ChallengeSection({ challenge }: ChallengeSectionProps) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-8 md:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
            Client Challenge
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            {challenge.heading}
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every successful software project begins by understanding the
            business challenges. These were the key problems our client needed
            to solve.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {challenge.paragraphs.map((paragraph) => (
            <ChallengeCard key={paragraph} description={paragraph} />
          ))}
        </div>
      </div>
    </section>
  );
}
