"use server";

import { redirect } from "next/navigation";
import { registerService } from "../service/register-service";  

export async function registerAccount(formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    const username = formData.get("username");
    if (!email || !password || !username) {
        return { error: "All fields are required" };
    }
    const response = await registerService({ email, password, username });
    console.log("respone register ==========",response)
    if (response.status!="CREATED") {
        redirect("/register")

    }
    else {
        redirect("/login")
    }

}
