
import { auth } from "../auth";

export async function getUser() {
    const session = await auth();
    console.log("Fetching workspaces..."); 

    const res = await fetch(
        "http://96.9.81.187:8080/api/v1/user",
        {
            method: "GET",
            headers: {
                "accept": "*/*",
                Authorization: `Bearer ${session?.payload?.token}`,
                "Cache-Control": "no-cache",
            }
        }
    );

    const data = await res.json();
    return data;
}

export async function getWorkSpace() {
    const session = await auth();
    console.log("Fetching workspaces..."); 

    const res = await fetch(
        "http://96.9.81.187:8080/api/v1/workspaces?pageNo=0&pageSize=10&sortBy=workspaceId&sortDirection=ASC",
        {
            method: "GET",
            headers: {
                "accept": "*/*",
                Authorization: `Bearer ${session?.payload?.token}`,
                "Cache-Control": "no-cache",
            }
        }
    );

    const data = await res.json();
    return data;
}


export async function createWorkSpace({ workspaceName }) {
        const session = await auth();
        // console.log("session========",session)
        // console.log("Creating workspace with name:", workspaceName);
        // console.log("Session token:", session?.payload?.token);

        const res = await fetch(`http://96.9.81.187:8080/api/v1/workspace`, {
            method: "POST",
            headers: {
                "accept": "*/*",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${session?.payload?.token}`,
            },
            body: JSON.stringify({ workspaceName: workspaceName }),
        });
        const data = await res.json();
        console.log("payload=====",data.payload)
        return data;
}
export async function updateWorkSpace({ id, workspaceName }) {
    const session = await auth();

    const res = await fetch(`http://96.9.81.187:8080/api/v1/workspace/${id}`, {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${session?.payload?.token}`,
        },
        body: JSON.stringify({ 
            workspaceId: id, // Ensure correct ID is used
            workspaceName: workspaceName,
        }),
    });

    const data = await res.json();
    console.log("Updated Payload:", data.payload);
    return data;
}
