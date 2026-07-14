import ContactContent from "./ContactContent";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-24">
      <div
        className="
          container
          max-w-7xl
          mx-auto
          px-4
        "
      >
        <div className="mb-12 md:mb-32">
          <h2 className="text-gray-700 text-center text-4xl lg:text-6xl ">
            Contact Us
          </h2>
        </div>
        <div
          className="
            grid
            gap-12
            lg:grid-cols-2
            lg:gap-20
            items-center
          "
        >
          <ContactContent />

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
