
"use server"
import {createWorkSpace, updateWorkSpace}  from "../service/workspace-service";
import { getWorkSpace } from "../service/workspace-service";
export async function createWorkSpaceAction(_,formData) {
    const workspaceName=formData.get("name");
    console.log("name",workspaceName)
    const rest= await createWorkSpace({workspaceName});
    console.log("action work",rest)

      const createWorkspaces = await getWorkSpace();

    return {
        success: true,
        message: "Workspace create successfully!",
        createdData: createWorkspaces
    };
}

export async function updateWorkSpaceAction(_, formData) {
    const workspaceName = formData.get("name");
    const workspaceId = formData.get("id");

    console.log("Updating Workspace:", workspaceId, workspaceName);

    const updateResponse = await updateWorkSpace({ id: workspaceId, workspaceName });

    // Fetch updated data after update
    const updatedWorkspaces = await getWorkSpace();

    return {
        success: true,
        message: "Workspace updated successfully!",
        updatedData: updatedWorkspaces
    };
}

