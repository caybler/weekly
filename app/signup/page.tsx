import Link from "next/link";

export default function Signup() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0b2a5f_0%,#020617_35%,#000_75%)]" />

      <section className="relative z-10 flex min-h-[85vh] items-center justify-center px-8 py-16">
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">

          {/* Header */}
          <div className="mb-8 text-center">
            <p className="mb-3 text-blue-400 text-sm uppercase tracking-[0.3em]">
              Get Started
            </p>

            <h1 className="text-4xl font-bold">Create your account</h1>

            <p className="mt-3 text-gray-400">
              Start managing your rosters with Weekly.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">

            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Password
              </label>
              <input
                type="password"
                placeholder="Create a password"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-500 px-6 py-3 font-medium text-white hover:bg-blue-600 transition"
            >
              Sign Up
            </button>
          </form>

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-400 hover:text-blue-300">
              Login
            </Link>
          </p>

        </div>
      </section>
    </main>
  );
}