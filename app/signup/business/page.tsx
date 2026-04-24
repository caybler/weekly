"use client";

import { useState } from "react";

export default function BusinessSignup() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    businessName: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(form); // we’ll connect this to DB next
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white/5 backdrop-blur p-8 rounded-2xl border border-white/10">

        <h1 className="text-3xl font-bold mb-2">Set up your business</h1>
        <p className="text-gray-400 mb-6">
          Create your account and your business.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="fullName"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black/40 border border-white/10"
          />

          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black/40 border border-white/10"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black/40 border border-white/10"
          />

          <input
            name="businessName"
            placeholder="Business Name"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black/40 border border-white/10"
          />

          <button className="w-full bg-blue-500 hover:bg-blue-600 p-3 rounded-lg">
            Create Business
          </button>

        </form>
      </div>
    </main>
  );
}