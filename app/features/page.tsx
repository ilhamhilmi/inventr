import Link from "next/link"
import NeoNavbar from "@/components/NeoNavbar/NeoNavbar";

export default function FeaturesPage() {
    const featuresList = [
        {
            title: "Multi-User Access",
            desc: "Invite your team members, assign roles, and manage permissions. Everyone works together seamlessly.",
            color: "bg-neo-yellow",
        },
        {
            title: "Real-Time Tracking",
            desc: "Live updates on stock levels. Get notified when items run low. Never miss a restock again.",
            color: "bg-neo-pink",
        },
        {
            title: "Smart Analytics",
            desc: "Visualize your inventory data. Track trends, forecast demand, and make informed decisions.",
            color: "bg-neo-cyan",
        },
        {
            title: "Search & Filter",
            desc: "Quickly find any product with powerful search and filtering capabilities.",
            color: "bg-neo-lime",
        },
        {
            title: "Secure Login",
            desc: "Role-based authentication system. Your data stays safe and accessible only to authorized users.",
            color: "bg-neo-orange",
        },
        {
            title: "Export Data",
            desc: "Export your inventory data anytime. Keep backups and share reports with your team.",
            color: "bg-neo-purple",
        },
    ];

    return (
        <div className="min-h-screen bg-white text-black font-['Inter',sans-serif]">
            <NeoNavbar />
            <section className="pt-32 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-block border-[3px] border-black px-4 py-1.5 font-bold text-xs uppercase tracking-[0.15em] bg-neo-yellow mb-4">
                            Everything You Need
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-[1.1]">
                            All the{" "}
                            <span className="bg-neo-cyan px-2 border-[3px] border-black inline-block -rotate-1">
                                Features
                            </span>
                            <br />
                            You'll Ever Need
                        </h1>
                        <p className="mt-6 text-lg font-medium max-w-2xl mx-auto opacity-70">
                            Manage your inventory like a pro with powerful tools designed for teams of all sizes.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuresList.map((feature, index) => (
                            <div
                                key={feature.title}
                                className="border-[3px] border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[11px_11px_0px_0px_rgba(0,0,0,1)] transition-all duration-100"
                            >
                                <div className={`h-2 ${feature.color} border-b-[3px] border-black`} />
                                <div className="p-6">
                                    <div className={`w-12 h-12 ${feature.color} border-[3px] border-black flex items-center justify-center font-black text-xl mb-4`}>
                                        {(index + 1).toString().padStart(2, "0")}
                                    </div>
                                    <h3 className="text-xl font-black mb-2">{feature.title}</h3>
                                    <p className="font-medium text-sm leading-relaxed opacity-70">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-16 text-center">
                        <div className="inline-block border-[3px] border-black p-8 bg-neo-yellow shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] max-w-lg">
                            <h2 className="font-black text-2xl uppercase mb-2">Ready to Start?</h2>
                            <p className="font-medium text-sm opacity-70 mb-4">Create your free account and start managing your inventory today.</p>
                            <Link href="/register-operator"
                                className="inline-block px-8 py-3 border-[3px] border-black bg-white font-black text-sm uppercase tracking-wider shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] transition-all duration-100">
                                Get Started Free
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}