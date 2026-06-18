export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-8">
          Contact Us
        </h2>

        <form className="space-y-5 max-w-xl">

          <input
            type="text"
            placeholder="Name"
            className="w-full border p-4 rounded-xl"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-4 rounded-xl"
          />

          <textarea
            rows={5}
            placeholder="Message"
            className="w-full border p-4 rounded-xl"
          />

          <button className="bg-black text-white px-8 py-4 rounded-full">
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}