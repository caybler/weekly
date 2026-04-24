export default function Help() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0b2a5f_0%,#020617_35%,#000_75%)]" />

      {/* Hero */}
      <section className="relative z-10 px-8 py-24 text-center">
        <p className="mb-4 text-blue-400 text-sm uppercase tracking-[0.3em]">
          Help & Support
        </p>

        <h1 className="text-5xl md:text-7xl font-bold max-w-4xl mx-auto leading-tight">
          How can we help you?
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-lg">
          Find answers to common questions or learn how to get the most out of Weekly.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 px-8 pb-24">
        <div className="mx-auto max-w-4xl space-y-6">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-lg font-semibold mb-2">
              How do I create a roster?
            </h3>
            <p className="text-gray-400">
              Once logged in, you’ll be able to access the dashboard where you can create and manage weekly schedules.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-lg font-semibold mb-2">
              Can I edit shifts after creating them?
            </h3>
            <p className="text-gray-400">
              Yes, schedules are fully editable so you can update shifts anytime as your needs change.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-lg font-semibold mb-2">
              Is Weekly suitable for small businesses?
            </h3>
            <p className="text-gray-400">
              Absolutely — Weekly is designed specifically for small teams that need simple and effective rostering.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-lg font-semibold mb-2">
              How do I contact support?
            </h3>
            <p className="text-gray-400">
              You can head over to the Contact page and send us a message anytime.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}