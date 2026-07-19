import Link from "next/link";

const stats = [
  { label: "Active Users", value: "2.4K+" },
  { label: "Items Tracked", value: "85K+" },
  { label: "Low Stock Alerts", value: "1.2K+" },
  { label: "Uptime", value: "99.9%" },
];

export default function NeoHero() {
  return (
    <section className="relative pt-20 sm:pt-24">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-neo-yellow border-[3px] border-black -z-10" />
      <div className="absolute top-40 left-0 w-48 h-48 bg-neo-cyan border-[3px] border-black -z-10" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-neo-pink border-[3px] border-black -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tag */}
          <div className="inline-block border-[3px] border-black px-4 py-1.5 font-bold text-xs uppercase tracking-[0.15em] bg-neo-yellow mb-6">
            Multi User System
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tight">
            Build Your
            <span className="block mt-2">
              <span className="bg-neo-yellow px-3 border-[3px] border-black inline-block -rotate-1">
                Inventory
              </span>
            </span>
            <span className="block mt-2">Space.</span>
          </h1>

          {/* Description */}
          <p className="mt-8 text-lg sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Manage items, track stock, and build your personal inventory space with{" "}
            <span className="bg-neo-cyan px-1 border-[2px] border-black">speed</span>,{" "}
            <span className="bg-neo-pink px-1 border-[2px] border-black">clarity</span>, and{" "}
            <span className="bg-neo-lime px-1 border-[2px] border-black">efficiency</span>.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register-operator"
              className="inline-flex items-center justify-center px-8 py-4 bg-neo-yellow border-[3px] border-black font-black text-sm uppercase tracking-wider shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[11px_11px_0px_0px_rgba(0,0,0,1)] transition-all duration-100"
            >
              Get Started Free
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/inventory"
              className="inline-flex items-center justify-center px-8 py-4 border-[3px] border-black font-black text-sm uppercase tracking-wider shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[11px_11px_0px_0px_rgba(0,0,0,1)] transition-all duration-100"
            >
              Open Inventory
            </Link>
          </div>

          {/* Stats Row */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-[3px] border-black p-4 bg-white shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
              >
                <div className="text-2xl font-black">{stat.value}</div>
                <div className="text-xs font-bold uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}