"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { KeyRound, Mail, UserRound } from "lucide-react";
import Link from "next/link";
import { registerAccount } from "../../../../actions/register-action";

export default function RegisterComponent() {
  

    return (
        <form className="space-y-6" action={registerAccount}>
       
            <div>
                <Label htmlFor="username" className="text-light-steel-blue flex gap-2 items-start mb-2 text-base">
                    <UserRound size={20} /> Username
                </Label>
                <Input
                    type="text"
                    placeholder="Please type your username"
                    className="bg-ghost-white py-2.5 px-4 rounded-lg w-full text-light-steel-blue/90"
                    name="username"
                    required
                />
            </div>

            <div>
                <Label htmlFor="email" className="text-light-steel-blue flex gap-2 items-start mb-2 text-base">
                    <Mail size={20} /> Email
                </Label>
                <Input
                    type="email"
                    placeholder="Please type your email"
                    className="bg-ghost-white py-2.5 px-4 rounded-lg w-full text-light-steel-blue/90"
                    name="email"
                    required
                />
            </div>

            <div>
                <Label htmlFor="password" className="text-light-steel-blue flex gap-2 items-start mb-2 text-base">
                    <KeyRound size={20} /> Password
                </Label>
                <Input
                    type="password"
                    placeholder="Please type your password"
                    className="bg-ghost-white py-2.5 px-4 rounded-lg w-full text-light-steel-blue/90"
                    name="password"
                    required
                />
            </div>

            <Button type="submit" className="text-base cursor-pointer bg-persian-green text-white py-2.5 rounded-lg w-full font-bold">
                Sign Up
            </Button>

            <div className="text-right mt-2 font-normal">
                Already have an account?{" "}
                <Link href="/login" className="hover:text-persian-green hover:underline">
                    Login
                </Link>
            </div>

            <div className="bg-ghost-white rounded-lg text-center">
                <Button className="flex gap-2 items-start justify-center w-full bg-ghost-white text-charcoal shadow-none hover:bg-ghost-white/50">
                    <img src="/Google Icon.svg" alt="google icon" /> Sign up with Google
                </Button>
            </div>
        </form>
    );
}
