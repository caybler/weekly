import Link from "next/link";

export default function Login() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0b2a5f_0%,#020617_35%,#000_75%)]" />

      <section className="relative z-10 flex min-h-[85vh] items-center justify-center px-8 py-16">
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="mb-8 text-center">
            <p className="mb-3 text-blue-400 text-sm uppercase tracking-[0.3em]">
              Welcome Back
            </p>

            <h1 className="text-4xl font-bold">Login to Weekly</h1>

            <p className="mt-3 text-gray-400">
              Access your rosters, staff, and schedules.
            </p>
          </div>

          <form className="space-y-5">
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
                placeholder="Enter your password"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-400">
                <input type="checkbox" className="accent-blue-500" />
                Remember me
              </label>

              <a href="#" className="text-blue-400 hover:text-blue-300">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-500 px-6 py-3 font-medium text-white hover:bg-blue-600 transition"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-400">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-blue-400 hover:text-blue-300">
              Sign up
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}