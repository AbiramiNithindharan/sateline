import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl font-bold">Service Not Found</h1>

      <p className="mt-6 max-w-lg text-slate-600">
        The service you're looking for doesn't exist or may have been moved.
      </p>

      <Link
        href="/services"
        className="mt-10 rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
      >
        View All Services
      </Link>
    </section>
  );
}
