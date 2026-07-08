import { Screenshot } from "@/types/CaseStudy";
import ScreenshotCard from "./ScreenshotCard";

interface ScreenshotGalleryProps {
  screenshots: Screenshot[];
}

export default function ScreenshotGallery({
  screenshots,
}: ScreenshotGalleryProps) {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-8 md:px-12">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600">
            Project Gallery
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Explore the Solution
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            A visual walkthrough of the application, showcasing key interfaces,
            workflows, and features delivered for the client.
          </p>
        </div>

        {/* Gallery */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {screenshots.map((screenshot) => (
            <ScreenshotCard
              key={screenshot.image}
              image={screenshot.image}
              alt={screenshot.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
