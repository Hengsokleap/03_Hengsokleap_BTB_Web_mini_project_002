
"use client"
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function WorkspaceHeader({ title }) {
    const router = useRouter();

    const openModal = () => {
        console.log("Opening Modal...");
        router.push(`/dashboard?workspaceModal=create`);
    };

    return (
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-gray-600 font-semibold text-lg">{title}</h2>
            <button onClick={openModal} className="p-1 rounded-full hover:bg-gray-200">
                <Plus size={18} className="text-gray-500" />
            </button>
        </div>
    );
}
