const services = [
  {
    title: "Web Development",
    desc: "Modern websites built using Next.js."
  },
  {
    title: "SEO",
    desc: "Rank higher on Google search."
  },
  {
    title: "Social Media",
    desc: "Grow your brand presence."
  },
  {
    title: "Performance Marketing",
    desc: "Generate leads and sales."
  },
  {
    title: "Branding",
    desc: "Build a memorable identity."
  },
  {
    title: "UI/UX Design",
    desc: "Beautiful user experiences."
  }
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-orange-500 font-semibold">
          SERVICES
        </p>

        <h2 className="text-5xl font-bold mt-4 mb-12">
          What We Do
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}