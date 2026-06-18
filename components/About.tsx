export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden bg-gradient-to-br bg-gradient-to-br from-orange-100 via-rose-100 to-violet-100"
    >
      {/* Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[100px] md:text-[140px] lg:text-[180px] font-extrabold text-black/[0.03] select-none">
          ABOUT
        </h1>
      </div>

      {/* Light Background Blobs */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-orange-500/20 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-pink-500/20 rounded-full blur-3xl" />

      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <p className="text-orange-500 font-semibold tracking-[0.25em] uppercase">
          About Us
        </p>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight max-w-4xl text-slate-900">
          We Build Brands
          <br />
          That Grow Online
        </h2>

        <p className="mt-8 text-lg text-slate-600 max-w-3xl leading-relaxed">
          We are a digital agency specializing in web development,
          SEO, social media marketing, branding, and performance
          marketing.

          Our mission is to create impactful digital experiences
          that help businesses attract, engage, and convert more
          customers online.
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

          <div className="bg-white border border-orange-100 p-8 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-4xl font-bold text-orange-500">
              150+
            </h3>
            <p className="mt-2 text-slate-600">
              Projects
            </p>
          </div>

          <div className="bg-white border border-pink-100 p-8 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-4xl font-bold text-pink-500">
              50+
            </h3>
            <p className="mt-2 text-slate-600">
              Clients
            </p>
          </div>

          <div className="bg-white border border-purple-100 p-8 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-4xl font-bold text-purple-500">
              98%
            </h3>
            <p className="mt-2 text-slate-600">
              Satisfaction
            </p>
          </div>

          <div className="bg-white border border-orange-100 p-8 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-4xl font-bold text-orange-500">
              5+
            </h3>
            <p className="mt-2 text-slate-600">
              Years Experience
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}