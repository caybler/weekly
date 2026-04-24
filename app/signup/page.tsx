import Link from "next/link";

export default function Signup() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0b2a5f_0%,#020617_35%,#000_75%)]" />

      <section className="relative z-10 flex min-h-[85vh] items-center justify-center px-8 py-16">
        <div className="w-full max-w-4xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-blue-400 text-sm uppercase tracking-[0.3em]">
              Create Account
            </p>

            <h1 className="text-4xl md:text-5xl font-bold">
              How are you joining Weekly?
            </h1>

            <p className="mt-3 text-gray-400">
              Choose whether you are setting up a business or joining as an employee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/signup/business"
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur hover:bg-white/10 transition"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500">
                🏢
              </div>

              <h2 className="text-2xl font-bold mb-3">Business Owner</h2>

              <p className="text-gray-400 mb-6">
                Create your business profile, add locations, set up roles, and invite your staff.
              </p>

              <span className="text-blue-400 font-medium">
                Set up a business →
              </span>
            </Link>

            <Link
              href="/signup/employee"
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur hover:bg-white/10 transition"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500">
                👤
              </div>

              <h2 className="text-2xl font-bold mb-3">Employee</h2>

              <p className="text-gray-400 mb-6">
                Join an existing business using your invite code from your manager or admin.
              </p>

              <span className="text-blue-400 font-medium">
                Join with invite code →
              </span>
            </Link>
          </div>

          <p className="mt-8 text-center text-sm text-gray-400">
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