"use server"
import { redirect } from "next/navigation";
import { signIn } from "../auth";
export async function loginAccount(_, formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    if (!password) {
        return {
            error: "Password is required"
        }
    }
    await signIn("credentials", {
        email, password, redirect:false
    })
    redirect("/dashboard")
}