import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-300/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-300/20 rounded-full blur-3xl"></div>

      <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-purple-300/20 rounded-full blur-3xl"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div>
            <p className="text-orange-500 font-semibold tracking-wider">
              {/* DIGITAL MARKETING AGENCY */}
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-4 leading-tight">
              We Create
              <br />
              Super Rich
              <br />
              Experiences Online
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Performance-driven digital marketing
              solutions for ambitious brands looking
              to grow faster and smarter.
            </p>

            <button className="mt-8 bg-black text-white px-8 py-4 rounded-full hover:scale-105 transition duration-300">
              Get Started
            </button>
          </div>

          {/* Right Image */}
          <div className="relative h-[450px] md:h-[550px] lg:h-[650px]">

            <Image
              src="/Hero-1.jpg"
              alt="Digital Agency"
              fill
              priority
              className="object-contain"
            />

          </div>

        </div>

      </div>

    </section>
  );
}