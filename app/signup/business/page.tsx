"use client";

import { useState } from "react";
import Link from "next/link";

export default function BusinessSignup() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    businessName: "",
    businessType: "",
    locationName: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0b2a5f_0%,#020617_35%,#000_75%)]" />

      <section className="relative z-10 px-8 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
          
          {/* Left side */}
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
              Business Setup
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-6xl">
              Build your workplace in minutes.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-400">
              Create your business, add your first location, and start building
              smarter rosters for your team.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold text-blue-400">1</p>
                <p className="mt-2 text-sm text-gray-300">Create business</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold text-blue-400">2</p>
                <p className="mt-2 text-sm text-gray-300">Add location</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold text-blue-400">3</p>
                <p className="mt-2 text-sm text-gray-300">Invite staff</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
            <div className="mb-6">
              <h2 className="text-3xl font-bold">Create your business</h2>
              <p className="mt-2 text-gray-400">
                Start with your admin account and first workplace details.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  name="fullName"
                  placeholder="Full Name"
                  onChange={handleChange}
                  className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-blue-500"
                />

                <input
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-blue-500"
              />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  name="businessName"
                  placeholder="Business Name"
                  onChange={handleChange}
                  className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-blue-500"
                />

                <input
                  name="businessType"
                  placeholder="Business Type e.g. Swim School"
                  onChange={handleChange}
                  className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <input
                name="locationName"
                placeholder="First Location Name"
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-blue-500"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-500 px-6 py-4 font-medium text-white transition hover:bg-blue-600"
              >
                Create Business
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-400">
              Joining as an employee?{" "}
              <Link href="/signup/employee" className="text-blue-400 hover:text-blue-300">
                Use invite code
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}