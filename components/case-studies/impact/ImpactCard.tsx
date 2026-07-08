import { TrendingUp } from "lucide-react";

interface ImpactCardProps {
  title: string;
  description: string;
}

export default function ImpactCard({ title, description }: ImpactCardProps) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-xl">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-600 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
        <TrendingUp className="h-7 w-7" />
      </div>

      <h3 className="text-xl font-semibold tracking-tight text-gray-900">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-gray-600">{description}</p>
    </div>
  );
}
