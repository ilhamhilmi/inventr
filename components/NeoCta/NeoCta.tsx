import Link from "next/link";

const steps = [
  {
    step: "01",
    title: "Create Your Account",
    desc: "Sign up as an operator and set up your workspace.",
  },
  {
    step: "02",
    title: "Add Your Products",
    desc: "Input items with quantities, categories, and prices.",
  },
  {
    step: "03",
    title: "Manage & Scale",
    desc: "Track stock, invite users, and grow your inventory.",
  },
];

export default function NeoCta() {
  return (
    <section className="py-20 md:py-28 bg-neo-yellow border-t-[3px] border-b-[3px] border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block border-[3px] border-black px-4 py-1.5 font-bold text-xs uppercase tracking-[0.15em] bg-white mb-4">
              How It Works
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight leading-[1.1]">
              Start in
              <span className="block bg-white px-2 border-[3px] border-black inline-block mt-2 -rotate-1">
                3 Simple
              </span>
              Steps
            </h2>
            <p className="mt-6 font-medium text-lg leading-relaxed">
              From zero to inventory management hero in minutes. No credit card
              required.
            </p>

            <div className="mt-8 space-y-4">
              {steps.map((item) => (
                <div
                  key={item.step}
                  className="flex items-start gap-4 border-[3px] border-black p-4 bg-white shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
                >
                  <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-black text-sm shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-black text-sm uppercase">
                      {item.title}
                    </h4>
                    <p className="text-sm font-medium opacity-70 mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-[3px] border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8">
            <h3 className="font-black text-2xl uppercase mb-4">
              Ready to Build?
            </h3>
            <p className="font-medium mb-6">
              Join thousands of teams already managing their inventory with
              Inventr.
            </p>
            <Link
              href="/register-operator"
              className="inline-flex items-center justify-center w-full px-8 py-4 bg-neo-lime border-[3px] border-black font-black text-sm uppercase tracking-wider shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] transition-all duration-100"
            >
              Create Free Account
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <p className="text-xs font-bold text-center mt-4 opacity-60">
              No credit card required. Free forever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}