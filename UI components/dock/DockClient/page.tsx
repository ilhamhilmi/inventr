"use client"

import Dock from "@/UI components/dock/Dock";
import { VscHome, VscAccount, VscAdd } from "react-icons/vsc"

export default function DockClient() {
    const items = [
        { icon: <VscHome className="text-black" size={20} />, label: 'Home', onClick: () => alert('Home!') },
        { icon: <VscAdd className="text-black" size={20} />, label: 'Add Products', onClick: () => alert('Settings!') },
        { icon: <VscAccount href="/user-profile" className="text-black" size={20} />, label: 'Profile', onClick: () => alert('Profile!') },
    ];
    return (
        <div>
            <Dock
                items={items}
                panelHeight={70}
                baseItemSize={50}
                magnification={75}
            />
        </div>
    )
}