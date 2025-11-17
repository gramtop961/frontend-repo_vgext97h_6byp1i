import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6 py-24 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/70 px-4 py-2 text-sm text-indigo-700 shadow-sm backdrop-blur">
          <Sparkles className="h-4 w-4" />
          <span>Build beautiful apps faster</span>
        </div>
        <h1 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 sm:text-6xl">
          A modern one‑pager for your next big idea
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Launch a clean, responsive page with compelling sections and smooth interactions. No clutter — just what converts.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Get Started <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-gray-700 shadow ring-1 ring-gray-200 hover:bg-gray-50"
          >
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
}
