import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0b2a5f_0%,#020617_35%,#000_75%)]" />

      <nav className="relative z-10 flex items-center justify-between px-8 py-6">
        <Link href="/" className="text-2xl font-bold">
          Week<span className="text-blue-500">ly</span>
        </Link>

        <div className="flex items-center gap-6 text-sm text-gray-300">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
          <Link href="/help" className="hover:text-white transition">Help</Link>
          <Link
            href="/login"
            className="px-4 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition"
          >
            Login
          </Link>
        </div>
      </nav>

      <section className="relative z-10 px-8 py-24 text-center">
        <p className="mb-4 text-blue-400 text-sm uppercase tracking-[0.3em]">
          About Weekly
        </p>

        <h1 className="text-5xl md:text-7xl font-bold max-w-4xl mx-auto leading-tight">
          Built to make rostering simpler for small businesses.
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-lg">
          Weekly is a smart rostering platform designed to help businesses plan
          staff schedules, manage availability, reduce confusion, and keep
          operations organised without relying on messy spreadsheets.
        </p>
      </section>

      <section className="relative z-10 px-8 pb-24">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-xl font-semibold mb-3">Our Purpose</h3>
            <p className="text-gray-400">
              To give small businesses a simple and reliable way to create,
              manage, and update rosters.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-xl font-semibold mb-3">Who It Helps</h3>
            <p className="text-gray-400">
              Weekly is designed for managers, team leaders, and business owners
              who need a clearer way to organise staff.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-xl font-semibold mb-3">Why It Matters</h3>
            <p className="text-gray-400">
              Better rostering saves time, reduces mistakes, and helps teams
              know exactly when and where they are needed.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}