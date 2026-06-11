"use client"

import LightRays from "@/components/LightRays/page";

export default function LightRaysClient() {
    return (
        <div className="fixed inset-0 -z-10" style={{}}>
            <LightRays
                raysOrigin="bottom-center"
                raysColor="#ffffff"
                raysSpeed={1}
                lightSpread={2}
                rayLength={5}
                followMouse={true}
                mouseInfluence={0.1}
                noiseAmount={0}
                distortion={0.2}
                className="custom-rays w-full h-full"
                pulsating={false}
                fadeDistance={1}
                saturation={1}
            />
        </div>
    )
}