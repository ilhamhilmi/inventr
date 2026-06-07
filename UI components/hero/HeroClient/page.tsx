"use client"

import Hero from "@/UI components/hero/Hero"

export default function HeroClient() {
    return (
        <div className="h-full inset-0 -z-10" style={{ width: '100%', height: '100%', position: 'absolute' }}>
            <Hero
                particleColors={["#ffffff"]}
                particleCount={200}
                particleSpread={10}
                speed={0.3}
                particleBaseSize={200}
                moveParticlesOnHover
                alphaParticles={false}
                disableRotation={false}
                pixelRatio={1}
            />
        </div>
    )
}