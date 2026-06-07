"use client"

import Dock from "@/UI components/dock/Dock";
import { useRouter } from "next/navigation";
import { VscHome, VscAccount, VscAdd, VscArchive } from "react-icons/vsc"


export default function DockClient() {

    const router = useRouter()

    const items = [
        { icon: <VscHome className="text-black" size={20} />, 
        label: 'Home', 
        onClick: () => router.push("/"),
    },
        { icon: <VscArchive className="text-black" size={20} />, 
        label: 'Inventory', 
        onClick: () => router.push("/inventory"),
    },
        { icon: <VscAdd className="text-black" size={20} />, label: 'Add Products', onClick: () => router.push("/input-product") },
        { icon: <VscAccount href="/user-profile" className="text-black" size={20} />, label: 'Profile', onClick: () => router.push("/user-profile") },
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