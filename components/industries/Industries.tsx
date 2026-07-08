import IndustryGallery from "./IndustryGallery";

export default function Industries() {
  return (
    <section className="py-32">
      <div className="container max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-900">
            Industries We Serve
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4 text-gray-700">
            Software Solutions Built For Every Industry
          </h2>

          <p className="mt-6 text-muted-foreground text-lg">
            We help organizations modernize operations, automate workflows, and
            deliver exceptional digital experiences.
          </p>
        </div>

        <IndustryGallery />
      </div>
    </section>
  );
}
