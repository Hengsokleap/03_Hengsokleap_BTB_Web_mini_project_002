"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useActionState } from "react";
import { createWorkSpaceAction, updateWorkSpaceAction } from "../../actions/workspace-action";
import { useEffect, useState } from "react";
import { getWorkSpace } from "../../service/workspace-service";

export default function Popup() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const isOpen = searchParams.get("workspaceModal"); 
    const workspaceName = searchParams.get("name");
    const id = searchParams.get("id");
    const [workspaces, setWorkspaces] = useState([]);

    console.log("Modal Open Status:", isOpen);

    let title = "Create"; 
    const [formState, formAction] = useActionState(
        isOpen === "update" ? updateWorkSpaceAction : createWorkSpaceAction,
        {}
    );

    if (isOpen === "update") {
        title = "Update";
    }

    useEffect(() => {
        async function fetchWorkspaces() {
            try {
                const data = await getWorkSpace();
                console.log("Updated Workspaces List:", data);
                setWorkspaces(data.payload || []);
            } catch (error) {
                console.error("Error fetching workspaces:", error);
            }
        }

        if (formState?.success) {
            console.log("Workspace Updated:", formState.updatedData);
            fetchWorkspaces();
            router.refresh(); 
        }
    }, [formState, router]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex justify-center items-center  bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">{title} Workspace</h2>

                <form action={formAction}>
                    <div className="mb-3">
                        <input type="hidden" name="id" value={id || ""} />
                        <label className="block text-gray-700">Workspace Name:</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border rounded-md"
                            required
                            name="name"
                            defaultValue={workspaceName || ""}
                        />
                    </div>
{/* 
                    {formState?.success && <p className="text-green-600">{formState.message}</p>}
                    {formState?.error && <p className="text-red-600">{formState.error}</p>} */}

                    <div className="flex justify-end space-x-2">
                        <button
                            type="button"
                            onClick={() => router.replace("/dashboard")} 
                            className="px-4 py-2 bg-gray-400 text-white rounded-md"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-md"
                        >
                            {title}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
