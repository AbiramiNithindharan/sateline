import IndustryGallery from "./IndustryGallery";

export default function Industries() {
  return (
    <section className="py-20 md:py-32">
      <div className="container max-w-7xl mx-auto px-2 ">
        <div className="mx-auto mb-14 max-w-3xl text-center px-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Industries We Serve
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tight text-slate-900">
            Software Solutions Built For Every Industry
          </h2>

          <p className="mt-6 mx-auto max-w-2xl text-base leading-6 text-muted-foreground md:text-lg">
            We help organizations modernize operations, automate workflows, and
            deliver exceptional digital experiences.
          </p>
        </div>

        <IndustryGallery />
      </div>
    </section>
  );
}
