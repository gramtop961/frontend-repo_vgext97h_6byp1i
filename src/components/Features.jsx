import { Shield, Zap, Globe2, Sparkles } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast by default",
    description:
      "Optimized for performance with snappy interactions and best‑in‑class Core Web Vitals.",
  },
  {
    icon: Shield,
    title: "Secure & reliable",
    description:
      "Battle‑tested patterns and accessibility‑minded components you can trust.",
  },
  {
    icon: Globe2,
    title: "Responsive everywhere",
    description:
      "Looks great on phones, tablets, and desktops with fluid layouts and typography.",
  },
  {
    icon: Sparkles,
    title: "Polished details",
    description:
      "Subtle gradients, soft shadows, and micro‑animations that feel delightful.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need in one place
          </h2>
          <p className="mt-3 text-gray-600">
            Concise sections, clear copy, and a layout that guides visitors to take action.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{description}</p>
              <div className="mt-4 h-1 w-0 bg-indigo-600 transition-all group-hover:w-16" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
