"use client"

import NeoNavbar from "@/components/NeoNavbar/NeoNavbar";
import NeoHero from "@/components/NeoHero/NeoHero";
import NeoFeatures from "@/components/NeoFeatures/NeoFeatures";
import NeoCta from "@/components/NeoCta/NeoCta";
import NeoFooter from "@/components/NeoFooter/NeoFooter";
import NeoAlert from "@/components/NeoAlert/NeoAlert";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-['Inter',sans-serif]">
      <NeoAlert />
      <NeoNavbar />
      <NeoHero />
      <NeoFeatures />
      <NeoCta />
      <NeoFooter />
    </div>
  );
}
