export default function CTA() {
  return (
    <section id="get-started" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-violet-600 to-blue-600" />
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="rounded-2xl bg-white/10 p-8 shadow-xl ring-1 ring-white/20 backdrop-blur">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to launch?
            </h2>
            <p className="mt-3 text-indigo-100">
              Use this page as a starting point for your product, portfolio, or campaign. Customize the copy and colors and you’re live.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#"
                className="w-full rounded-lg bg-white px-5 py-3 text-center font-medium text-indigo-700 shadow hover:bg-indigo-50 sm:w-auto"
              >
                Start free
              </a>
              <a
                href="#"
                className="w-full rounded-lg bg-indigo-500/20 px-5 py-3 text-center font-medium text-white ring-1 ring-white/30 hover:bg-indigo-500/30 sm:w-auto"
              >
                Book a demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
