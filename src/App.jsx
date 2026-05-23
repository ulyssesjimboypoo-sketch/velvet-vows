export default function App() {
  return (
    <div className="bg-[#fffaf7] text-gray-800 scroll-smooth">

      {/* HERO */}
      <section
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1920&auto=format&fit=crop')",
        }}
      >

        <div className="absolute inset-0 bg-black/40"></div>

        {/* NAVBAR */}
        <nav className="absolute top-0 left-0 w-full z-20 px-8 py-6 flex justify-between items-center text-white">

          <h1 className="text-3xl font-semibold tracking-wide">
            JJ Weddings
          </h1>

          <div className="hidden md:flex gap-10 text-sm uppercase tracking-widest">

            <a href="#about">
              About 
            </a>

            <a href="#gallery" className="hover:text-rose-200 transition">
              Gallery
            </a>

            <a href="#contact" className="hover:text-rose-200 transition">
              Contact
            </a>
          </div>
        </nav>

        {/* HERO CONTENT */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">

          <p className="uppercase tracking-[8px] text-sm mb-4 text-rose-200">
            Luxury Wedding Experience
          </p>

          <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight">
            JJ Weddings: Where Love Meets Elegance
          </h1>

          <p className="max-w-2xl text-lg text-gray-200 leading-8">
            Elegant wedding registration and unforgettable moments
            crafted for couples who believe in forever.
          </p>

          <button className="mt-10 border border-white px-10 py-4 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition duration-300">
            Register Now
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-20 md:py-32 px-6 bg-white"
      >

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

          <img
            src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop"
            alt="Wedding"
            className="rounded-sm h-[350px] md:h-[650px] object-cover w-full"
          />

          <div>

            <p className="uppercase tracking-[6px] text-rose-400 text-sm mb-4">
              About Us
            </p>

            <h2 className="text-5xl font-light leading-tight mb-8">
              Timeless Weddings
              <br />
              Crafted with Elegance
            </h2>

            <p className="text-gray-600 leading-9 text-lg">
              JJ Weddings is a luxury wedding registration platform
              designed for couples who dream of elegant and unforgettable
              celebrations. Every detail is thoughtfully crafted to
              create timeless memories filled with love and sophistication.
            </p>

            <div className="flex gap-12 mt-12">

              <div>
                <h3 className="text-4xl font-light">
                  500+
                </h3>

                <p className="text-gray-500 mt-2">
                  Happy Couples
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-light">
                  120+
                </h3>

                <p className="text-gray-500 mt-2">
                  Wedding Events
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section
        id="gallery"
        className="py-20 md:py-32 px-6"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[6px] text-rose-400 text-sm mb-4">
              Gallery
            </p>

            <h2 className="text-5xl font-light">
              Wedding Moments
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop",

              "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",

              "https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=1200&auto=format&fit=crop",
            ].map((img, index) => (

              <div
                key={index}
                className="overflow-hidden"
              >

                <img
                  src={img}
                  alt="Wedding"
                  className="h-[300px] md:h-[500px] w-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTRATION */}
      <section className="py-20 md:py-32 px-6 bg-white">

        <div className="max-w-3xl mx-auto text-center">

          <p className="uppercase tracking-[6px] text-rose-400 text-sm mb-4">
            Registration
          </p>

          <h2 className="text-5xl font-light mb-12">
            Reserve Your Wedding
          </h2>

          <form className="space-y-6 text-left">

            <input
              type="text"
              placeholder="Bride Name"
              className="w-full border-b border-gray-300 py-4 bg-transparent focus:outline-none"
            />

            <input
              type="text"
              placeholder="Groom Name"
              className="w-full border-b border-gray-300 py-4 bg-transparent focus:outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border-b border-gray-300 py-4 bg-transparent focus:outline-none"
            />

            <input
              type="date"
              className="w-full border-b border-gray-300 py-4 bg-transparent focus:outline-none"
            />

            <textarea
              rows="4"
              placeholder="Tell us about your dream wedding..."
              className="w-full border-b border-gray-300 py-4 bg-transparent focus:outline-none"
            ></textarea>

            <button className="mt-8 border border-black px-10 py-4 uppercase tracking-widest text-sm hover:bg-black hover:text-white transition duration-300">
              Submit Registration
            </button>
          </form>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24 px-6 bg-[#111111] text-white text-center"
      >

        <h2 className="text-5xl font-light mb-8">
          Contact Us
        </h2>

        <p className="text-gray-400 text-lg">
          contact@poulyssesjimboy@gmail.com
        </p>

        <p className="text-gray-400 mt-2">
          09265356021
        </p>

        <p className="text-gray-500 mt-10 text-sm tracking-widest uppercase">
          Dev_JIM © 2026
        </p>
      </section>
    </div>
  )
}