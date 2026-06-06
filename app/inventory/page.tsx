"use client"

import Dock from "@/UI components/dock/Dock";
import { VscHome, VscArchive, VscAccount, VscAdd } from "react-icons/vsc"

export default function Dashboard() {
    const items = [
        { icon: <VscHome size={20} />, label: 'Home', onClick: () => alert('Home!') },
        { icon: <VscAdd size={20} />, label: 'Add Products', onClick: () => alert('Settings!') },
        { icon: <VscAccount size={20} />, label: 'Profile', onClick: () => alert('Profile!') },
    ];

    return (
        <div>
            <Dock
                items={items}
                panelHeight={70}
                baseItemSize={50}
                magnification={90}
            />
        </div>
    )
}