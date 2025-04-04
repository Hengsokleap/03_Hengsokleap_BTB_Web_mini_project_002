"use client"; // Mark this as a Client Component

import { MoreHorizontal } from "lucide-react";
import { useRouter } from "next/navigation"; 
import clsx from "clsx";

export default function WorkspaceItem({ id, name, color }) {
    const router = useRouter();

    const openModal = (e) => {
        e.stopPropagation(); 
        console.log("Opening Modal...");
        router.push(`/detailWorkspace?workspaceModal=update&name=${name}&id=${id}`);
    };

    const goToDetail = () => {
        router.push(`/detailWorkspace?name=${name}&id=${id}`);
    };

    return (
        <div
            className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-100 cursor-pointer"
            onClick={goToDetail} 
        >
            <div className="flex items-center gap-2">
                <span className={clsx("w-3 h-3 rounded-full", `bg-${color}-500`)}></span>
                <span className="text-gray-800 font-medium">{name}</span>
            </div>
     
            <button onClick={openModal} onMouseDown={(e) => e.stopPropagation()}>
                <MoreHorizontal size={18} className="text-gray-500" />
            </button>
        </div>
    );
}
