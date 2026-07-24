import { motion } from "motion/react";


const features = [
  {
    number: "01",
    color: "bg-neo-yellow",
    title: "Multi-User Access",
    description:
      "Invite your team members. Assign roles and manage permissions. Everyone works together seamlessly.",
  },
  {
    number: "02",
    color: "bg-neo-pink",
    title: "Real-Time Tracking",
    description:
      "Live updates on stock levels. Get notified when items run low. Never miss a restock again.",
  },
  {
    number: "03",
    color: "bg-neo-cyan",
    title: "Smart Analytics",
    description:
      "Visualize your inventory data. Track trends, forecast demand, and make informed decisions.",
  },
];

export default function NeoFeatures() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-neo-lime border-[3px] border-black -z-10 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block border-[3px] border-black px-4 py-1.5 font-bold text-xs uppercase tracking-[0.15em] bg-neo-cyan mb-4">
            Why Choose Inventr
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-[1.1]">
            Built for{" "}
            <span className="bg-neo-pink px-2 border-[3px] border-black inline-block rotate-1">
              Teams
            </span>
            <br />
            Powered by You
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="border-[3px] border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[11px_11px_0px_0px_rgba(0,0,0,1)] transition-all duration-100"
            >
              <div
                className={`h-2 ${feature.color} border-b-[3px] border-black`}
              />
              <div className="p-6">
                <div
                  className={`w-12 h-12 ${feature.color} border-[3px] border-black flex items-center justify-center font-black text-xl mb-4`}
                >
                  {feature.number}
                </div>
                <h3 className="text-xl font-black mb-2">{feature.title}</h3>
                <p className="font-medium text-sm leading-relaxed opacity-70">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}