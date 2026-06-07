"use client"

import RotatingText from "@/UI components/hero/RotatingText/RotatingText";

export default function RotatingTextClient() {
    return (
        <div>
            <RotatingText
                texts={['Inventory', 'Storage', 'Stock']}
                mainClassName="px-2 sm:px-2 md:px-4 text-white font-poppins overflow-hidden justify-center rounded-md"
                staggerFrom="first"
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                exit={{ y: "120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
                splitBy="characters"
                auto
                loop
            />
        </div>
    )
}