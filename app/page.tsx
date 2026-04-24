import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0b2a5f_0%,#020617_35%,#000_75%)]" />


      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-28 pb-20">
        <p className="mb-4 text-blue-400 text-sm uppercase tracking-[0.3em]">
          Smart Rostering Platform
        </p>

        <h1 className="text-5xl md:text-7xl font-bold max-w-4xl leading-tight">
          Manage rosters, staff, and schedules with ease.
        </h1>

        <p className="mt-6 max-w-2xl text-gray-400 text-lg">
          Weekly helps small businesses create smoother schedules, manage staff,
          and keep daily operations organised in one simple platform.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/signup"
            className="px-7 py-4 rounded-xl bg-blue-500 hover:bg-blue-600 transition font-medium"
          >
            Get Started
          </Link>

          <a
            href="#about"
            className="px-7 py-4 rounded-xl border border-white/20 hover:bg-white/10 transition font-medium"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Info cards */}
      <section id="about" className="relative z-10 px-8 pb-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-xl font-semibold mb-3">Easy Scheduling</h3>
            <p className="text-gray-400">
              Create and manage weekly rosters without messy spreadsheets.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-xl font-semibold mb-3">Staff Management</h3>
            <p className="text-gray-400">
              Keep staff information, availability, and shifts in one place.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-xl font-semibold mb-3">Cost Awareness</h3>
            <p className="text-gray-400">
              Plan shifts with better visibility over staffing needs and costs.
            </p>
          </div>
        </div>
      </section>

      {/* Footer sections */}
      <footer className="relative z-10 border-t border-white/10 px-8 py-8 text-sm text-gray-400 flex flex-col md:flex-row justify-between gap-4">
        <p>© 2026 Weekly. All rights reserved.</p>

        <div className="flex gap-6">
          <a id="contact" href="#" className="hover:text-white">Contact</a>
          <a id="help" href="#" className="hover:text-white">Help</a>
        </div>
      </footer>
    </main>
  );
}