export default function About() {
  return (
    <div className="min-h-screen bg-[#fffaf7] text-gray-800">

      <section className="py-32 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

          <img
            src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop"
            alt="Wedding"
            className="h-[700px] w-full object-cover"
          />

          <div>

            <p className="uppercase tracking-[6px] text-rose-400 text-sm mb-4">
              About Velvet Vows
            </p>

            <h1 className="text-6xl font-light leading-tight mb-8">
              Timeless Weddings
              <br />
              Crafted with Elegance
            </h1>

            <p className="text-gray-600 text-lg leading-9">
              Velvet Vows is a luxury wedding registration platform
              designed for couples who dream of elegant and unforgettable
              celebrations. Every detail is carefully crafted to create
              timeless memories filled with love and sophistication.
            </p>

            <div className="flex gap-16 mt-12">

              <div>
                <h2 className="text-3xl md:text-5xl font-light">
                  500+
                </h2>

                <p className="text-gray-500 mt-2">
                  Happy Couples
                </p>
              </div>

              <div>
                <h2 className="text-3xl md:text-5xl font-light">
                  120+
                </h2>

                <p className="text-gray-500 mt-2">
                  Wedding Events
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}