import { TriangleAlert } from "lucide-react";

interface ChallengeCardProps {
  description: string;
}

export default function ChallengeCard({ description }: ChallengeCardProps) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-300 hover:shadow-lg">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white">
        <TriangleAlert className="h-6 w-6" />
      </div>

      <p className="leading-7 text-gray-600">{description}</p>
    </div>
  );
}
