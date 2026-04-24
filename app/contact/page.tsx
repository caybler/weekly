export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0b2a5f_0%,#020617_35%,#000_75%)]" />

      <section className="relative z-10 px-8 py-24 text-center">
        <p className="mb-4 text-blue-400 text-sm uppercase tracking-[0.3em]">
          Contact Weekly
        </p>

        <h1 className="text-5xl md:text-7xl font-bold max-w-4xl mx-auto leading-tight">
          Get in touch with us.
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-lg">
          Have a question, need help, or want to learn more about Weekly? Send us
          a message and we’ll get back to you as soon as possible.
        </p>
      </section>

      <section className="relative z-10 px-8 pb-24">
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm text-gray-300">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">Message</label>
              <textarea
                placeholder="How can we help?"
                rows={5}
                className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-500 px-6 py-3 font-medium text-white hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}