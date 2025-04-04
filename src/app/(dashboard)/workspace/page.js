import WorkspaceHeader from "@/components/WorkspaceHeader";
import WorkspaceItem from "@/components/WorkspaceItem";
import Popup from "@/components/PopUp";
import { getWorkSpace } from "../../../../service/workspace-service";

export default async function Workspace() {
    const data = await getWorkSpace();
    console.log("getwork====", data);

    return (
        <div className="flex flex-col h-full overflow-y-auto overflow-x-hidden flex-grow pt-2 justify-between">
            <div className="flex flex-col space-y-1 lg:mt-1">
                <div className="p-4 w-full bg-white">
                    
                    <WorkspaceHeader title="Workspace" />
                    {data.payload.map((e) => (
                        <WorkspaceItem key={e.workspaceId} id={e.workspaceId} name={e.workspaceName} color="red" />
                    ))}
                </div>
            </div>
            <Popup />
        </div>
    );
}
